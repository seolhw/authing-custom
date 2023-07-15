const { AuthenticationClient } = require('authing-js-sdk')
const chineseRandomName = require('chinese-random-name');
const R = require('ramda');
const faker = require('faker');
faker.locale = 'zh_CN';
const pinyin = require('pinyin');

const deps = [
  {
    "id": 1,
    "openDepartmentId": 1,
    "code": "长鑫存储2",
    "name": "长鑫存储2",
    "description": 1,
    "__raw": {
      "DEPT_ID": 1,
      "DEPT_CODE": "长鑫存储2",
      "DEPT_NAME": "长鑫存储2"
    },
    "isRoot": true,
    "customizedInfo": {},
    "leaderUserIdsInIdp": [],
    "leaderUserId": ""
  },
  {
    "id": 37,
    "openDepartmentId": 37,
    "code": "00000037",
    "name": "CXMT",
    "description": 37,
    "parentId": 1,
    "__raw": {
      "DEPT_ID": 37,
      "DEPT_CODE": "00000037",
      "DEPT_NAME": "CXMT",
      "SUPER_DEPT_ID": 1
    },
    "isRoot": false,
    "customizedInfo": {},
    "leaderUserIdsInIdp": [],
    "leaderUserId": ""
  },
  {
    "id": 38,
    "openDepartmentId": 38,
    "code": "00000038",
    "name": "CXMT(JX)",
    "description": 38,
    "parentId": 1,
    "__raw": {
      "DEPT_ID": 38,
      "DEPT_CODE": "00000038",
      "DEPT_NAME": "CXMT(JX)",
      "SUPER_DEPT_ID": 1
    },
    "isRoot": false,
    "customizedInfo": {},
    "leaderUserIdsInIdp": [],
    "leaderUserId": ""
  },
  {
    "id": 39,
    "openDepartmentId": 39,
    "code": "00000039",
    "name": "AMI",
    "description": 39,
    "parentId": 1,
    "__raw": {
      "DEPT_ID": 39,
      "DEPT_CODE": "00000039",
      "DEPT_NAME": "AMI",
      "SUPER_DEPT_ID": 1
    },
    "isRoot": false,
    "customizedInfo": {},
    "leaderUserIdsInIdp": [],
    "leaderUserId": ""
  },
  {
    "id": 874,
    "openDepartmentId": 874,
    "code": "00000874",
    "name": "ESD",
    "description": 874,
    "parentId": 785,
    "__raw": {
      "DEPT_ID": 874,
      "DEPT_CODE": "00000874",
      "DEPT_NAME": "ESD",
      "DEPT_TYPE_ID": 4,
      "DEPT_GRADE": 4,
      "COMP_ID": 37,
      "SUPER_DEPT_ID": 785,
      "LEAD_EMP_ID": 9563,
      "LEAD2_EMP_ID": null,
      "EFFECT_DATE": "2019-05-27",
      "DISAB_DATE": null,
      "IS_DISAB": null,
      "CHANGE_DATE": "2022-05-26",
      "BP_ID": 9305,
      "VP_EMP_ID": 1341,
      "FUNC_LEAD_EMP_ID": 56,
      "SSO_DATA_FLAG": "1",
      "DEPT_PATH": "TD/Device/ERA/ESD"
    },
    "isRoot": false,
    "customizedInfo": {
      "DEPTYPE": 4,
      "DEPGRADE": 4,
      "COMPID": 37,
      "DEPOWNER": 9563,
      "DEPOWNER2": null,
      "EFFECTDATE": "2019-05-27",
      "DISABLEDDATE": null,
      "ISDISABLED": null,
      "CHANGEDATE": "2022-05-26",
      "HRBP": 9305,
      "DEPVP": 1341,
      "FUNCTIONDIRECTOR": 56,
      "DEPFULLNAME": "TD/Device/ERA/ESD"
    },
    "leaderUserIdsInIdp": [
      "559"
    ],
    "leaderUserId": ""
  },
  {
    "id": 785,
    "openDepartmentId": 785,
    "code": "00000785",
    "name": "ERA",
    "description": 785,
    "parentId": 37,
    "__raw": {
      "DEPT_ID": 785,
      "DEPT_CODE": "00000785",
      "DEPT_NAME": "ERA",
      "DEPT_TYPE_ID": 4,
      "DEPT_GRADE": 3,
      "COMP_ID": 37,
      "SUPER_DEPT_ID": 729,
      "LEAD_EMP_ID": 9563,
      "LEAD2_EMP_ID": null,
      "EFFECT_DATE": "2021-11-01",
      "DISAB_DATE": null,
      "IS_DISAB": null,
      "CHANGE_DATE": "2022-05-26",
      "BP_ID": 9305,
      "VP_EMP_ID": 1341,
      "FUNC_LEAD_EMP_ID": 56,
      "SSO_DATA_FLAG": "1",
      "DEPT_PATH": "TD/Device/ERA"
    },
    "isRoot": false,
    "customizedInfo": {
      "DEPTYPE": 4,
      "DEPGRADE": 3,
      "COMPID": 37,
      "DEPOWNER": 9563,
      "DEPOWNER2": null,
      "EFFECTDATE": "2021-11-01",
      "DISABLEDDATE": null,
      "ISDISABLED": null,
      "CHANGEDATE": "2022-05-26",
      "HRBP": 9305,
      "DEPVP": 1341,
      "FUNCTIONDIRECTOR": 56,
      "DEPFULLNAME": "TD/Device/ERA"
    },
    "leaderUserIdsInIdp": [
      "9563"
    ],
    "leaderUserId": ""
  },
  {
    "id": 875,
    "openDepartmentId": 875,
    "code": "00000875",
    "name": "REL",
    "description": 875,
    "parentId": 785,
    "__raw": {
      "DEPT_ID": 875,
      "DEPT_CODE": "00000875",
      "DEPT_NAME": "REL",
      "DEPT_TYPE_ID": 4,
      "DEPT_GRADE": 4,
      "COMP_ID": 37,
      "SUPER_DEPT_ID": 785,
      // "LEAD_EMP_ID": 553,
      "LEAD2_EMP_ID": null,
      "EFFECT_DATE": "2020-05-01",
      "DISAB_DATE": null,
      "IS_DISAB": null,
      "CHANGE_DATE": "2022-05-26",
      "BP_ID": 9305,
      "VP_EMP_ID": 1341,
      "FUNC_LEAD_EMP_ID": 56,
      "SSO_DATA_FLAG": "1",
      "DEPT_PATH": "TD/Device/ERA/REL"
    },
    "isRoot": false,
    "customizedInfo": {
      "DEPTYPE": 4,
      "DEPGRADE": 4,
      "COMPID": 37,
      // "DEPOWNER": 553,
      "DEPOWNER2": null,
      "EFFECTDATE": "2020-05-01",
      "DISABLEDDATE": null,
      "ISDISABLED": null,
      "CHANGEDATE": "2022-05-26",
      "HRBP": 9305,
      "DEPVP": 1341,
      "FUNCTIONDIRECTOR": 56,
      "DEPFULLNAME": "TD/Device/ERA/REL"
    },
    "leaderUserIdsInIdp": [
      "553", "9563"
    ],
    "leaderUserId": ""
  }
]


const userBase = {
  "customizedInfo": {
    "CNAME": "王康银NG-01",
    "SHOW_NAME": "王康银(Kangyin Wang)",
    "BIRTHDAY": "1986-12-17",
    "description": "",
    "Surname": "Wang",
    "GivenName": "Kangyin",
    "SSOCNAME": "E-王康银",
    "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
    "REPORTTO": 299,
    "REPORTTONAME": "陈志兴(Jason Chen)",
    "DEPID": 716,
    "DEPCODE": "Sub Section",
    "DEPABBR": "Water Treatment",
    "DEPFULLNAME": "OEC/Fac/HF FO/Water Treatment",
    "DEPGRADE": 4,
    "COSTCENTER": "C003080300",
    "COSTTYPE": 1,
    "COSTLINE": 4,
    "JOINDATE": "2021-07-26",
    "LEAVEDATE": null,
    "EMPTYPE": 1,
    "EMPSTATUS": 1,
    "JOBLEVEL": 117,
    "EMPGRADE": 317,
    "JOBID": 29407,
    "JOBTITLE": "*****",
    "JOINTYPE": 2,
    "CONTRACT": 4,
    "CONTRACTNAME": "CXMT",
    "NCGTYPE": 1,
    "WORKCITY": 10,
    "WORKCITYNAME": "合肥",
    "JOBPROPERTY": 2,
    "ISANHUI": 1,
    "CHANGEDATE": null,
    "JOBCUSTOM2": 0,
    "AGE": null,
    "JOBSTATUS": 1,
    "ISDIR": 0,
    "HRBP": 8613,
    "SERVICECOMP": "8000",
    "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
    "PRIVATEMOBILE": null,
    "ZKEYPOSITION": null,
    "ZKEYTALENT": null,
    "JOBFUNCTION": "T"
  },
  "profile": {
    "externalId": 9563,
    "username": "E00450",
    "name": "Kangse Wang",
    "nickname": "E00450-7",
    "profile": "王银色(Kangyin Wang)",
    "gender": "M",
    "email": 'E00450@ad03.authing.cn',
    "phone": "16655100838",
    "country": 41,
    "mainDepartmentId": 874,
    "address": "王银色(合肥)",
    "phoneVerified": true,
    "emailVerified": false,
    "familyName": "Wang",
    "givenName": "Kangyi"
  },
  "thirdDepartmentIds": [
    874
  ],
  "userIdInIdp": 9563,
  "__raw": {
    "EMP_ID": 535,
    "CNAME": "王康银",
    "EMP_CODE": "E00450",
    "ENAME": "Kangyin Wang",
    "ENAME_SURNA": "Wang",
    "ENAME_GIVEN": "Kangyin",
    "SSO_CNAME": "E-王康银",
    "SHOW_NAME": "王康银(Kangyin Wang)",
    "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
    "GENDER_ID": 1,
    "BIRT_DATE": "1986-12-18",
    "EMAIL": 'E00450@ad03.authing.cn',
    "OFFICE_MOBILE": "16655100838",
    "REPORT_ID": 299,
    "REPORT_NAME": "陈志兴(Jason Chen)",
    "DEPT_ID": 716,
    "DEPT_CODE": "Sub Section",
    "DEPT_NAME": "Water Treatment",
    "DEPT_PATH": "OEC/Fac/HF FO/Water Treatment",
    "DEPT_GRADE": 4,
    "COST_CODE": "C003080300",
    "COST_TYPE_ID": 1,
    "COST_LINE_ID": 4,
    "JOIN_DATE": "2021-07-26",
    "LEAVE_DATE": null,
    "EMP_TYPE_ID": 1,
    "EMP_STATU_ID": 1,
    "JOB_LEVEL_ID": 117,
    "EMP_GRADE_ID": 317,
    "JOB_ID": 29407,
    "JOB_CNAME": "*****",
    "JOIN_TYPE_ID": 2,
    "CONT_ID": 4,
    "CONT_CNAME": "CXMT",
    "COUNT_ID": 41,
    "NCG_TYPE_ID": 1,
    "WORK_CITY_ID": 2,
    "WORK_CITY_NAME": "合肥",
    "OFFICE": "王康银(合肥)",
    "JOB_PROP_ID": 2,
    "IS_ANHUI_ID": 1,
    "CHANGE_DATE": null,
    "JOB_ATTR_ID": 0,
    "AGE": null,
    "JOB_STATU_ID": 1,
    "IS_DIR_ID": 0,
    "BP_ID": 8613,
    "SER_COMP": "8000",
    "SSO_SER_COMP_NAME": "E00450(长鑫存储技术有限公司)",
    "EMP_PRI_PHONE": null,
    "KEY_POS_ID": null,
    "KEY_EMP_ID": null,
    "JOB_FUNC": "T",
    "SSO_DATA_FLAG": "1",
    "description": ""
  }
}

const testLi = {
  "customizedInfo": {
    "CNAME": "王康银NG-01",
    "SHOW_NAME": "王康银(Kangyin Wang)",
    "BIRTHDAY": "1986-12-17",
    "description": "",
    "Surname": "Wang",
    "GivenName": "Kangyin",
    "SSOCNAME": "E-王康银",
    "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
    "REPORTTO": 299,
    "REPORTTONAME": "陈志兴(Jason Chen)",
    "DEPID": 716,
    "DEPCODE": "Sub Section",
    "DEPABBR": "Water Treatment",
    "DEPFULLNAME": "OEC/Fac/HF FO/Water Treatment",
    "DEPGRADE": 4,
    "COSTCENTER": "C003080300",
    "COSTTYPE": 1,
    "COSTLINE": 4,
    "JOINDATE": "2021-07-26",
    "LEAVEDATE": null,
    "EMPTYPE": 1,
    "EMPSTATUS": 1,
    "JOBLEVEL": 117,
    "EMPGRADE": 317,
    "JOBID": 29407,
    "JOBTITLE": "*****",
    "JOINTYPE": 2,
    "CONTRACT": 4,
    "CONTRACTNAME": "CXMT",
    "NCGTYPE": 1,
    "WORKCITY": 10,
    "WORKCITYNAME": "合肥",
    "JOBPROPERTY": 2,
    "ISANHUI": 1,
    "CHANGEDATE": null,
    "JOBCUSTOM2": 0,
    "AGE": null,
    "JOBSTATUS": 1,
    "ISDIR": 0,
    "HRBP": 8613,
    "SERVICECOMP": "8000",
    "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
    "PRIVATEMOBILE": null,
    "ZKEYPOSITION": null,
    "ZKEYTALENT": null,
    "JOBFUNCTION": "T"
  },
  "profile": {
    "externalId": 9563,
    "username": "test-li",
    "name": "test-li",
    "nickname": "test-li",
    "profile": "test-li(Kangyin Wang)",
    "gender": "M",
    "email": 'test-li@ad03.authing.cn',
    "phone": "16655100838",
    "country": 41,
    "mainDepartmentId": 39,
    "address": "test-li(合肥)",
    "phoneVerified": true,
    "emailVerified": false,
    "familyName": "Wang",
    "givenName": "test-li"
  },
  "thirdDepartmentIds": [
    39
  ],
  "userIdInIdp": 9563562,
  "__raw": {
    "EMP_ID": 535,
    "CNAME": "王康银",
    "EMP_CODE": "E00450",
    "ENAME": "Kangyin Wang",
    "ENAME_SURNA": "Wang",
    "ENAME_GIVEN": "Kangyin",
    "SSO_CNAME": "E-王康银",
    "SHOW_NAME": "王康银(Kangyin Wang)",
    "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
    "GENDER_ID": 1,
    "BIRT_DATE": "1986-12-18",
    "EMAIL": 'E00450@ad03.authing.cn',
    "OFFICE_MOBILE": "16655100838",
    "REPORT_ID": 299,
    "REPORT_NAME": "陈志兴(Jason Chen)",
    "DEPT_ID": 716,
    "DEPT_CODE": "Sub Section",
    "DEPT_NAME": "Water Treatment",
    "DEPT_PATH": "OEC/Fac/HF FO/Water Treatment",
    "DEPT_GRADE": 4,
    "COST_CODE": "C003080300",
    "COST_TYPE_ID": 1,
    "COST_LINE_ID": 4,
    "JOIN_DATE": "2021-07-26",
    "LEAVE_DATE": null,
    "EMP_TYPE_ID": 1,
    "EMP_STATU_ID": 1,
    "JOB_LEVEL_ID": 117,
    "EMP_GRADE_ID": 317,
    "JOB_ID": 29407,
    "JOB_CNAME": "*****",
    "JOIN_TYPE_ID": 2,
    "CONT_ID": 4,
    "CONT_CNAME": "CXMT",
    "COUNT_ID": 41,
    "NCG_TYPE_ID": 1,
    "WORK_CITY_ID": 2,
    "WORK_CITY_NAME": "合肥",
    "OFFICE": "王康银(合肥)",
    "JOB_PROP_ID": 2,
    "IS_ANHUI_ID": 1,
    "CHANGE_DATE": null,
    "JOB_ATTR_ID": 0,
    "AGE": null,
    "JOB_STATU_ID": 1,
    "IS_DIR_ID": 0,
    "BP_ID": 8613,
    "SER_COMP": "8000",
    "SSO_SER_COMP_NAME": "E00450(长鑫存储技术有限公司)",
    "EMP_PRI_PHONE": null,
    "KEY_POS_ID": null,
    "KEY_EMP_ID": null,
    "JOB_FUNC": "T",
    "SSO_DATA_FLAG": "1",
    "description": ""
  }
}

const userList = new Array(2).fill().map((_, index) => {
  const user = R.clone(userBase)
  const randomName = chineseRandomName.generate();
  const randomAddress = faker.address.streetAddress();
  const externalId = faker.datatype.number({ min: 100000, max: 999999 })
  const username = `E${(index + 1).toString().padStart(6, '0')}`
  const date = faker.date.past(30).toISOString().split('T')[0]
  const phoneNumber = faker.phone.phoneNumber()
  const randomEmail = `${username}@ad03.authing.cn`;

  const englishName = pinyin.pinyin(randomName, {
    style: 'normal',
    heteronym: false
  }).join(' ');


  user.profile.externalId = externalId
  user.profile.username = username
  user.profile.name = randomName
  user.profile.nickname = username
  user.profile.profile = `${randomName}(${englishName})`
  user.profile.gender = faker.random.arrayElement(['M', 'F']);
  user.profile.email = randomEmail
  user.profile.phone = phoneNumber
  user.profile.address = `${randomName}(${randomAddress})`
  user.profile.familyName = englishName.split(' ')[0]
  user.profile.givenName = englishName.split(' ')[1]

  user.userIdInIdp = externalId

  user.__raw.EMP_ID = externalId
  user.__raw.CNAME = randomName
  user.__raw.EMP_CODE = username
  user.__raw.ENAME = englishName
  user.__raw.ENAME_SURNA = englishName.split(' ')[0]
  user.__raw.ENAME_GIVEN = englishName.split(' ')[1]
  user.__raw.SSO_CNAME = `E-${randomName}`
  user.__raw.SHOW_NAME = `${randomName}(${englishName})`
  user.__raw.SHOW_NAME_OTHER = `${englishName} (${randomName})`
  user.__raw.BIRT_DATE = date
  user.__raw.EMAIL = randomEmail
  user.__raw.OFFICE_MOBILE = phoneNumber
  user.__raw.REPORT_NAME = `${randomName}(${englishName})`
  user.__raw.OFFICE = `${randomName}(${randomAddress})`
  user.__raw.SSO_SER_COMP_NAME = `${username}(长鑫存储技术有限公司)`

  user.customizedInfo.CNAME = randomName
  user.customizedInfo.SSOCNAME = `E-${randomName}`
  user.customizedInfo.SHOW_NAME = `${randomName}(${englishName})`
  user.customizedInfo.SHOW_NAME_OTHER = `${englishName} (${randomName})`
  user.customizedInfo.BIRTHDAY = date
  user.customizedInfo.Surname = englishName.split(' ')[0]
  user.customizedInfo.GivenName = englishName.split(' ')[1]
  user.customizedInfo.SERVICECOMPNAME = `${username}(长鑫存储技术有限公司)`

  // 换部门
  user.thirdDepartmentIds = [8740]
  user.profile.mainDepartmentId = 8740

  return user
})

const depBase = {

}

const depList = new Array(1196).fill().map((_, index) => {
  index ++ 
  return  {
    "id": 8740 + index,
    "openDepartmentId": 8740 + index,
    "code": "000008740" + index,
    "name": "ESD" + index,
    "description": 8740 + index,
    "parentId": 785,
    "__raw": {
      "DEPT_ID": 8740 + index,
      "DEPT_CODE": "000008740" + index,
      "DEPT_NAME": "ESD",
      "DEPT_TYPE_ID": 4,
      "DEPT_GRADE": 4,
      "COMP_ID": 37,
      "SUPER_DEPT_ID": 785,
      "LEAD_EMP_ID": 9563,
      "LEAD2_EMP_ID": null,
      "EFFECT_DATE": "2019-05-27",
      "DISAB_DATE": null,
      "IS_DISAB": null,
      "CHANGE_DATE": "2022-05-26",
      "BP_ID": 9305,
      "VP_EMP_ID": 1341,
      "FUNC_LEAD_EMP_ID": 56,
      "SSO_DATA_FLAG": "1",
      "DEPT_PATH": "TD/Device/ERA/ESD"
    },
    "isRoot": false,
    "customizedInfo": {
      "DEPTYPE": 4,
      "DEPGRADE": 4,
      "COMPID": 37,
      "DEPOWNER": 9563,
      "DEPOWNER2": null,
      "EFFECTDATE": "2019-05-27",
      "DISABLEDDATE": null,
      "ISDISABLED": null,
      "CHANGEDATE": "2022-05-26",
      "HRBP": 9305,
      "DEPVP": 1341,
      "FUNCTIONDIRECTOR": 56,
      "DEPFULLNAME": "TD/Device/ERA/ESD"
    },
    "leaderUserIdsInIdp": [
      "9563"
    ],
    "leaderUserId": ""
  }
})

const authenticationClient = new AuthenticationClient({
  appId: '63b3dd78233f54941b6d0196',
  secret: '8067d04b8fb049e639239664dbe84005',
  appHost: 'http://app666.dev.lihuiwang.net:3000',
  protocol: 'oauth',
  redirectUri: 'http://localhost:6001/login'
});

const url = authenticationClient.buildAuthorizeUrl()

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    href: url
  })
  // ctx.body = url
})

router.get('/login', async (ctx, next) => {
  const code = ctx.query.code
  const res = await authenticationClient.getAccessTokenByCode(code)
  const user = await authenticationClient.getUserInfoByAccessToken(res.access_token)
  await ctx.render('login', {
    href: authenticationClient.buildLogoutUrl(),
    isLogin: true,
    token: JSON.stringify(res, null, 2),
    user: JSON.stringify(user, null, 2),
  })
})

router.get('/logout', async (ctx, next) => {
  ctx.body = '退出成功'
})

router.get('/health', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": {
      "success": true
    }
  }
})

router.post('/users', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": [
      {
        "customizedInfo": {
          "CNAME": "王康银NG-01",
          "SHOW_NAME": "王康银(Kangyin Wang)",
          "BIRTHDAY": "1986-12-17",
          "description": "",
          "Surname": "Wang",
          "GivenName": "Kangyin",
          "SSOCNAME": "E-王康银",
          "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
          "REPORTTO": 299,
          "REPORTTONAME": "陈志兴(Jason Chen)",
          "DEPID": 716,
          "DEPCODE": "Sub Section",
          "DEPABBR": "Water Treatment",
          "DEPFULLNAME": "OEC/Fac/HF FO/Water Treatment",
          "DEPGRADE": 4,
          "COSTCENTER": "C003080300",
          "COSTTYPE": 1,
          "COSTLINE": 4,
          "JOINDATE": "2021-07-26",
          "LEAVEDATE": null,
          "EMPTYPE": 1,
          "EMPSTATUS": 1,
          "JOBLEVEL": 117,
          "EMPGRADE": 317,
          "JOBID": 29407,
          "JOBTITLE": "*****",
          "JOINTYPE": 2,
          "CONTRACT": 4,
          "CONTRACTNAME": "CXMT",
          "NCGTYPE": 1,
          "WORKCITY": 10,
          "WORKCITYNAME": "合肥",
          "JOBPROPERTY": 2,
          "ISANHUI": 1,
          "CHANGEDATE": null,
          "JOBCUSTOM2": 0,
          "AGE": null,
          "JOBSTATUS": 1,
          "ISDIR": 0,
          "HRBP": 8613,
          "SERVICECOMP": "8000",
          "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
          "PRIVATEMOBILE": null,
          "ZKEYPOSITION": null,
          "ZKEYTALENT": null,
          "JOBFUNCTION": "T"
        },
        "profile": {
          "externalId": 9563,
          "username": "E00450",
          "name": "Kangse Wang",
          "nickname": "E00450-7",
          "profile": "王银色(Kangyin Wang)",
          "gender": "M",
          "email": 'E00450@ad03.authing.cn',
          "phone": "16655100838",
          "country": 41,
          "mainDepartmentId": 874,
          "address": "王银色(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "Kangyi"
        },
        "thirdDepartmentIds": [
          874
        ],
        "userIdInIdp": 9563,
        "__raw": {
          "EMP_ID": 535,
          "CNAME": "王康银",
          "EMP_CODE": "E00450",
          "ENAME": "Kangyin Wang",
          "ENAME_SURNA": "Wang",
          "ENAME_GIVEN": "Kangyin",
          "SSO_CNAME": "E-王康银",
          "SHOW_NAME": "王康银(Kangyin Wang)",
          "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
          "GENDER_ID": 1,
          "BIRT_DATE": "1986-12-18",
          "EMAIL": 'E00450@ad03.authing.cn',
          "OFFICE_MOBILE": "16655100838",
          "REPORT_ID": 299,
          "REPORT_NAME": "陈志兴(Jason Chen)",
          "DEPT_ID": 716,
          "DEPT_CODE": "Sub Section",
          "DEPT_NAME": "Water Treatment",
          "DEPT_PATH": "OEC/Fac/HF FO/Water Treatment",
          "DEPT_GRADE": 4,
          "COST_CODE": "C003080300",
          "COST_TYPE_ID": 1,
          "COST_LINE_ID": 4,
          "JOIN_DATE": "2021-07-26",
          "LEAVE_DATE": null,
          "EMP_TYPE_ID": 1,
          "EMP_STATU_ID": 1,
          "JOB_LEVEL_ID": 117,
          "EMP_GRADE_ID": 317,
          "JOB_ID": 29407,
          "JOB_CNAME": "*****",
          "JOIN_TYPE_ID": 2,
          "CONT_ID": 4,
          "CONT_CNAME": "CXMT",
          "COUNT_ID": 41,
          "NCG_TYPE_ID": 1,
          "WORK_CITY_ID": 2,
          "WORK_CITY_NAME": "合肥",
          "OFFICE": "王康银(合肥)",
          "JOB_PROP_ID": 2,
          "IS_ANHUI_ID": 1,
          "CHANGE_DATE": null,
          "JOB_ATTR_ID": 0,
          "AGE": null,
          "JOB_STATU_ID": 1,
          "IS_DIR_ID": 0,
          "BP_ID": 8613,
          "SER_COMP": "8000",
          "SSO_SER_COMP_NAME": "E00450(长鑫存储技术有限公司)",
          "EMP_PRI_PHONE": null,
          "KEY_POS_ID": null,
          "KEY_EMP_ID": null,
          "JOB_FUNC": "T",
          "SSO_DATA_FLAG": "1",
          "description": ""
        }
      },
      {
        "customizedInfo": {
          "CNAME": "王三石",
          "SHOW_NAME": "王三石(Lei Wang)",
          "BIRTHDAY": "1987-05-15",
          "description": "",
          "Surname": "Wang",
          "GivenName": "Lei",
          "SSOCNAME": "E-王三石",
          "SHOW_NAME_OTHER": "Lei Wang (王三石)",
          "REPORTTO": 2143,
          "REPORTTONAME": "赵肖刚(XiaoGang Zhao)",
          "DEPID": 713,
          "DEPCODE": "Sub Section",
          "DEPABBR": "Gas Chemical",
          "DEPFULLNAME": "OEC/Fac/HF FO/Gas Chemical",
          "DEPGRADE": 4,
          "COSTCENTER": "C003080200",
          "COSTTYPE": 1,
          "COSTLINE": 4,
          "JOINDATE": "2017-06-26",
          "LEAVEDATE": null,
          "EMPTYPE": 1,
          "EMPSTATUS": 1,
          "JOBLEVEL": 116,
          "EMPGRADE": 316,
          "JOBID": 27757,
          "JOBTITLE": "*****",
          "JOINTYPE": 1,
          "CONTRACT": 4,
          "CONTRACTNAME": "CXMT",
          "NCGTYPE": 1,
          "WORKCITY": 2,
          "WORKCITYNAME": "合肥",
          "JOBPROPERTY": 2,
          "ISANHUI": 1,
          "CHANGEDATE": null,
          "JOBCUSTOM2": 0,
          "AGE": null,
          "JOBSTATUS": 1,
          "ISDIR": 0,
          "HRBP": 8613,
          "SERVICECOMP": "8000",
          "SERVICECOMPNAME": "E00549(长鑫存储技术有限公司)",
          "PRIVATEMOBILE": null,
          "ZKEYPOSITION": null,
          "ZKEYTALENT": null,
          "JOBFUNCTION": "T"
        },
        "profile": {
          "externalId": 553,
          "username": "E00549",
          "name": "Lei Wang",
          "nickname": "E00549",
          "profile": "王三石(Lei Wang)",
          "gender": "M",
          "email": 'E00549@ad03.authing.cn',
          "phone": "16605657935",
          "country": 41,
          "mainDepartmentId": 875,
          "address": "王三石(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "Le"
        },
        "thirdDepartmentIds": [
          875
        ],
        "userIdInIdp": 553,
        "__raw": {
          "EMP_ID": 553,
          "CNAME": "王磊",
          "EMP_CODE": "E00549",
          "ENAME": "Lei Wang",
          "ENAME_SURNA": "Wang",
          "ENAME_GIVEN": "Lei",
          "SSO_CNAME": "E-王磊",
          "SHOW_NAME": "王磊(Lei Wang)",
          "SHOW_NAME_OTHER": "Lei Wang (王磊)",
          "GENDER_ID": 1,
          "BIRT_DATE": "1987-05-15",
          "EMAIL": null,
          "OFFICE_MOBILE": "16605657935",
          "REPORT_ID": 2143,
          "REPORT_NAME": "赵肖刚(XiaoGang Zhao)",
          "DEPT_ID": 713,
          "DEPT_CODE": "Sub Section",
          "DEPT_NAME": "Gas Chemical",
          "DEPT_PATH": "OEC/Fac/HF FO/Gas Chemical",
          "DEPT_GRADE": 4,
          "COST_CODE": "C003080200",
          "COST_TYPE_ID": 1,
          "COST_LINE_ID": 4,
          "JOIN_DATE": "2017-06-26",
          "LEAVE_DATE": null,
          "EMP_TYPE_ID": 1,
          "EMP_STATU_ID": 1,
          "JOB_LEVEL_ID": 116,
          "EMP_GRADE_ID": 316,
          "JOB_ID": 27757,
          "JOB_CNAME": "*****",
          "JOIN_TYPE_ID": 1,
          "CONT_ID": 4,
          "CONT_CNAME": "CXMT",
          "COUNT_ID": 41,
          "NCG_TYPE_ID": 1,
          "WORK_CITY_ID": 2,
          "WORK_CITY_NAME": "合肥",
          "OFFICE": "王磊(合肥)",
          "JOB_PROP_ID": 2,
          "IS_ANHUI_ID": 1,
          "CHANGE_DATE": null,
          "JOB_ATTR_ID": 0,
          "AGE": null,
          "JOB_STATU_ID": 1,
          "IS_DIR_ID": 0,
          "BP_ID": 8613,
          "SER_COMP": "8000",
          "SSO_SER_COMP_NAME": "E00549(长鑫存储技术有限公司)",
          "EMP_PRI_PHONE": null,
          "KEY_POS_ID": null,
          "KEY_EMP_ID": null,
          "JOB_FUNC": "T",
          "SSO_DATA_FLAG": "1",
          "description": ""
        }
      },
      {
        "customizedInfo": {
          "CNAME": "王三石",
          "SHOW_NAME": "王三石(Lei Wang)",
          "BIRTHDAY": "1987-05-15",
          "description": "",
          "Surname": "Wang",
          "GivenName": "Lei",
          "SSOCNAME": "E-王三石",
          "SHOW_NAME_OTHER": "Lei Wang (王三石)",
          "REPORTTO": 2143,
          "REPORTTONAME": "赵肖刚(XiaoGang Zhao)",
          "DEPID": 874,
          "DEPCODE": "Sub Section",
          "DEPABBR": "Gas Chemical",
          "DEPFULLNAME": "OEC/Fac/HF FO/Gas Chemical",
          "DEPGRADE": 4,
          "COSTCENTER": "C003080200",
          "COSTTYPE": 1,
          "COSTLINE": 4,
          "JOINDATE": "2017-06-26",
          "LEAVEDATE": null,
          "EMPTYPE": 1,
          "EMPSTATUS": 1,
          "JOBLEVEL": 116,
          "EMPGRADE": 316,
          "JOBID": 27757,
          "JOBTITLE": "*****",
          "JOINTYPE": 1,
          "CONTRACT": 4,
          "CONTRACTNAME": "CXMT",
          "NCGTYPE": 1,
          "WORKCITY": 2,
          "WORKCITYNAME": "合肥",
          "JOBPROPERTY": 2,
          "ISANHUI": 1,
          "CHANGEDATE": null,
          "JOBCUSTOM2": 0,
          "AGE": null,
          "JOBSTATUS": 1,
          "ISDIR": 0,
          "HRBP": 874,
          "SERVICECOMP": "8000",
          "SERVICECOMPNAME": "E00559(长鑫存储技术有限公司)",
          "PRIVATEMOBILE": null,
          "ZKEYPOSITION": null,
          "ZKEYTALENT": null,
          "JOBFUNCTION": "T"
        },
        "profile": {
          "externalId": 559,
          "username": "E00559",
          "name": "Lei E00559",
          "nickname": "E00549",
          "profile": "E00559(Lei Wang)",
          "gender": "M",
          "email": 'E00559@ad03.authing.cn',
          "phone": "16605657939",
          "country": 41,
          "mainDepartmentId": 874,
          "address": "E00559(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "E00559"
        },
        "thirdDepartmentIds": [
          874
        ],
        "userIdInIdp": 559
      },
      // {
      //   "customizedInfo": {
      //     "CNAME": "王康",
      //     "SHOW_NAME": "王康(Kangyin Wang)",
      //     "BIRTHDAY": "1996-12-19",
      //     "NAME_TWO": "ssss",
      //     "description": "",
      //     "Surname": "Wang",
      //     "GivenName": "Kangyin",
      //     "SSOCNAME": "E-王康",
      //     "SHOW_NAME_OTHER": "Kangyin Wang (王康)",
      //     "REPORTTO": 299,
      //     "REPORTTONAME": "陈志兴(Jason Chen)",
      //     "DEPID": 716,
      //     "DEPCODE": "Sub Section",
      //     "DEPABBR": "Water Treatment",
      //     "DEPFULLNAME": "OEC/Fac/HF FO/Water Treatment",
      //     "DEPGRADE": 4,
      //     "COSTCENTER": "C003080300",
      //     "COSTTYPE": 1,
      //     "COSTLINE": 4,
      //     "JOINDATE": "2021-07-26",
      //     "LEAVEDATE": null,
      //     "EMPTYPE": 1,
      //     "EMPSTATUS": 1,
      //     "JOBLEVEL": 117,
      //     "EMPGRADE": 317,
      //     "JOBID": 29407,
      //     "JOBTITLE": "*****",
      //     "JOINTYPE": 2,
      //     "CONTRACT": 4,
      //     "CONTRACTNAME": "CXMT",
      //     "NCGTYPE": 1,
      //     "WORKCITY": 10,
      //     "WORKCITYNAME": "合肥",
      //     "JOBPROPERTY": 2,
      //     "ISANHUI": 1,
      //     "CHANGEDATE": null,
      //     "JOBCUSTOM2": 0,
      //     "AGE": null,
      //     "JOBSTATUS": 1,
      //     "ISDIR": 0,
      //     "HRBP": 8613,
      //     "SERVICECOMP": "8000",
      //     "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
      //     "PRIVATEMOBILE": null,
      //     "ZKEYPOSITION": null,
      //     "ZKEYTALENT": null,
      //     "JOBFUNCTION": "T"
      //   },
      //   "profile": {
      //     "externalId": 546,
      //     "username": "E00461",
      //     "name": "Kang Wang",
      //     "nickname": "E00461",
      //     "profile": "王康4(Kangyin Wang3)",
      //     "gender": "M",
      //     "email": 'E00461@ad03.authing.cn',
      //     "phone": "16655100817",
      //     "country": 41,
      //     "mainDepartmentId": 785,
      //     "address": "王康(合肥)",
      //     "phoneVerified": true,
      //     "emailVerified": false,
      //     "familyName": "Wang",
      //     "givenName": "Kangyi"
      //   },
      //   "thirdDepartmentIds": [
      //     785
      //   ],
      //   "userIdInIdp": 546,
      //   "__raw": {
      //     "EMP_ID": 546,
      //     "CNAME": "王康",
      //     "EMP_CODE": "E00450",
      //     "ENAME": "Kangyin Wang",
      //     "ENAME_SURNA": "Wang",
      //     "ENAME_GIVEN": "Kangyin",
      //     "SSO_CNAME": "E-王康",
      //     "SHOW_NAME": "王康(Kangyin Wang)",
      //     "SHOW_NAME_OTHER": "Kangyin Wang (王康)",
      //     "GENDER_ID": 1,
      //     "BIRT_DATE": "1986-12-18",
      //     "EMAIL": 'E00450@ad03.authing.cn',
      //     "OFFICE_MOBILE": "16655100838",
      //     "REPORT_ID": 299,
      //     "REPORT_NAME": "陈志兴(Jason Chen)",
      //     "DEPT_ID": 716,
      //     "DEPT_CODE": "Sub Section",
      //     "DEPT_NAME": "Water Treatment",
      //     "DEPT_PATH": "OEC/Fac/HF FO/Water Treatment",
      //     "DEPT_GRADE": 4,
      //     "COST_CODE": "C003080300",
      //     "COST_TYPE_ID": 1,
      //     "COST_LINE_ID": 4,
      //     "JOIN_DATE": "2021-07-26",
      //     "LEAVE_DATE": null,
      //     "EMP_TYPE_ID": 1,
      //     "EMP_STATU_ID": 1,
      //     "JOB_LEVEL_ID": 117,
      //     "EMP_GRADE_ID": 317,
      //     "JOB_ID": 29407,
      //     "JOB_CNAME": "*****",
      //     "JOIN_TYPE_ID": 2,
      //     "CONT_ID": 4,
      //     "CONT_CNAME": "CXMT",
      //     "COUNT_ID": 41,
      //     "NCG_TYPE_ID": 1,
      //     "WORK_CITY_ID": 2,
      //     "WORK_CITY_NAME": "合肥",
      //     "OFFICE": "王康(合肥)",
      //     "JOB_PROP_ID": 2,
      //     "IS_ANHUI_ID": 1,
      //     "CHANGE_DATE": null,
      //     "JOB_ATTR_ID": 0,
      //     "AGE": null,
      //     "JOB_STATU_ID": 1,
      //     "IS_DIR_ID": 0,
      //     "BP_ID": 8613,
      //     "SER_COMP": "8000",
      //     "SSO_SER_COMP_NAME": "E00450(长鑫存储技术有限公司)",
      //     "EMP_PRI_PHONE": null,
      //     "KEY_POS_ID": null,
      //     "KEY_EMP_ID": null,
      //     "JOB_FUNC": "T",
      //     "SSO_DATA_FLAG": "1",
      //     "description": ""
      //   }
      // },
      // testLi,
      // ...userList
    ]
  }
})

router.post('/departments', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": [...deps ]
  }
})

router.post('/upload/cxmt', async (ctx) => {
  ctx.body = {
    data: 'ok'
  }
})

router.post('/departments-noorg', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": [
      {
        "id": 2,
        "openDepartmentId": 2,
        "code": "NoORG",
        "name": "NoORG",
        "description": 2,
        "isRoot": true,
        "customizedInfo": {},
        "leaderUserIdsInIdp": [],
        "leaderUserId": ""
      },
      {
        "id": 370,
        "openDepartmentId": 370,
        "code": "Account",
        "name": "Account",
        "description": 370,
        "parentId": 2,
        "isRoot": false,
        "customizedInfo": {},
        "leaderUserIdsInIdp": [],
        "leaderUserId": ""
      },
      {
        "id": 380,
        "openDepartmentId": 380,
        "code": "Svc",
        "name": "Svc",
        "description": 380,
        "parentId": 370,
        "isRoot": false,
        "customizedInfo": {},
        "leaderUserIdsInIdp": [],
        "leaderUserId": ""
      },
    ]
  }
})

router.post('/users-noorg', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": [
      {
        "customizedInfo": {},
        "profile": {
          "username": "svc.100001",
          "name": "svc.000001-name",
          "nickname": "svc.000001-nickname",
          "email": 'svc.000001@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100001,
      },
      {
        "customizedInfo": {},
        "profile": {
          "username": "svc.100002",
          "name": "svc.000002-name",
          "nickname": "svc.000002-nickname",
          "email": 'svc.000002@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100002,
      },
      {
        "customizedInfo": {},
        "profile": {
          "username": "svc.100003",
          "name": "svc.000003-name",
          "nickname": "svc.000003-nickname",
          "email": 'svc.000003@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100003,
      },
      {
        "customizedInfo": {},
        "profile": {
          "username": "svc.100004",
          "name": "svc.000004-name",
          "nickname": "svc.000004-nickname",
          "email": 'svc.000004@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100004,
      },
      {
        "customizedInfo": {},
        "profile": {
          "username": "svc.100005",
          "name": "svc.000005-name",
          "nickname": "svc.000005-nickname",
          "email": 'svc.000005@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100005,
      },
      {
        "customizedInfo": {
          "SHOW_NAME_OTHER": "svc.100006-display",
        },
        "profile": {
          "username": "svc.100006",
          "name": "svc.000006-name",
          "nickname": "svc.000006-nickname",
          "email": 'svc.000006@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100006,
      },
      {
        "customizedInfo": {
          "SHOW_NAME_OTHER": "svc.100007-display",
        },
        "profile": {
          "username": "svc.100007",
          "name": "svc.000007-name",
          "nickname": "svc.000007-nickname",
          "email": 'svc.000007@ad01.authing.cn',
          "mainDepartmentId": 380,
          "emailVerified": false,
        },
        "thirdDepartmentIds": [
          380
        ],
        "userIdInIdp": 100007,
      }
    ]
  }
})

module.exports = router
