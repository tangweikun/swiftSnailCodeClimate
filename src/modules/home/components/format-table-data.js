import moment from 'moment'
import getBPResult from '../../blood-pressure/components/blood-ressure-color.js'

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

export default function getRows(healthCareTeams) {
  const { overproofPatients, patients } = healthCareTeams
  const renderItems = (bloodPressureHistory) => {
    function shouldRenderDate(c, i, array) {
      if (i === 0) return true
      const m1 = moment(c.measuredAt)
      const m2 = moment(array[i - 1].measuredAt)
      if (!m1.isSame(m2, 'day')) return true
      return false
    }
    const test = []
    function renderDateItem(item) {
      const hours = moment(item.measuredAt).hour()
      const minute = moment(item.measuredAt).minute()
      const day = moment(item.measuredAt).date()
      const month = moment(item.measuredAt).month() + 1
      const row = {
        _id: item._id,
        measuredAt: `${month}月${day}日 ${hours}:${minute}`,
        handleResult: item.handleResult ? item.handleResult : '',
        state: item.state,
        patientId: item.patientId,
        BloodPressureValue: `${item.systolic}/${item.diastolic}`,
      }
      const BPResult = getBPResult({ HP: item.systolic, LP: item.diastolic })
      const nameAndMobile = patients.filter(patient => item.patientId === patient._id)
      row.fullName = nameAndMobile[0].fullName
      row.mobile = nameAndMobile[0].mobile
      row.colors = BPResult
      return test.push(row)
    }
    const arrayOfTableRows = []
    bloodPressureHistory.map((item, index, arr) => {
      if (shouldRenderDate(item, index, arr)) {
        arrayOfTableRows.push({
          type: 'dateRow',
          value: getWeekday(item.measuredAt),
        })
      }
      arrayOfTableRows.push(item)
      return ''
    })
    arrayOfTableRows.map((item, index) => {
      if (!item.type) {
        return renderDateItem(item, index)
      }
      return test.push(item)
    })
    return test
  }
  if (overproofPatients && overproofPatients.length) {
    return renderItems(overproofPatients)
  }
  return null
}
