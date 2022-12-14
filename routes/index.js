const { AuthenticationClient } = require('authing-js-sdk')
const authenticationClient = new AuthenticationClient({
  appId: '6385e25fd9756da43c9e4681',
  secret: '5c806f94f037d0493ec961a9b1589845',
  appHost: 'http://app2.dev.lihuiwang.net:3000',
  protocol: 'oidc',
  redirectUri: 'http://localhost:6001/login'
});
 
const url = authenticationClient.buildAuthorizeUrl()

const router = require('koa-router')()

router.get('/', async (ctx,next) => {
  await ctx.render('index', {
    href: url
  })
  // ctx.body = url
})

router.get('/login', async (ctx,next)=>{
  const code = ctx.query.code
  const res = await authenticationClient.getAccessTokenByCode(code)
  ctx.body = {
    token: res
  }
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
          "description": "",
          "CNAME": "王康银",
          "Surname": "Wang",
          "GivenName": "Kangyin",
          "SSOCNAME": "E-王康银",
          "SHOW_NAME": "王康银(Kangyin Wang)",
          "SHOW_NAME_OTHER": "Kangyin Wang (王康银)",
          "BIRTHDAY": "1986-12-18",
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
          "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
          "PRIVATEMOBILE": null,
          "ZKEYPOSITION": null,
          "ZKEYTALENT": null,
          "JOBFUNCTION": "T"
        },
        "profile": {
          "externalId": 535,
          "username": "E00450",
          "name": "Kangyin Wang",
          "nickname": "E00450",
          "profile": "王康银(Kangyin Wang)",
          "gender": "M",
          "email": 'E00450@ad03.authing.cn',
          "phone": "16655100838",
          "country": 41,
          "mainDepartmentId": 716,
          "address": "王康银(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "Kangyi"
        },
        "thirdDepartmentIds": [
          874
        ],
        "userIdInIdp": 535,
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
          "description": "",
          "CNAME": "王磊",
          "Surname": "Wang",
          "GivenName": "Lei",
          "SSOCNAME": "E-王磊",
          "SHOW_NAME": "王磊(Lei Wang)",
          "SHOW_NAME_OTHER": "Lei Wang (王磊)",
          "BIRTHDAY": "1987-05-15",
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
          "profile": "王磊(Lei Wang)",
          "gender": "M",
          "email": 'E00549@ad03.authing.cn',
          "phone": "16605657935",
          "country": 41,
          "mainDepartmentId": 713,
          "address": "王磊(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "Le"
        },
        "thirdDepartmentIds": [
          874
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
          "description": "",
          "CNAME": "王康",
          "Surname": "Wang",
          "GivenName": "Kangyin",
          "SSOCNAME": "E-王康",
          "SHOW_NAME": "王康(Kangyin Wang)",
          "SHOW_NAME_OTHER": "Kangyin Wang (王康)",
          "BIRTHDAY": "1999-12-18",
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
          "SERVICECOMPNAME": "E00450(长鑫存储技术有限公司)",
          "PRIVATEMOBILE": null,
          "ZKEYPOSITION": null,
          "ZKEYTALENT": null,
          "JOBFUNCTION": "T"
        },
        "profile": {
          "externalId": 546,
          "username": "E00461",
          "name": "Kang Wang",
          "nickname": "E00461",
          "profile": "王康4(Kangyin Wang3)",
          "gender": "M",
          "email": 'E00461@ad03.authing.cn',
          "phone": "16655100837",
          "country": 41,
          "mainDepartmentId": 716,
          "address": "王康(合肥)",
          "phoneVerified": true,
          "emailVerified": false,
          "familyName": "Wang",
          "givenName": "Kangyi"
        },
        "thirdDepartmentIds": [
          874
        ],
        "userIdInIdp": 546,
        "__raw": {
          "EMP_ID": 546,
          "CNAME": "王康",
          "EMP_CODE": "E00450",
          "ENAME": "Kangyin Wang",
          "ENAME_SURNA": "Wang",
          "ENAME_GIVEN": "Kangyin",
          "SSO_CNAME": "E-王康",
          "SHOW_NAME": "王康(Kangyin Wang)",
          "SHOW_NAME_OTHER": "Kangyin Wang (王康)",
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
          "OFFICE": "王康(合肥)",
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
    ]
  }
})

router.post('/departments', async (ctx, next) => {
  ctx.body = {
    "code": 200,
    "message": "",
    "data": [
      {
        "id": 0,
        "openDepartmentId": 0,
        "code": "长鑫存储",
        "name": "长鑫存储",
        "description": 0,
        "__raw": {
          "DEPT_ID": 0,
          "DEPT_CODE": "长鑫存储",
          "DEPT_NAME": "长鑫存储"
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
        "parentId": 0,
        "__raw": {
          "DEPT_ID": 37,
          "DEPT_CODE": "00000037",
          "DEPT_NAME": "CXMT",
          "SUPER_DEPT_ID": 0
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
        "parentId": 0,
        "__raw": {
          "DEPT_ID": 38,
          "DEPT_CODE": "00000038",
          "DEPT_NAME": "CXMT(JX)",
          "SUPER_DEPT_ID": 0
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
        "parentId": 0,
        "__raw": {
          "DEPT_ID": 39,
          "DEPT_CODE": "00000039",
          "DEPT_NAME": "AMI",
          "SUPER_DEPT_ID": 0
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
        "parentId": 39,
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
        "parentId": 39,
        "__raw": {
          "DEPT_ID": 875,
          "DEPT_CODE": "00000875",
          "DEPT_NAME": "REL",
          "DEPT_TYPE_ID": 4,
          "DEPT_GRADE": 4,
          "COMP_ID": 37,
          "SUPER_DEPT_ID": 785,
          "LEAD_EMP_ID": 9563,
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
          "DEPOWNER": 9563,
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
          "9563"
        ],
        "leaderUserId": ""
      }
    ]
  }
})

module.exports = router
