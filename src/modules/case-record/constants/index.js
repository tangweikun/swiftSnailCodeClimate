export const courseOfHypertension = {
  label: '1、高血压病程',
  key: 'courseOfHypertension',
  options: [],
}

export const highestBloodPressureInClinic = {
  label: '2、诊室最高血压',
  key: 'highestBloodPressureInClinic',
  options: [],
}

export const riskFactors = {
  label: '3、危险因素',
  key: 'riskFactors',
  options: [
    {
      key: 'HYPERTENSIONLEVEL',
      label: '高血压水平1-3级',
    },
    {
      key: 'FIFTY_FIVE_FOR_MALE_SIXTY_FIVE_FOR_FEMALE',
      label: '男性>55岁，女性>65岁',
    },
    {
      key: 'SMOKING',
      label: '吸烟',
    },
    {
      key: 'IMPAIRED_GLUCOSE_TOLERANCE',
      label: '糖耐量受损（餐后2小时血糖7.8-11.0mmol/L）和/或空腹血糖异常(6.1-6.9mmol/L)',
    },
    {
      key: 'DYSLIPIDEMIA',
      label:
        '血脂异常：总胆固醇≥5.7mmol/L（220mg/dl）或低密度脂蛋白胆固醇>3.3mmol/L(130mg/dl)或高密度脂蛋白胆固醇<1.0mmol/L（40mg/dl）',
    },
    {
      key: 'CARDIOVASCULAR_DISEASE',
      label: '早发心血管病家族史（一级亲属发病年龄<50岁）',
    },
    {
      key: 'ABDOMINAL_OBESITY',
      label: '腹型肥胖（腰围：男性≥90cm；女性≥85cm）或肥胖（BMI≥28kg/m2）',
    },
    {
      key: 'ABOVE_HOMOCYSTEINE_TEN',
      label: '高同型半胱氨酸>10μmol/L',
    },
  ],
}

export const targetOrganDamage = {
  label: '4、靶器官损害',
  key: 'targetOrganDamage',
  options: [
    {
      key: 'ELECTROCARDIOGRAM',
      label: '心电图或超声心动图示左心室肥厚',
    },
    {
      key: 'CAROTID_ULTRASOUND',
      label: '颈动脉超声：颈动脉内膜中层厚度>0.9mm或动脉粥样斑块',
    },
    {
      key: 'FEMORAL_ARTERY_PULSE_WAVE_VELOCITY',
      label: '颈-股动脉脉搏波速度>12m/s（选择使用）',
    },

    {
      key: 'ANKLE_ARM_BLOOD_PRESSURE',
      label: '踝臂血压指数<0.9（选择使用）',
    },
    {
      key: 'GLOMERULAR_FILTRATION_RATE',
      label:
        '估算的肾小球滤过率降低[eGFR<60ml/(min*1.73m2)]或血清肌酐轻度升高：男性115-133μmol/L（1.3-1.5mg/dl）,女性107-124μmol/L（1.2-1.4mg/dl）',
    },
    {
      key: 'MICROALBUMINURIA',
      label: '微量白蛋白尿：30-300mg/24h或白蛋白/肌酐≥30mg/g（3.5mg/mmol）',
    },
  ],
}

export const withClinicalIllness = {
  label: '5、伴临床疾患（并发症）',
  key: 'withClinicalIllness',
  options: [
    {
      key: 'CEREBROVASCULAR_DISEASE',
      label: '脑血管病：脑出血、缺血性脑卒中、短暂性脑缺血发作',
    },
    {
      key: 'HEART_DISEASE',
      label: '心脏疾病：心肌梗死史、心绞痛、冠状动脉血运重建史、慢性心衰',
    },
    {
      key: 'KIDNEY_DISEASE',
      label: '肾脏疾病：糖尿病肾病、肾功能受损、血肌酐（男性>133μmol/L，女性>124μmol/L）、蛋白尿（>300mg/24h）',
    },
    {
      key: 'PERIPHERAL_VASCULAR_DISEASE',
      label: '外周血管疾病',
    },
    {
      key: 'RETINOPATHY',
      label: '视网膜病变：出血或渗出、视乳头水肿',
    },
    {
      key: 'DIABETES',
      label: '糖尿病：空腹血糖≥7.0mmol/L(126mg/dl)、餐后血糖≥11.1mmol/L（200mg/dl）、糖化血红蛋白≥6.5%',
    },
  ],
}

export const antihypertensiveDrugsContraindications = {
  label: '6、降压药禁忌症',
  key: 'antihypertensiveDrugsContraindications',
  options: [
    {
      key: 'RAPID_ARRHYTHMIA',
      label: '快速型心律失常',
    },
    {
      key: 'HEART_FAILURE',
      label: '心力衰竭',
    },
    {
      key: 'DEGREE_ATRIOVENTRICULAR_BLOCK',
      label: 'Ⅱ-Ⅲ度房室传导阻滞',
    },
    {
      key: 'PREGNANCY',
      label: '妊娠',
    },
    {
      key: 'GOUT',
      label: '痛风',
    },
    {
      key: 'ASTHMA',
      label: '哮喘',
    },
    {
      key: 'CHRONIC_OBSTRUCTIVE_PULMONARY_DISEASE',
      label: '慢性阻塞性肺疾病',
    },
    {
      key: 'BILATERAL_RENAL_ARTERY_STENOSIS',
      label: '双侧肾动脉狭窄',
    },
    {
      key: 'RENAL_INSUFFICIENCY',
      label: '肾功能不全',
    },
    {
      key: 'HYPERKALEMIA',
      label: '高血钾',
    },
    {
      key: 'IMPAIRED_GLUCOSE_TOLERANCE',
      label: '糖耐量减低',
    },
    {
      key: 'ATHLETE',
      label: '运动员',
    },
  ],
}

export const otherMedicalHistory = {
  label: '7、其他病史',
  key: 'otherMedicalHistory',
  options: [],
}

export const allergyHistory = {
  label: '8、过敏史',
  key: 'allergyHistory',
  options: [],
}

const mapHistorys = [
  {
    key: 'HYPERTENSION',
    label: '高血压',
  },
  {
    key: 'CEREBROVASCULARDISEASE',
    label: '脑血管病（脑出血、缺血性脑卒中、短暂性脑缺血发作等）',
  },
  {
    key: 'CARDIOVASCULARDISEASE',
    label: '心血管病（心肌梗死、心绞痛、冠脉血运重建、慢性心衰等）',
  },
  {
    key: 'KIDNEYDISEASE',
    label: '肾脏疾病（糖尿病肾病、肾功能受损等）',
  },
  {
    key: 'DIABETES',
    label: '糖尿病',
  },
  {
    key: 'PERIPHERALVASCULARDISEASE',
    label: '外周血管疾病',
  },
  {
    key: 'RETINOPATHY',
    label: '视网膜病变（出血、渗出或视乳头水肿）',
  },
  {
    key: 'OTHERS',
    label: '其他',
  },
]
export const familyHistory = {
  label: '9、家族史',
  key: 'familyHistory',
  options: mapHistorys,
  familyGroup: [
    {
      key: 'father',
      label: '父亲',
    },
    {
      key: 'mother',
      label: '母亲',
    },
    {
      key: 'sibling',
      label: '兄弟姐妹',
    },
    {
      key: 'child',
      label: '子女',
    },
  ],
}

export const riskLevelMap = {
  LOW: '低危',
  MID: '中危',
  HIGH: '高危',
  EXTREMELY_HIGH: '极高危',
}

export const hypertensionLevelMap = {
  LEVEL_1: '一级高血压',
  LEVEL_2: '二级高血压',
  LEVEL_3: '三级高血压',
}

export const MedicineUsage = {
  ac: { label: 'ac', means: '饭前' },
  pc: { label: 'pc', means: '饭后' },
  am: { label: 'am', means: '上午' },
  pm: { label: 'pm', means: '下午' },
  sos: { label: 'sos', means: '需要时' },
  prn: { label: 'prn', means: '必要时，长期备用医嘱' },
  st: { label: 'st', means: '立即' },
  pN: { label: 'pN', means: '每晚' },
  hs: { label: 'hs', means: '睡前' },
  Qd: { label: 'Qd', means: '每日一次' },
  Bid: { label: 'Bid', means: '每日二次' },
  Tid: { label: 'Tid', means: '每日三次' },
  Qid: { label: 'Qid', means: '每日四次' },
  Q6h: { label: 'Q6h', means: '每6小时一次' },
}
export const Medicines = [
  {
    category: '钙离子通道拮抗剂',
    name: '硝苯地平片',
    spec: '10mg×100片/瓶',
    dosage: [5, 10],
    usage: [MedicineUsage.Tid],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '硝苯地平缓释片',
    spec: '20mg×30片/盒',
    dosage: [20],
    usage: [MedicineUsage.Bid],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '尼群地平片',
    spec: '10mg×100片/瓶',
    dosage: [10],
    usage: [MedicineUsage.Bid, MedicineUsage.Tid],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '尼卡地平缓释片（佩尔）',
    spec: '40mg*30片',
    dosage: [40],
    usage: [MedicineUsage.Bid],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '非洛地平缓释片(波依定)',
    spec: '5mg×10片/盒',
    dosage: [5, 10],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '苯磺酸氨氯地平片(络活喜)',
    spec: '5mg×7片/盒',
    dosage: [5, 10],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '拉西地平片（乐息平）',
    spec: '4mg*7片/盒',
    dosage: [4, 6],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '硝苯地平控释片(拜新同)',
    spec: '30mg×7片/盒',
    dosage: [30, 60],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '盐酸贝尼地平片(可力洛)',
    spec: '8mg×7片/盒',
    dosage: [8],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '钙离子通道拮抗剂',
    name: '盐酸地尔硫卓片(合心爽)',
    spec: '30mg×20片/盒',
    dosage: [30, 60],
    usage: [MedicineUsage.Tid, MedicineUsage.Qid],
  },
  {
    category: '利尿剂',
    name: '双氢克脲塞（双克、氢氯噻嗪片）',
    spec: '25mg×100片/瓶',
    dosage: [25, 50, 75, 100],
    usage: [MedicineUsage.Qd, MedicineUsage.Bid],
  },
  {
    category: '利尿剂',
    name: '吲达帕胺片',
    spec: '2.5mg×30片/盒',
    dosage: [1.25, 2.5],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '利尿剂',
    name: '吲达帕胺缓释片（钠催离）',
    spec: '1.5mg×30片/盒，',
    dosage: [1.5],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '盐酸普萘洛尔片',
    spec: '10mg×100片/瓶',
    dosage: [10],
    usage: [MedicineUsage.Bid, MedicineUsage.Tid],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '阿替洛尔片',
    spec: '25mg×100片/瓶',
    dosage: [50, 100],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '酒石酸美托洛尔片',
    spec: '25mg×20片/盒',
    dosage: [25, 50],
    usage: [MedicineUsage.Bid],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '琥珀酸美托洛尔缓释片(倍他乐克)',
    spec: '47.5mg×7片/盒',
    dosage: [23.75, 47.5],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '盐酸阿罗洛尔片(阿尔马尔)',
    spec: '10mg×10片/盒',
    dosage: [10],
    usage: [MedicineUsage.Bid],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '富马酸比索洛尔片(康忻)',
    spec: '5mg×10片/盒',
    dosage: [5, 10],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '富马酸比索洛尔片(博苏)',
    spec: '5mg×10片/盒',
    dosage: [5],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '卡维地洛片(络德)',
    spec: '10mg×20片/盒',
    dosage: [12.5, 15, 17.5, 20, 22.5, 25],
    usage: [MedicineUsage.Qd, MedicineUsage.Bid],
  },
  {
    category: 'α、β受体阻滞剂（洛尔）',
    name: '特拉唑嗪',
    spec: '2mg×14片/盒',
    dosage: [1, 2, 3, 4],
    usage: [MedicineUsage.Qd, MedicineUsage.Bid, MedicineUsage.pN, MedicineUsage.hs],
  },
  {
    category: '无数据',
    name: '卡托普利片',
    spec: '25mg×100片/瓶',
    dosage: [12.5, 25, 37.5, 50],
    usage: [MedicineUsage.Bid, MedicineUsage.Tid],
  },
  {
    category: '无数据',
    name: '马来酸依那普利片',
    spec: '10mg×16片/盒',
    dosage: [10, 20],
    usage: [MedicineUsage.Bid],
  },
  {
    category: '无数据',
    name: '福辛普利钠片(蒙诺)',
    spec: '10mg×14片/盒',
    dosage: [10, 20],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '无数据',
    name: '盐酸贝那普利片(洛汀新)',
    spec: '10mg×14片/盒',
    dosage: [10, 20],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '无数据',
    name: '雷米普利片(瑞素坦)',
    spec: '5mg×14片/盒',
    dosage: [2.5, 5, 7.5, 10],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '无数据',
    name: '培哚普利片(雅施达)',
    spec: '4mg×30片/盒',
    dosage: [4, 8],
    usage: [MedicineUsage.Qd],
  },
  {
    category: '无数据',
    name: '咪哒普利片(达爽)',
    spec: '10mg×10片/袋',
    dosage: [10],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'ARB',
    name: '氯沙坦钾片(科素亚(0.1g))',
    spec: '100mg×7片/盒',
    dosage: [50, 100],
    usage: [MedicineUsage.Qd],
  },
  // {
  //   category: 'ARB',
  //   name: '缬沙坦胶囊(丽珠维可)',
  //   spec: '10.54元/盒',
  //   dosage: '80～160mg',
  //   usage: [MedicineUsage.Qd],
  // },
  {
    category: 'ARB',
    name: '替米沙坦片(美卡素)',
    spec: '80mg×7片/盒',
    dosage: [40, 80],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'ARB',
    name: '坎地沙坦西酯（必洛斯）',
    spec: '8mg×7片/盒',
    dosage: [8, 16],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'ARB',
    name: '奥美沙坦酯片',
    spec: '20mg×7片/盒',
    dosage: [20],
    usage: [MedicineUsage.Qd],
  },
  {
    category: 'ARB',
    name: '厄贝沙坦片(安博维)',
    spec: '150mg×7片/盒',
    dosage: [150, 300],
    usage: [MedicineUsage.Qd],
  },
  // {
  //   category: '复方制剂',
  //   name: '缬沙坦氨氯地平片',
  //   spec: '80mg/5mg×7片/盒',
  //   dosage: '85mg+5mg',
  //   usage: [MedicineUsage.Qd],
  // },
  // {
  //   category: '复方制剂',
  //   name: '氯沙坦钾氢氯噻嗪片',
  //   spec: '50mg/12.5mg×7片/盒',
  //   dosage: '50mg/12.5mg',
  //   instructions: '1/日',
  //   humanWords: '每次大小各1片',
  // },
  // {
  //   category: '复方制剂',
  //   name: '厄贝沙坦氢氯噻嗪片',
  //   spec: '150mg/12.5mg×7片/盒',
  //   dosage: '150mg/12.5mg',
  //   instructions: '1/日',
  //   humanWords: '每次大小各1片',
  // },
  // {
  //   category: '多效复方制剂',
  //   name: '马来酸依那普利叶酸片',
  //   spec: '10mg/0.8mg×7片/盒',
  //   dosage: '10mg/0.8mg',
  //   instructions: '1/日',
  //   humanWords: '每次大小各1片',
  // },
  // {
  //   category: '多效复方制剂',
  //   name: '氨氯地平阿托伐他汀钙片',
  //   spec: '5mg/10mg×7片/盒',
  //   dosage: '5mg/10mg',
  //   instructions: '1/日',
  //   humanWords: '每次大小各1片',
  // },
]

export const MedicinesOption = (() => {
  const rst = []
  Medicines.forEach((m) => {
    const temp = {
      value: m.name,
      label: m.name,
      children: [],
    }
    const tempUsage = []
    m.usage.forEach((u) => {
      tempUsage.push({
        value: u.label,
        label: u.label,
        title: u.means,
      })
    })

    m.dosage.forEach((d) => {
      const dosageTemp = {
        value: d,
        label: `${d}mg`,
        children: tempUsage,
      }
      temp.children.push(dosageTemp)
    })
    rst.push(temp)
  })
  return rst
})()
