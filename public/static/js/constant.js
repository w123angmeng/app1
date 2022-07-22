//常量文件配置区
let data = {
    IS_OTHER_SYSTEM_SIGN: 1,        //是第三方系统
    OTHER_SYSTEM_ROUTE_PATH: 'otherSystem', //第三方嵌入资源的路由路径
    DEFAULT_PASSWORD: '123456',   //系统默认密码
    START_ENABLED: 1,     //启用
    FORBIDDEN_ENABLED: 0, //禁用
    DELETE_ENABLED: 3,    //删除
    SDEMP_STATUS: 1,      //人员禁用状态
    MSG_STATE_0:'启用',
    MSG_STATE_1:'禁用',
    MSG_STATE_3:'删除',

    PAGE_SIZES: [10, 20, 30, 40, 50], // 默认的分页间隔,收费域使用
    PAGE_SIZE_LAZY: 30, //懒加载表格，每页加载数据行数 -- for:收费
    MAXLENGTH_NAME: 20,     //字符长度
    MAXLENGTH_CODE: 20,     //字符长度
    MAXLENGTH_REMARK: 80,   //字符长度
    ROW_GUTTER: 40,  //el-row的gutter--大号间距--for:收费样式
    ROW_GUTTER_M: 20,  //el-row的gutter--中号间距--for:收费样式
    ROW_GUTTER_S: 12,  //el-row的gutter--for:收费样式
    // n*14 + 8             //n个文字的label宽度----for:收费样式
    TEXT_WIDTH_2: '36px',   //2个文字的label宽度----for:收费样式
    TEXT_WIDTH_3: '50px',   //3个文字的label宽度----for:收费样式
    TEXT_WIDTH_4: '64px',   //4个文字的label宽度----for:收费样式
    TEXT_WIDTH_5: '78px',   //5个文字的label宽度----for:收费样式
    TEXT_WIDTH_6: '92px',   //6个文字的label宽度----for:收费样式
    TEXT_WIDTH_7: '106px',   //7个文字的label宽度----for:收费样式
    TEXT_WIDTH_8: '120px',   //8个文字的label宽度----for:收费样式
    TEXT_WIDTH_9: '134px',   //9个文字的label宽度----for:收费样式
    TEXT_WIDTH_10: '148px',   //10个文字的label宽度----for:收费样式

    PAGE_USE_SEE: 'see', //查看页
    PAGE_USE_COPY: 'copy', //复制页
    PAGE_USE_ADD: 'add', //新增页
    PAGE_USE_EDIT: 'edit', //修改页
    NUM_YES: 1, //是
    NUM_NO: 0, //否
    STR_YES: '1', //是
    STR_NO: '0', //否

    //系统标识
    OUTP_SYSTEM_FLAG: '1',   //门诊
    INP_SYSTEM_FLAG: '2',    //住院
    INP_NURSE_SYSTEM_FLAG: '4',    //住院护士
    MEDROOM_SYSTEM_FLAG: '10',  //病案室
    CHGS_SYSTEM_FLAG: '12',  //收费

    DRUG_STORAGE_TYPE: '04',  //成药库房类型
    HERBAL_STORAGE_TYPE: '03',  //草药库房类型

    // BURY_URL_IPS: ['192.168.100.74', '10.102.11.31', '192.168.110.77'],
    SUPER_INSTRUCTION_DRUG: ['特瑞普利单抗'],

    //门诊超量--共享医嘱
    OUTPEXCESS_AREACODE: '110000', //机构所在城市编码
    OUTPEXCESS_CHARGETYPECODE: '02', //患者类型（02医保，01自费....）
    OUTPEXCESS_RMED_CHARGETYPECODE: '6', //博仁异地医保编码
    OUTPEXCESS_RMED_CHARGETYPECODE_ATM: '2', //阿特蒙异地医保编码
    OUTPEXCESS_NOPASSTYPELIST_SELF: '1', //自费
    OUTPEXCESS_NOPASSTYPELIST_REC_REPEAT: '10', //校验未通过类型--10可提交重复
    OUTPEXCESS_NOPASSTYPELIST_NO_REPEAT: '11', //校验未通过类型--11不可提交重复
    OUTPEXCESS_OPENDAYS: '12', //开立天数
    OUTPEXCESS_MEDICALDAYS: '50', //医保天数
    OUTPEXCESS_SHARE_EXCESS: '60', //共享医嘱超量
    SDCONSTRAINT_LEVEL: '1', //医保规则约束等级，1代表只是提示，可以提交处方
    //服务类型  医嘱类型常量
    DRUG_TYPE: '1', //药品
    DRUG_SUB_TYPE: '2', //药品子类 -- 中药 
    INSPECT_TYPE: '2', //检查
    TEST_TYPE: '3', //检验
    TREATMENT_TYPE: '4', //治疗
    OPERATION_TYPE: '5', //手术
    NURSING_TYPE: '6', //护理
    DIET_TYPE: '7',     //膳食
    MATERIAL_TYPE: '8',     //材料
    CONSULTATION_TYPE: '9', //会诊
    SPECIAL_INSPECT_TYPE: '10', //特检
    PATHOL0GY_TYPE: '11', //病理
    ENTRUST_TYPE: '12', //其他
    BOLOOD_TYPE: '13', //用血
    ANAESTHESIA_TYPE: '14', //麻醉
    NARCOSIS_TYPE: '14', //麻醉
    INDAGA_TYPE: '15', //诊查
    HERBAL_DRUG_TYPE: '1-2', //中药 --自定义医嘱类型
    INSPECT_PATHOL0GY_TYPE: '病理',  //检查病理分类

    //收费项目类型
    MATERICAL_CHARGE: 'I', //材料
    BED_CHARGE: 'N', //床位
    Drug_CHARGE: 'A', //西药
    HERBAL_DRUG_CHARGE: 'B', // 中药
    OTHER_CHARGE: 'Z', //其他
    // 外配是否开启
    EXTERNALSTATUS:false,

    //黑名单状态
    BLACK_EFFICIENT: '1', //生效
    BLACK_DISABLED: '3', //失效

    // gcp标识状态
    GCP_FLAG_ATM: '1',      //有 gcp标识
    UN_GCP_FLAG_ATM: '0',  //无 gcp标识

    //就诊类型
    OUTP_VISIT_TYPE: '01', //门诊
    EMER_VISIT_TYPE: '02', //急诊
    INPA_VISIT_TYPE: '03', //住院
    PHYS_VISIT_TYPE: '04', //体检

    //就诊状态
    NOT_CLOSE_VISIT_STATUS: '0', //未诊
    VISITING_STATUS: '1',        //诊中
    VISITED_STATUS: '2',         //已诊
    CLOSE_VISIT_STATUS: '3',     //诊毕

    //互联网
    TICKET_SOURCE:  '1',    //互联网患者标识

    //卡类型
    PAT_VISIT_CARDTYPE: '10',   //就诊卡

    //预约
    WINDOW_AP_CHANNEL: '01',   //窗口号

    //自定义表单类型

    INPUT_ELE: 'input',           //输入框
    TEXT_ELE: 'text',             //文本域输入框
    SELECT_ELE: 'select',         //下拉框
    RADIO_ELE: 'radio',           //单选框
    CHECKBOX_ELE: 'checkbox',     //复选框
    DATEPICKER_ELE: 'datepicker', //日期框


    //打印配置类型
    MEDICAL_PRINT_CLASS: '病历',//'1',  //病历打印配置
    PHYSICIAN_PRINT_CLASS: '医嘱单',//'7',  //医嘱单打印配置
    PRESC_PRINT_CLASS:'处方' ,//'2',  //处方打印配置
    APPLY_PRINT_CLASS: '申请单' ,//'3',  //申请单打印配置
    DISPOSAL_PRINT_CLASS: '处置单' ,//'4',  //处置单打印配置
    OTHERS_PRINT_CLASS: '其他' ,//'5',  //其他打印配置
    MEDICINE_PRINT_CLASS: '领药单' ,//'8',  //领药单配置
    AGREE_PRINT_CLASS: '同意书' ,//'6',  //同意书配置
    CASEINDEX_PRINT_CLASS: '病案首页' ,//'9',  //病案首页配置
    //诊断相关
    OUTP_DIAGNOSIS_FLAG: '1',       //门诊诊断标识
    INP_DIAGNOSIS_FLAG: '2',        //住院诊断标识
    LEAVE_DIAGNOSIS_FLAG: '3',      //出院诊断标识
    OUTP_SPECIAL_TYPE: '3',         //门诊特病病种类型
    EMERGENCY_DIAGNOSIS_SCENE: '1', //急诊诊断场景
    CHRONIC_DIAGNOSIS_SCENE: '2',   //慢病诊断场景
    DIFFMOVE_DIAGNOSIS_SCENE: '3',  //行动不便诊断场景
    ILLNESS_DIAGNOSIS_SCENE: '4',   //大病诊断场景
    SPECIAL_DIAGNOSIS_SCENE: '5',   //特病诊断场景
    //过敏史相关
    MILD_ALLERGY: '1',      //轻度过敏
    DENY_ALLERGY_TYPE: '4', //否认过敏类型
    DENY_ALLERGY_DESC: '否认食物、药物过敏史', //否认过敏文案提示
    DRUG_ALLERGY_TYPE: '1', //药物过敏类型
    // 血常规
    WBC_CODE: '0101001',    //白细胞计数
    CLASSM_CODE: '0101008', //单核细胞计数
    CLASSN_CODE: '0101002', //中性粒细胞计数
    CLASSL_CODE: '0101004', //淋巴细胞计数
    CLASSB_CODE: '0101012', //嗜碱性粒细胞计数
    CLASSE_CODE: '0101010', //嗜酸性粒细胞计数
    RBC_CODE: '0101016',    //红细胞计数
    HGB_CODE: '0101017',    //血红蛋白
    MCV_CODE: '0101019',    //平均红细胞体积
    RTC_CODE: '0101401',    //网织红细胞
    PLT_CODE: '0101028',    //血小板计数
  
    //系统定义数据元
    CHIEF_HIS: '0001', //主诉
    HPL_HIS: '0002', //现病史
    PL_HIS: '0003', //既往史
    FAMILY_SHI_HIS: '0004', //家族史
    NEW_TOUCH_LABAL: '新冠接触史',  //新冠接触史 -- 自定义名字（目前是阿特蒙）
    DISEASE_TIME_HIS: '0009', //发病时间
    AUX_EXAM_HIS: '0005',   //辅助检查
    PHYSICAL_EXAM_HIS: '0006', //体格检查--查体
    TREAT_VIEW_EYUAN: 'TREAT_VIEW', //二院诊疗意见
    ANAL_TMP: 'ANAL_TMP', //肛温
    MOUTH_TMP: 'MOUTH_TMP', //口温
    PULSE_TMP: 'PULSE_TMP', //脉搏 
    NORISE_TMP: 'NORISE_TMP', //体温不升
    ALLERGY_HIS: '0013', //过敏史
    AXILLARY_TMP: 'AXILLARY_TMP', //腋温 
    BREATHING_TMP: 'BREATHING_TMP', //呼吸
    HEARTRATE_TMP: 'HEARTRATE_TMP', //心率
    IMMEDIATE_TMP: 'IMMEDIATE_TMP', //随机血糖
    PAIN_SCORE_TMP: 'PAIN_SCORE_TMP', //疼痛评分
    VOMIT_FLOW_TMP: 'VOMIT_FLOW_TMP', //呕吐量
    STOOLVOLUME_TMP: 'STOOLVOLUME_TMP', //大便量
    COUNTS_SHIT_TMP: 'COUNTS_SHIT_TMP', //大便次数
    BODY_WEIGHT_TMP: 'BODY_WEIGHT_TMP', //体重
    BODY_HEIGHT_TMP: 'BODY_HEIGHT_TMP', //身高
    HYPOTENSION_TMP: 'HYPOTENSION_TMP', //舒张压
    HYPERTENSION_TMP: 'HYPERTENSION_TMP', //收缩压
    URINE_VOLUME_TMP: 'URINE_VOLUME_TMP', //尿量
    BLOOD_OXYGEN_TMP: 'BLOOD_OXYGEN_TMP', //血氧饱和度
    DRAINAGE_FLOW_TMP: 'DRAINAGE_FLOW_TMP', //引流量
    ABDOMINAL_GIRTH_TMP: 'ABDOMINAL_GIRTH_TMP', //腹围
    INCOMING_VOLUME_TMP: 'INCOMING_VOLUME_TMP', //入量
    OUTCOMING_VOLUME_TMP: 'OUTCOMING_VOLUME_TMP', //出量
    PHYSICAL_COOLING_TMP: 'PHYSICAL_COOLING_TMP', //物理降温后    //门诊---药品医嘱
    CONSTRainedLEVEL_3 : '3',
    CONSTRainedLEVEL_4 : '4',
    CONSTRainedLEVEL_5 : '5',

    // 二院默认带出数据元值
    DEFAULT_VALUES_EYUAN: ['0003', 'TREAT_VIEW'],


 // 频次相关 frequencyMap
    FREQUENCY_NOW:'now',//即刻
    FREQUENCY_SOS:'sos',
    FREQUENCY_ONCE:'once',
    FREQUENCY_PRN:'PRN',
// patientTree打开折叠计算基数
    TREEFOLD_WIDTH: 39,  //patientTree折叠时内容模块的left距离
    TREENOFOLD_WIDTH: 268,  //patientTree打开时内容模块的left距离
    IMGMENUWIDTH: 49,  //图标导航的宽度
    PATIENTINFO_HEIGHT: 69,  //住院医护患者高度
    BIG_PAT_BANNER: 1, //大 patientInfo banner
    SMALL_PAT_BANNER: 2, // 小 patientInfo banner

    ENABLED_LIST: [ // 状态
        {
            label: "启用",
            value: 1
        },
        {
            label: "禁用",
            value: 0
        }
    ],
    TASKMSGSUBITEM: [
        { label: "事件触发的所有任务", index: "0" },
        { label: "我所在科室的任务", index: "1" },
        { label: "我所属角色的任务", index: "2" },
        { label: "其它责任人任务", index: "3" },
        { label: "我的订阅", index: "4" }
    ],
    LEVEL_LIST: [
        {name: "高",value: "H"},
        {name: "中",value: "M"},
        { name: "低",value: "L"}
    ],
    STATUS_LIST: [
        {name: "全部",value: ''},
        {name: "启用", value: 1 },
        {name: "禁用", value: 0}
    ],
    SYSTEMCODE_LIST:[
        {value: 'EMR', lable: 'EMR' },
        {value: 'HIS', lable: 'HIS'}
    ],
    PERMANENT_ADDRESS: '1', // 户籍地址
    BIRTH_PLACE: "6", //出生地
    CURRENT_ADDRESS: "9",  //现住址
    NATIVE_PLACE: "11", //籍贯
    TOWN_SHIP: "12", //乡镇街道
    // 1. 甲乙丙肝、hiv、rpr :0-阴性；1-阳性；2-急诊；
    // HAV -甲肝 HBSAG - 乙肝 HCV -丙肝 HIV -艾滋 RPR - 梅毒
    NEGATIVE_POS_EMERGENCY: [
        {dataCode : 0, dataName: '阴性'},
        {dataCode : 1, dataName: '阳性'},
        {dataCode : 2, dataName: '急诊'},
    ],
    // 2. 手术有无菌 GERMFREE_OR_NOT
    GERMFREE_OR_NOT: [
        {dataCode : 0, dataName: '无菌'},
        {dataCode : 1, dataName: '半无菌'},
        {dataCode : 2, dataName: '有菌'},
    ],
    // 3. 手术满意度 SATISFACTION_DEGREE
    SATISFACTION_DEGREE: [
        {dataCode : 0, dataName: '满意'},
        {dataCode : 1, dataName: '基本满意'},
        {dataCode : 2, dataName: '不满意'},
    ],
    // 4. 换班 CHARGE_TRANSFER
    CHARGE_TRANSFER: [
        {dataCode : 0, dataName: '无'},
        {dataCode : 1, dataName: '有'},
    ],
    // 5. 顺利 SMOOTH_INDICATOR
    SMOOTH_INDICATOR:[
        {dataCode : 0, dataName: '不顺利'},
        {dataCode : 1, dataName: '顺利'},
    ]
}

// 收费域常量
let chgsConstant = {
    //定价策略-内置编码
    PRI_CPT_TYPE_CODE_NORMAL: '05', //正常收费
    PRI_CPT_TYPE_CODE_FREE: '98', //不收费
    PRI_CPT_TYPE_CODE_ONCE: '97', //只收一次
    PRI_CPT_TYPE_CODE_SERVICE: '00', //本服务定价
    PRI_CPT_TYPE_CODE_BAG_PART_NUM: '02', //打包成员项目部位个数加收
    PRI_CPT_TYPE_CODE_MEMBER_NUM: '03', //成员项目个数定价
    PRI_CPT_TYPE_CODE_EXTERNAL_PLUGIN: '99', //外挂价格定价插件

    //定价策略-适用范围
    PRI_CPT_TYPE_SENCE_PRICE: '1', //价表项目
    PRI_CPT_TYPE_SENCE_MEDICAL: '2', //医疗服务
    PRI_CPT_TYPE_SENCE_MEDICAL_PKG: '3', //医疗服务打包

    // 价表状态
    PRICE_STATUS_NOW: '1', //当前
    PRICE_STATUS_STOP: '0', //停价

    COMPARE_TIME_EFFECT_STATUS_EXPIRE: '1', //已失效
    COMPARE_TIME_EFFECT_STATUS_EXECUTE: '2', //已生效
    COMPARE_TIME_EFFECT_STATUS_FUTURE: '3', //未生效

    // 医疗服务定价策略模式
    // 非打包、不收费
    NOPKG_FREE: 'NOPKG_FREE',
    // 非打包、正常收费
    NOPKG_NORMAL: 'NOPKG_NORMAL',
    // 非打包、本服务定价
    NOPKG_SERVICE: 'NOPKG_SERVICE',
    // 非打包、不收费
    PKG_FREE: 'PKG_FREE',
    // 非打包、正常收费
    PKG_NORMAL: 'PKG_NORMAL',
    // 非打包、本服务定价
    PKG_SERVICE: 'PKG_SERVICE',

    // 数量最大为9999
    AMOUNT_MAX: 9999,
    // 数量最小为0
    AMOUNT_MIN: 0,
    // 数量精度为2
    AMOUNT_PRECISION: 2,
    // 金额最小为0
    CURRENCY_MIN: 0,
    // 金额最大为999999.99
    CURRENCY_MAX: 999999.99,
    // 金额精度为2
    CURRENCY_PRECISION: 2,
    // 比例最小为0
    RATIO_MIN: 0,
    // 比例最大为1
    RATIO_MAX: 1,
    // 比例精度为2
    RATIO_PRECISION: 2,

    // 患者卡配置
    // 卡性质
    SD_PAT_CARD_TYPE_ID: '01', //卡性质-身份证
    SD_PAT_CARD_TYPE_INSURANCE: '04', //卡性质-医保
    SD_PAT_CARD_TYPE_OUTP: '10', //卡性质-院内就诊卡
    SD_PAT_CARD_TYPE_EMPI: '40', //卡性质-EMPI二维码
    SD_PAT_CARD_TYPE_PAT_CODE: '90', //卡性质-患者编码
    SD_PAT_CARD_TYPE_OUTP_ID_NUM: '91', //卡性质-门诊病案号
    SD_PAT_CARD_TYPE_DOCTWS_ID_NUM: '92', //卡性质-住院病案号
    SD_PAT_CARD_TYPE_ELECTRONIC: '0401', //卡性质-医保电子凭证
    SD_PAT_CARD_TYPE_MAGNETIC_CARD: '0402', //卡性质-医保磁条卡
    // 读卡设备
    READ_CARD_DEVICE_YES: 2, //必须
    READ_CARD_DEVICE_NO: 0, //不需要
    READ_CARD_DEVICE_OPTIONAL: 1, //可选
    // 个人信息
    PERSONAL_INFORMATION_YES: 1, //是
    PERSONAL_INFORMATION_NO: 0, //否
    // 自动识别可用
    AUTOMATIC_IDENTIFICATION_YES: 1, //是
    AUTOMATIC_IDENTIFICATION_NO: 2, //否
    // 发卡模式
    ISSUING_PATTERN_BINDING: 0, //绑定卡片
    ISSUING_PATTERN_BLANK: 1, //写空白卡
    //卡号序列
    CARD_NUMBER_SEQUENCE_NOT: '0', //未配置
    CARD_NUMBER_SEQUENCE_IDPAT: '1', //患者ID号
    CARD_NUMBER_SEQUENCE_CARD: '2', //就诊卡号发生器
    // 自动发卡
    AUTOMATIC_HAIRPIN_YES: 1, //是
    AUTOMATIC_HAIRPIN_NO: 0, //否
    //写卡类型
    WRITE_CARD_CODE: 0, //驱动写卡
    WRITE_CARD_PRINT: 1, //打印标签
    //校验码
    CHECK_CODE_YES: 1, //使用
    CHECK_CODE_NO: 0, //不使用
    //账户资金
    ACCOUNT_FUNDS_YES: '1', //可支付
    ACCOUNT_FUNDS_NO: '0', //不可使用
    //支付时需要密码
    NEED_PASSWORD_YES: 1, //必须 
    NEED_PASSWORD_NO: 0, //不需要
    NEED_PASSWORD_OPTIONAL: 2, //可选


    PAT_IN_BLACKLIST: '1', // 患者在黑名单
    CARD_NORMAL: '1', // 卡正常
    CARD_LOSS: '2', // 卡挂失
    CARD_LOGOUT: '3', // 卡注销

    // 患者卡配置（公共组件-证件类型），适用场景
    PAT_CARD_CONFIG_SCENE_PAT_CREATE: '1', //患者建档
    PAT_CARD_CONFIG_SCENE_PAT_REG: '2', //患者挂号
    PAT_CARD_CONFIG_SCENE_PAT_VISIT: '3', //患者就诊
    PAT_CARD_CONFIG_SCENE_PAT_ACCOUNT_PAY: '4', //患者账户充值
    PAT_CARD_CONFIG_SCENE_PAT_FEE_OUTP: '5', //患者门诊收/退费
    PAT_CARD_CONFIG_SCENE_MEDICAL_WINDOW: '6', //医技窗口
    PAT_CARD_CONFIG_SCENE_PAT_DOCTWS_REG: '7', //患者住院登记
    PAT_CARD_CONFIG_SCENE_PAT_FEE_DOCTWS: '8', //患者住院收/退费

    // 数据来源
    DATA_SOURCES_SELF: '1', //本院
    DATA_SOURCES_EMPI: '2', //EMPI

    // 证件类型
    SD_ID_TYPE_ID: '01', //身份证

    SD_COUNTY_CHINA: 'CN', //中国
    SD_NATION_HAN: '01', //汉族

    SD_ADDRESS_TYPE_HUJI: '1', //地址类型：户籍地址
    SD_ADDRESS_TYPE_NOW: '9', //地址类型：现住址

    // 公共组件
    // 读卡按钮模式
    SHOW_READCARD_MODE_NO: 'no', // 总是显示
    SHOW_READCARD_MODE_YES: 'yes', // 总是显示
    SHOW_READCARD_MODE_NEEDHARDWARE: 'needHardware', // 按读卡设置配置
    SHOW_READCARD_MODE_RELATIONTYPE: 'relationType', // 按发卡模式配置    

    PI_CHARGE_TYPE_CODE_SELF: '01', //费别-自费
    PI_PAT_CLASS_CODE_COMMON: '0', //患者身份-普通
    PR_PRICE_CLASS_SCH_CODE_COMMON: '0000', //价格分类-普通

    // 机构线
    SD_ORG_LINE_ROLE_PAT: '0000', //患者
    SD_ORG_LINE_ROLE_PAYMENT: '0001', //付款机构
    SD_ORG_LINE_ROLE_PUBLIC_FEE: '0002', //公费机构
    SD_ORG_LINE_ROLE_CONTRACT: '0003', //合同机构
    SD_ORG_LINE_ROLE_SERVICE: '0004', //服务签约机构

    // 付款单位-医院
    PAYMENT_UNIT_CODE_HOSP: '0001', //付款单位-医院
    PAYMENT_UNIT_CODE_PAT: '0000', //付款单位-患者


    // 付款方式-计算方式
    SD_PAY_CHANEL_CPT_TYPE_DISC_SCH: '2', //价格分类
    SD_PAY_CHANEL_CPT_TYPE_PR_MIP: '3', //医保计划
    SD_PAY_CHANEL_CPT_TYPE_OFFLINE_PAY: '9', //线下支付
    // 付款方式-支票信息
    FG_TRANSFER_INFO_YES: 1, //支持
    FG_TRANSFER_INFO_NO: 0, //不支持

    // 收费患者账户
    CHGS_ACCOUNT_TYPE_CREDIT: '0', //信用
    CHGS_ACCOUNT_TYPE_UNITY: '1', //统一
    CHGS_ACCOUNT_TYPE_OUTP: '2', //门诊
    CHGS_ACCOUNT_TYPE_DOCTWS: '3', //住院

    // 付款方式
    PR_PAY_CHANEL_CODE_CASH: '01', //现金
    PR_PAY_CHANEL_CODE_PRE_PAYMENT_FEE: '02', //预交金
    PR_PAY_CHANEL_CODE_HALF_ADJUST: '03', //舍入

    // 付款方式-适应场景
    PR_PAY_CHANEL_SCENE_OUTP_PRE_MONEY: '01', //门诊预交金
    PR_PAY_CHANEL_SCENE_DOCTWS_PRE_MONEY: '02', //住院预交金
    PR_PAY_CHANEL_SCENE_OUTP_REG: '03', //门诊挂号收费
    PR_PAY_CHANEL_SCENE_OUTP_CHGS: '04', //门诊收费
    PR_PAY_CHANEL_SCENE_DOCTWS_CHGS: '05', //住院收费
    PR_PAY_CHANEL_SCENE_ONLINE_CHGS: '06', //线上支付

    // 收费患者账户-收据-操作类型
    CHGS_EU_OPER_TYPE_QUOTA: 0, //账户额度维护
    CHGS_EU_OPER_TYPE_FREEZE: 1, //账户冻/解维护

    // 收费患者账户-收据-操作方向
    CHGS_EU_OPER_DIRECT_ADD: 1, //增加、解冻
    CHGS_EU_OPER_DIRECT_DEL: -1, //减少、冻结

    // 收费患者账户-收据-交易业务类型
    CHGS_EU_OPER_TRANSTYPE_RECEIVE: '1', //充值、交款
    CHGS_EU_OPER_TRANSTYPE_REFUND: '2', //退款
    CHGS_EU_OPER_TRANSTYPE_USE: '4', //使用
    CHGS_EU_OPER_TRANSTYPE_RETURN: '5', //退还
    CHGS_EU_OPER_TRANSTYPE_CANCEL: '6', //作废
    CHGS_EU_OPER_TRANSTYPE_AUTH: '7', //授权
    CHGS_EU_OPER_TRANSTYPE_CANCEL_AUTH: '8', //取消授权

    // 收费患者账户状态
    CHGS_EU_STATUS_COMMON: 0, //正常
    CHGS_EU_STATUS_FREEZE: 1, //冻结

    // 记账明细表状态
    CHGS_ITEM_STATUS_COMMON: '01', //正常
    CHGS_ITEM_STATUS_CANCEL: '02', //已取消
    CHGS_ITEM_STATUS_RED_DASH: '03', //红冲

    // 结算账单状态
    CHGS_SETTLE_STATE_CANCEL: -1, //已取消(前端使用的枚举，后端没有对应值)
    CHGS_SETTLE_STATE_PADDING: 0, // 待处理
    CHGS_SETTLE_STATE_IN_TRADING: 1, //交易中、理算中/医保结算中
    CHGS_SETTLE_STATE_PAY_WAIT: 2, //待支付
    CHGS_SETTLE_STATE_PAY_FINISH: 4, //已支付
    CHGS_SETTLE_STATE_TRADING_ERR: 5, //交易失败

    // 结算账单取消状态
    CHGS_FG_CANC_NO: 0, //未取消
    CHGS_FG_CANC_YES: 1, //已取消 

    // 费用状态
    CHGS_PRICE_ITEM_STATE_PAY_FINISH: 3, //已支付
    CHGS_PRICE_ITEM_STATE_PAY_WAIT: 2, //待支付
    CHGS_PRICE_ITEM_STATE_SETTLE_FINISH: 1, //已结算
    CHGS_PRICE_ITEM_STATE_AUTH_YES: -2, //已授权
    CHGS_PRICE_ITEM_STATE_AUTH_NO: -1, //未授权

    // 结算场景
    CHGS_SETTLE_SENCE_OUTP: 'OUTP', //门诊结算    
    CHGS_SETTLE_SENCE_DOCTWS: 'DOCTWS', //出院结算   
    CHGS_SETTLE_SENCE_OUTP_REG: 'OUTP_REG', //门诊预约挂号  
    
    // 多维价表类型
    SD_MULTI_PRICE_CODE_BASIC: 'A', //基础价格
    SD_MULTI_PRICE_CODE_FOREIGN: 'B', //外宾价格
    SD_MULTI_PRICE_CODE_BUSINESS_INS: 'C', //商保价格

    // 结算审核类型
    CHGS_AUDIT_TYPE_MIDDLE: '1', //中途审核
    CHGS_AUDIT_TYPE_OUTP: '2', //出院审核

    // 结算类型
    // 0X: 门诊流程： 00 门诊收费结算，01 门诊挂号结算 ；
    // 1X 住院流程：10 出院结算，11中途结算；
    // 2X 反流程结算：20 冲账，21 取消结算
    CHGS_DT_ST_TYPE_OUTP: '00', //门诊收费结算
    CHGS_DT_ST_TYPE_OUTP_REG: '01', //门诊挂号结算
    CHGS_DT_ST_TYPE_DOCTWS_LEAVE: '10', //出院结算
    CHGS_DT_ST_TYPE_DOCTWS_MIDDLE: '11', //中途结算

    // 住院结算-记账明细-住院费用审核状态
    CHGS_PRICE_ITEM_CHK_STATUS_AUDIT: 1, //已审核
    CHGS_PRICE_ITEM_CHK_STATUS_NOT: 0, //未审核

    // 费用模板配置-模板类型
    CHGS_FACULTY_TYPE_HOSP: '01', //模板类型-全院
    CHGS_FACULTY_TYPE_DEPT: '02', //模板类型-科室
    CHGS_FACULTY_TYPE_PERSON: '03', //模板类型-个人

    // 交款单-金额-使用状态
    CHGS_MONEY_USE_NO_USE: '0', //未使用，空
    CHGS_MONEY_USE_PART: '1', // 部分
    CHGS_MONEY_USE_ALL: '2', // 全用
    CHGS_MONEY_USE_OVERFLOW: '3', // 退款

    // 收银员日结总结-业务方向
    CHGS_EU_DT_SCENE_SHOU: 1, // 业务方向-收款
    CHGS_EU_DT_SCENE_TUI: -1, // 业务方向-退款

    CHGS_EU_DT_SCENE_LIST: [ // 业务方向
        {
            label: '收款',
            value: 1
        },
        {
            label: '退款',
            value: -1
        }
    ],

    CHGS_INV_TYPE_NO: '0', //发票类型-不开发票
    CHGS_INV_TYPE_ELECTRONIC: '1', //发票类型-电子发票
    CHGS_INV_TYPE_PAPER: '2', //发票类型-纸质发票(普票2)

    CHGS_INV_TYPE_NAME_NO: '不开发票', //发票类型-不开发票
    CHGS_INV_TYPE_NAME_ELECTRONIC: '电子发票', //发票类型-电子发票
    CHGS_INV_TYPE_NAME_ELECTRONIC_NO: '1', //发票类型-电子发票：1 普票：2
    CHGS_INV_TYPE_NAME_PAPER: '纸质发票', //发票类型-纸质发票(普票2)

    CHGS_BUYER_TYPE_PERSON: '0', //发票抬头-个人
    CHGS_BUYER_TYPE_COM: '1', //发票抬头-公司

    // 开具类型 0正常开票 1红字发票

    // 开票状态
    CHGS_INV_STATE_NO: '待开票', //开票状态-待开票
    CHGS_INV_STATE_CREATE_ING: '开票中', //开票状态-开票中
    CHGS_INV_STATE_CREATE_OK: '开票成功', //开票状态-开票成功
    CHGS_INV_STATE_CREATE_ERR: '开票失败', //开票状态-开票失败

    CHGS_INV_P_STATE_PRINT_ING: '打印中', //开票状态-打印中
    CHGS_INV_P_STATE_PRINT_OK: '打印成功', //开票状态-打印成功
    CHGS_INV_P_STATE_PRINT_ERR: '打印失败', //开票状态-打印失败

    // 操作结果状态
    CHGS_STATUS_OK: 'ok', //全部成功
    CHGS_STATUS_OK_PART: 'partOk', //部分成功
    CHGS_STATUS_ERR: 'err', //全部失败

    // 发票作废标志
    CHGS_INV_FG_CANC_CANCEL: 0, //取消/作废
    CHGS_INV_FG_CANC_NORMAL: 1, //未取消/正常
    CHGS_INV_FG_CANC_RED: 2, //红冲

    // 发票作废原因
    CHGS_INV_REASON_CANC_REFUND: 0, //患者退费
    CHGS_INV_REASON_CANC_BAD: 1, //发票损坏

    // 住院结算记账明细未审核模式配置 
    CHGS_ACCOUNT_DETAIL_PATTERN_IGNORE:1,//不提示
    CHGS_ACCOUNT_DETAIL_PATTERN_TIPS:2,//提示
    CHGS_ACCOUNT_DETAIL_PATTERN_LIMIT:3,//限制

};
// 收费域--帆软报表-相关常量
let chgsFineReportConstant = {
    // 收费患者账户-单据打印viewlet
    CHGS_ACCOUNT_TYPE_UNITY_VIEWLET: '', //统一
    CHGS_ACCOUNT_TYPE_OUTP_VIEWLET: 'bills/outpatient_pay_bills.cpt', //门诊
    CHGS_ACCOUNT_TYPE_DOCTWS_VIEWLET: 'bills/inpatient_pay_bills.cpt', //住院
    
    // 收费-单据导出viewlet
    CHGS_CASHIER_DAY_BILL_VIEWLET: 'bills/bl_acct_oneself_summary.cpt', //收银员日结账-导出、收银员日结账查询-导出
    CHGS_CASHIER_SUM_BILL_VIEWLET: 'bills/bl_acct_summary.cpt', //收银员总结账-导出
    CHGS_INSUR_ITEM_CALC_VIEWLET: 'bills/insur_item_pre_calc.cpt', // 医保审核异常数据-导出
}


data = Object.assign(data, chgsConstant); // 收费域常量
data = Object.assign(data, chgsFineReportConstant); // 收费域--帆软报表-相关常量
export default data;
