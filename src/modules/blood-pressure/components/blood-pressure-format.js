import moment from 'moment'
import getBPResult from './blood-ressure-color.js'

const weekdays = '日一二三四五六'

export function getWeekday(time) {
  if (!time) return ''
  const m = moment(time)
  const today = +m.format('d')
  const thisYear = new Date().getFullYear()
  const yearOfTime = m.year()
  const isThisYear = thisYear === yearOfTime

  return m.format(isThisYear ? 'M月D日 周' : 'Y年M月D日 周') + weekdays[today]
}

const getTime = Date => `${moment(Date).hour()}:${moment(Date).minute()}`

const getSituation = (Date) => {
  const hour = moment(Date).hour()
  if (hour >= 6 && hour < 9) {
    return '晨间（6点-9点）'
  } else if (hour >= 9 && hour < 18) {
    return '白天（9点-18点）'
  }
  return '晚上（18点-6点）'
}
export function getRows(bloodPressureMeasurements) {
  const renderItems = (bloodPressureHistory) => {
    function shouldRenderDate(c, i, array) {
      if (i === 0) return true
      const m1 = moment(c.measuredAt)
      const m2 = moment(array[i - 1].measuredAt)
      if (!m1.isSame(m2, 'day')) return true
      return false
    }
    const rowList = []
    function getMeasureState(measureState) {
      if (measureState.length === 0) return ''
      const measureLabel = measureState.split(',')
      const label = []
      const symptom = []
      measureLabel.map((item) => {
        if (item === '头晕' || item === '头疼' || item === '恶心呕吐') {
          return symptom.push(item)
        }
        return label.push(item)
      })
      return {
        label: label.join(','),
        symptom: symptom.join(','),
      }
    }
    function renderDateItem(item) {
      const tableItem = {}
      const measureState = item.measureState ? getMeasureState(item.measureState) : null
      tableItem.BloodPressureValue = `${item.systolic}/${item.diastolic}`
      tableItem.colors = getBPResult({ HP: item.systolic, LP: item.diastolic })
      tableItem.average = Math.round(((2 * item.diastolic) / 3) + (item.systolic / 3))
      tableItem.pulse = item.heartRate
      tableItem.noteLabel = measureState ? measureState.label : ''
      tableItem.noteSymptom = measureState ? measureState.symptom : ''
      tableItem.measurementSituation = getSituation(item.measuredAt)
      tableItem.measuredAt = getTime(item.measuredAt)
      return rowList.push(tableItem)
    }
    const cache = []
    const cacheArray = []
    bloodPressureHistory.map((item, index, arr) => {
      if (shouldRenderDate(item, index, arr)) {
        while (cache.length > 0) {
          cacheArray.push(cache.pop())
        }
        cacheArray.push({
          type: 'dateRow',
          value: getWeekday(item.measuredAt),
        })
      }
      cache.push(item)
      return ''
    })
    while (cache.length > 0) {
      cacheArray.push(cache.pop())
    }
    cacheArray.map((item, index) => {
      if (!item.type) {
        return renderDateItem(item, index)
      }
      return rowList.push(item)
    })
    return rowList
  }
  if (bloodPressureMeasurements && bloodPressureMeasurements.length) {
    return renderItems(bloodPressureMeasurements)
  }
  return null
}

export function getStatistic(bloodPressureMeasurements, safeRange) {
  if (bloodPressureMeasurements.length === 0) {
    const result = {
      total: 0,
      overDiastolic: 0,
      overSystolic: 0,
      average: 0,
      standard: '0%',
    }
    return result
  }
  const bloodPressure = {
    totalDiastolic: 0,
    totalSystolic: 0,
    lengths: bloodPressureMeasurements.length,
    overproofSystolic: 0,
    overproofDiastolic: 0,
    standard: 0,
  }
  function isOverproof(systolic, diastolic) {
    const { safeRangeSystolicBloodPressure, safeRangeDiastolicBloodPressure } = safeRange
    if (safeRangeSystolicBloodPressure && safeRangeDiastolicBloodPressure) {
      const safeSystolic = safeRangeSystolicBloodPressure.split(',')
      const safeDiastolic = safeRangeDiastolicBloodPressure.split(',')
      if (systolic > safeSystolic[1] || systolic < safeSystolic[0]) {
        bloodPressure.overproofSystolic += 1
      }
      if (diastolic > safeDiastolic[1] || systolic < safeDiastolic[0]) {
        bloodPressure.overproofDiastolic += 1
      }
      if (systolic < 135 && diastolic < 85) {
        bloodPressure.standard += 1
      }
    }
  }
  bloodPressureMeasurements.map((item) => {
    isOverproof(item.systolic, item.diastolic)
    bloodPressure.totalDiastolic += item.diastolic
    bloodPressure.totalSystolic += item.systolic
    return true
  })
  const averageDiastolic = Math.round(bloodPressure.totalDiastolic / bloodPressure.lengths)
  const averageSystolic = Math.round(bloodPressure.totalSystolic / bloodPressure.lengths)
  const average = averageDiastolic && averageSystolic ?
  `${averageSystolic}/${averageDiastolic}` : 0
  const standard = Math.round((bloodPressure.standard / bloodPressure.lengths) * 100) ?
    `${Math.round((bloodPressure.standard / bloodPressure.lengths) * 100)}%` : '0%'
  const result = {
    total: bloodPressureMeasurements.length,
    overDiastolic: bloodPressure.overproofSystolic,
    overSystolic: bloodPressure.overproofDiastolic,
    average,
    standard,
  }
  return result
}
