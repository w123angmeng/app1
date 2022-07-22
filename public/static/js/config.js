//globalUrl全局url配置对象
window.globalUrl = {
    //系统登录名字
    systemTitle:"博仁医院管理系统",
    emrsystemTitle:"上海阿特蒙医院电子病历系统", // 独立打开emr 浏览器显示title
    staticUrL:'http://192.168.110.73/tool/',//第三方静态资源
    // staticUrL:'http://10.102.11.57/tool/',//第三方静态资源

    // 请求服务器地址
    // baseURL: 'http://192.168.110.55:10060/',
    // baseURL: 'http://10.102.11.57:10060/',
    // baseURL: 'https://10.102.11.57:10061/',
    baseURL: 'http://192.168.110.73:10060/',

    // 护理文书权限路径
    baseURL11: 'http://10.95.102.221:16090/',//王张加本地
    baseURL13: 'http://10.95.103.216:16601/',//长剑本地
    baseURL14: 'http://10.95.103.24:16601/',//宏伟本地

    //埋点地址IP
    buryUrl: "http://192.168.110.106:9873/",
    // buryUrl: 'http://192.168.101.43:9873/',
    // buryUrl: 'http://192.168.110.106:9873',
    openBuryUrlIpStatus: false,   // 是否开启埋点， 默认不开启
    //后台操作日志和埋点日志IP
    operatLog: "http://192.168.110.106:9872/", //73环境需要改为xxx.73.9871/

    //人员管理上传图片地址
    personBaseURL: "http://192.168.110.55:10060/",
    //图片服务器地址(头像)
    imgURL: "http://192.168.110.55/",
    sysVersion: "V2.1.3_ATM_1",
    lodopPageDepts: ['022001', '022701'],  //lodop 分页打印配置科室 022001 六楼护理单元  022701 五楼护理单元
    lodopDrawDepts: ['021401'],  //lodop画模板分配科室 021401 三楼护理单元

    // 对接EMR诊断Url
    diagnosisWebUrl: "http://10.102.11.57:10060/",

    // 数据元/目录树前端服务
    // baseServiceWebUrl: 'http://192.168.110.62/BaseService_WEB/page/',
    // baseServiceWebUrl: 'http://192.168.110.37/BaseService_WEB/page/',
    baseServiceWebUrl: "http://10.102.11.57/BaseService_WEB/page/",
    // baseServiceWebUrl: 'http://127.0.0.1:5500/page/',

    //电子病历后端服务
    // baseServiceParentUrl: 'http://192.168.110.62:9111/v1/api/',
    // baseServiceParentUrl: 'https://192.168.110.73/emrservice/v1/api/',
    baseServiceParentUrl: "http://10.102.11.57:9111/v1/api/",

    // 电子病历socket链接
    emrSocket: "ws://10.102.11.57:9111/emrwebsocket/",

    // 电子病历打印接口
    emrPrintUrl: "http://127.0.0.1:6603",

    //护理文书后端服务
    hlwsServiceUrl: "http://10.102.11.57:9211/v1/api/",
    // hlwsServiceUrl: 'http://192.168.110.62/hlwsservice/v1/api/',
    // hlwsServiceUrl: 'http://192.168.110.37:9111/v1/api/',

    // 数据元/目录树业务后端服务
    // publicServiceParentUrl: 'http://192.168.110.62:9001/v1/api/',
    // publicServiceParentUrl: 'http://192.168.110.62/baseservice/v1/api/',
    // publicServiceParentUrl: 'http://192.168.110.55:9001/v1/api/',
    // publicServiceParentUrl: 'http://192.168.110.83/v1/api/',
    publicServiceParentUrl: 'http://192.168.110.73:9001/v1/api/', //连接开发环境73--for:收费
    // publicServiceParentUrl: 'http://10.102.11.57:9001/v1/api/',

    //  publicServiceParentUrl: 'http://10.102.11.52/v1/api/',

    // 电子病历前端服务
    // emrEditorWebUrl: 'http://192.168.110.62/EMR_Editor_WEB/page/',
    // emrEditorWebUrl: 'https://10.102.11.57/EMR_Editor_WEB/page/',
    emrEditorWebUrl: "http://127.0.0.1:5500/page/",

    //药品说明书前缀
    drugsInstructions: "http://192.168.100.16:10000/",

    //CDR项目前缀 线上是31:3000  测试环境是46:3000
    CDRPageUrl: "http://192.168.101.31:3000/",
    cdrUserCode: "SANFANG", //cdr 登陆账号参数控制， 正式数据账号此字段为空

    //接诊webSocket长连接前缀
    webSocketVisitUrl: "ws://192.168.110.55:9876/",

    //C端聊天 接口地址
    chatHttptUrl: "http://192.168.110.84:20506",
    //C端聊天 长链接通信地址
    chatWsUrl: "ws://192.168.110.84:20506",
    //C端聊天图片内网地址
    chatImageUrl: "http://192.168.110.84:20506",
    // 视频录制请求地址
    recordUrl: "http://192.168.110.84:18000",
    // recordUrl:'https://192.168.110.73',//73部署专用
    // 事件任务消息
    etmUrl: "http://192.168.110.73:8189/",
    //打印端口
    printUrl: "http://127.0.0.1:13333",

    //导诊单地址
    // guidanceSheetUrl:'http://10.102.100.103:7001/',
    guidanceSheetUrl:
        "http://10.102.100.104:8080/webroot/decision/view/report?viewlet=%25E4%25BF%25A1%25E6%2581%25AF%25E9%2583%25A8%252F%25E5%25AF%25BC%25E8%25AF%258A%25E5%258D%2595%25E6%2589%2593%25E5%258D%25B0.cpt&cx=1&p1=",

    // 体温单
    tempUrl: "http://192.168.110.76:16430",
    // tempUrl: 'http://192.168.110.62/temperature',

    // 体征项目与护理文书元素绑定
    signItemForHlwsUrl: "http://192.168.110.62:16430/",
    // haiXinUrl:'https://borenhospital.haixin123.com:8090/h5/v1/history/patients/out/',//海心智能病史
    // haiXinUrl:'http://192.168.110.109:8088/h5/v1/history/patients/out/',//海心智能病史
    haiXinUrl: "https://192.168.110.73/h5/v1/history/patients/out/", //海心智能病史
    // signItemForHlwsUrl: 'http://192.168.110.62/temperature/',

    empiBarCodeUrl: "http://192.168.101.32:9100", //empi二维码患者信息

    etmDoctwsUrl: "https://10.102.11.57:8190", // 集成etm
    hosFeelSystemUrl: "http://10.102.11.34/", //集成杏林院感系统
    allowAddThirdResource: false, // 允许新增第三方资源
    historicalLimitTime: '2021-07-15 23:59:00', // 配置历史数据暂停停止、作废功能时间点
    copyHistoricalLimitTime: '2021-09-01 23:59:59', // 配置临时药品数据暂停复制功能时间点

    fineReportUrl: 'https://192.168.110.73/webroot/decision/view/report', //集成帆软报表--for--收费使用
    cardPcExeUrl: 'http://127.0.0.1:6601/', //读卡、写卡exe--for--收费使用
    invPcExeUrl: 'http://127.0.0.1:6602/', //税控exe--for--收费使用
    mgrPcExeUrl: 'http://127.0.0.1:6600/', //客户端管理器exe--for--收费使用
    printPcExeUrl: 'http://127.0.0.1:6603/', //打印exe--for--收费使用
    medicalInsLogin:'http://10.95.102.152:8088', // 医保登陆接口 -- 进入收费请求
    ybAccessUrl: 'http://192.168.110.92:90/#/', //医保平台

    cdcConfigureUrl: 'http://10.102.11.105:8083', // cdc禁忌药提示请求url
    medicalInSelect:'http://10.95.102.152:5000', //医保计划参保类型 -- 收费
}

