<template>
    <div class="outpNurseUniversalContentPrinting">
        <div class="contentHeader">
            <div class="headerTitle">
                <p>患者列表</p>
            </div>
            <div class="searchHandlerWrap">
                <div>
                    <span class="labelTitle">临床科室</span>
                    <el-select
                        filterable
                        remote
                        reserve-keyword
                        :remote-method="remoteIdDeptMethod"
                        @focus="remoteIdDeptMethod('')"
                        v-model="visitParams.idDept"
                        @change="changeSearch('dept')"
                        placeholder="请选择科室"
                        clearable
                    >
                        <el-option
                            v-for="item in department"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <span class="labelTitle">号别</span>
                    <el-select
                        filterable
                        remote
                        reserve-keyword
                        :remote-method="remoteNumberAliasMethod"
                        @focus="remoteNumberAliasMethod('')"
                        v-model="visitParams.idServe"
                        @change="changeSearch"
                        placeholder="请选择号别"
                        clearable
                    >
                        <el-option
                            v-for="item in numberAliasList"
                            :key="item.idServe"
                            :label="item.serveName"
                            :value="item.idServe"
                        >
                        </el-option>
                    </el-select>
                    <span class="labelTitle">患者信息</span>
                    <el-autocomplete
                        :popper-class="
                            makeNameArray.length
                                ? 'querySearchPatCode'
                                : 'noSearchPatCode'
                        "
                        v-model="patName"
                        :debounce="100"
                        :fetch-suggestions="querySearchPatCode"
                        placeholder="患者姓名/ID"
                        @select="handleSelect"
                        @focus="docnameFocus"
                    ></el-autocomplete>
                    <span class="labelTitle">就诊日期</span>
                    <el-date-picker
                        v-model="beginAndendTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        :clearable="false"
                        @change="changeBeginAndendTime"
                        :picker-options="pickerOptions"
                        range-separator="至"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                    <el-radio-group
                        v-model="visitParams.accepted"
                        class="statusGroup"
                    >
                        <el-radio label="">全部</el-radio>
                        <el-radio :label="0">未诊</el-radio>
                        <el-radio :label="1">已诊</el-radio>
                    </el-radio-group>
                    <el-button
                        type="plain"
                        @click="searchList"
                        class="searchList"
                        size="medium"
                        >查 询</el-button
                    >
                </div>
                <el-button @click="btnClickStatusDetail()" type="text"
                    >就诊状态</el-button
                >
            </div>
        </div>
        <!-- @row-dblclick="rowDblclickHanle" -->
        <el-table
            class="tbls"
            :data="tableData"
            border
            stripe
            :header-cell-style="tableTitleStyle"
            :cell-style="cellStyle"
            @row-contextmenu="rowRightClick"
        >
            <el-table-column
                prop="patCode"
                label="患者ID"
                align="left"
                width="110"
            ></el-table-column>
            <el-table-column
                prop="patName"
                label="姓名"
                align="left"
                width="90"
            >
            </el-table-column>
            <el-table-column
                prop="sdSexStr"
                label="性别"
                align="left"
                width="70"
            ></el-table-column>
            <el-table-column
                prop="ageStr"
                label="年龄"
                align="left"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="chargeTypeStr"
                label="费别"
                align="left"
                :width="100"
            >
            </el-table-column>
            <el-table-column
                prop="dtAccept"
                label="就诊日期"
                align="left"
                width="160"
            ></el-table-column>
            <el-table-column
                prop="deptName"
                label="就诊科室"
                align="left"
                width="150"
            ></el-table-column>
            <el-table-column
                prop="serveName"
                label="号别"
                align="left"
                show-overflow-tooltip
            ></el-table-column>
            <el-table-column
                prop="doctorName"
                label="医生"
                align="left"
                width="90"
            ></el-table-column>
            <el-table-column
                prop="sdVisitStatus"
                label="状态"
                align="left"
                width="50"
            >
                <template slot-scope="scope">
                    <span>{{ showStatus(scope.row.sdVisitStatus) }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="sdVisitStatus"
                label="操作"
                align="left"
                width="150"
            >
                <template slot-scope="scope">
                    <el-button :disabled="btnIsDisabled(scope.row)" @click="btnClickView(scope.row)" type="text"
                        >查阅</el-button
                    >
                    <el-button :disabled="btnIsDisabled(scope.row)" @click="btnClickPrint(scope.row)" type="text"
                        >病历本</el-button
                    >
                    <el-button :disabled="btnIsDisabled(scope.row)" @click="btnClickCharge(scope.row)" type="text"
                        >补费</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 sizes  jumper-->
        <div class="pagination" v-show="!total == 0">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="visitParams.pageIndex"
                :page-sizes="pageSizes"
                :page-size="visitParams.pageSize"
                layout="total, prev, pager, next"
                :total="total"
            ></el-pagination>
        </div>
        <!-- <div class="printModelWrap" id="printModelWrap">
            <template v-if="showPrintBox">
                <OutpPrintCompAtmeng v-if="isAtmeng" :printAllVisit="idVisit" 
                    :definedParams="definedParams" :dtSign="printDtSign" ref="OutpPrintComp"></OutpPrintCompAtmeng>
                <OutpPrintComp v-else :printAllVisit="idVisit" :dtSign="printDtSign" ref="OutpPrintComp" ></OutpPrintComp>
                <div class="emptyBox" v-if="!visitedList.length">
                    <img class="simpleImgSvg" src="@/assets/images/iconSmall/simple.svg" alt />
                </div>
            </template>
        </div> -->
        <!-- 打印弹窗 -->
        <!-- <el-dialog
            class="printAllTypeDialog"
            title="打印"
            :visible.sync="printDialogVisible"
            width="1080px"
            :close-on-press-escape="false"
            :close-on-click-modal="false"
            :before-close="cancelPrint"
        >
            <div v-if="printDialogVisible">
                <OutpPrintCompAtmeng
                    :printAllVisit="idVisit"
                    :definedParams="definedParams"
                    :dtSign="printDtSign"
                    @cancelPrint="cancelPrint"
                    ref="OutpPrintComp"
                >
                </OutpPrintCompAtmeng>
            </div>
        </el-dialog> -->

        <!-- 查阅弹窗 -->
        <!-- <el-drawer
            title="就诊信息"
            class="docReceiveDetailedDialog"
            :visible.sync="docReceiveDetailedVisible"
            direction="rtl"
            :close-on-press-escape="false"
            :wrapperClosable="false"
            :before-close="handleClose"
            size="1186px"
        >
            <div v-if="docReceiveDetailedVisible">
                <OutpDocReceiveDetailed></OutpDocReceiveDetailed>
                <div class="demo-drawer__footer">
                    <el-button @click="handleClose">关闭</el-button>
                </div>
            </div>
        </el-drawer> -->

        <!-- 补费-弹窗 -->
        <!-- <AgainAddFeeModel
            ref="againAddFeeModel"
            v-if="againAddFeeModelForm.visible"
            :modelForm="againAddFeeModelForm"
        >
        </AgainAddFeeModel> -->

        <!-- 退费-弹窗 -->
        <!-- <DelFeeModel
            ref="delFeeModel"
            v-if="delFeeModelForm.visible"
            :modelForm="delFeeModelForm"
        >
        </DelFeeModel> -->

        <!-- 退费申请弹窗 -->
        <!-- <RefundDetail
            ref="RefundDetail"
            v-if="delFeeModelForm.RefundDetailFormVisable"
            :RefundDetailForm="delFeeModelForm"
        ></RefundDetail> -->

        <!-- 费用补录弹窗 -->
        <!-- <FeeAdditional
            ref="FeeAdditional"
            v-if="againAddFeeModelForm.FeeAdditionalFormVisable"
            :FeeAdditionalForm="againAddFeeModelForm"
        ></FeeAdditional> -->

        <!-- 输液卡-弹窗 -->
        <!-- <InfusionCard
            v-if="infusionCardForm.visible"
            :modelForm="infusionCardForm"
        >
        </InfusionCard> -->
    </div>
</template>
<script>
// import InfusionCard from "@/components/page/OutpNurse_WEB/outpNurseUniversalPrint/comp/infusionCard.vue";
// // import OutpPrintComp from "@/components/page/OutPatient_WEB/receivePatient/outpPrintComp/outpPrintComp.vue"; //门诊打印组件
// import OutpPrintCompAtmeng from "@/components/page/OutPatient_WEB/receivePatient/outpPrintCompAtmeng/outpPrintComp.vue"; //阿特蒙门诊打印组件
// // import elementResizeDetectorMaker from "element-resize-detector";
// import OutpDocReceiveDetailed from "@/components/page/OutPatient_WEB/reportForm/docReceiveTable/index/index.vue";
// // 收费域
// // import AgainAddFeeModel from "@/components/page/ChargeManage_WEB/settlement/outp/leftCon/againAddFeeModel2"; // 补费-弹窗
// // import DelFeeModel from "@/components/page/ChargeManage_WEB/settlement/outp/leftCon/outpDelFeeModel"; // 退费-弹窗
// import FeeAdditional from "@/components/page/OutPatient_WEB/receivePatient/feeAdditional/feeAdditional.vue"; //费用补录
// import RefundDetail from "@/components/page/OutPatient_WEB/receivePatient/refundDetail/refundDetail"; //退费申请
// import { mixins } from "./comp/reportConfig";
export default {
    // mixins: [mixins],
    data() {
        return {
            docReceiveDetailedVisible: false,
            idVisit: "", //就诊id
            printDialogVisible: false, //打印弹窗
            tableData: [], //表格数据
            total: 0, //总页数
            pageSizes: [10], //分页规则
            time: "", //系统当前时间
            nowDate: "",
            makeNameArray: [], //患者信息集合数组
            department: [], //科室列表
            numberAliasList: [], //号别列表
            beginAndendTime: [], //历史就诊区间值
            printDtSign: "",
            patName: "",
            showPrintBox: false,
            contanierHeight: null, //容器的高度
            visitedItem: null, //就诊项目
            visitedList: [], //就诊记录
            // 表格样式
            tableTitleStyle: {
                fontSize: "14px",
                color: "#1F1F1F",
                height: "40px",
                padding: "7px 0",
                background: "#f5f5f5",
            },
            cellStyle: {
                fontSize: "14px",
                color: "#1F1F1F",
                height: "40px",
                padding: "0px 0",
            },
            visitParams: {
                patCode: "", //患者编号
                idDept: "", //科室id
                idServe: "", //号别
                dtBegin: "", //开始时间
                dtEnd: "", //结束时间
                accepted: "", // 就诊状态 0 未诊 1 已诊
                pageIndex: 1,
                pageSize: 10,
            },
            pickerOptions: {
                disabledDate: (time) => {
                    var dateTime = new Date(this.time);
                    return time.getTime() > dateTime;
                },
                shortcuts: [
                    {
                        text: "近7天",
                        onClick: (picker) => {
                            const end = new Date(this.time);
                            const start = new Date(this.time);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 6
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "近一个月",
                        onClick: (picker) => {
                            const end = new Date(this.time);
                            const start = new Date(this.time);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 29
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "近三个月",
                        onClick: (picker) => {
                            const end = new Date(this.time);
                            const start = new Date(this.time);
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 89
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                ],
            },
            againAddFeeModelForm: {
                FeeAdditionalFormVisable: false,
                patInfo: null,
                specialDisease: "",
            }, // 补费-弹框

            delFeeModelForm: {
                RefundDetailFormVisable: false,
                patInfo: null,
            }, // 补费-弹框
            infusionCardForm: {
                visible: false,
                rowData: null,
            }, // 输液卡-弹窗
        };
    },
    components: {
        // OutpPrintComp,
        // OutpPrintCompAtmeng,
        // OutpDocReceiveDetailed,
        // // AgainAddFeeModel,
        // // DelFeeModel,
        // FeeAdditional,
        // RefundDetail,
        // InfusionCard,
    },
    // computed: {
    //     isAtmeng() {
    //         return this.$limits.isFun(this);
    //     },
    //     definedParams() {
    //         return {
    //             hasRecordBook: true,
    //             // contanierHeight: this.contanierHeight || 0
    //         };
    //     }
    // },
    // watch: {
    //     $route: {
    //         handler() {
    //             if (this.$route.query.idVisit)
    //                 this.docReceiveDetailedVisible = true;
    //         },
    //         deep: true,
    //     },
    // },
    created() {},
    mounted() {
        this.getSystemTime(); //获取系统时间
    },
    methods: {
        // 按钮是否可点击
        btnIsDisabled(row) {
            return row.sdVisitStatus == this.CONSTANT.NOT_CLOSE_VISIT_STATUS ? true : false
        },
        getServerTime(time, type = 0) {
            if (type == 0) {
                return this.$axios.get('dict/sys/systemTime', {}).then(res => {
                    if (res.success) {
                        var date = new Date(res.data + 8 * 3600 * 1000);
                        let curr = date.toJSON()
                        let obj = {
                            'ymd':curr.substr(0, 10),
                            'hms':curr.substr(11, 8),
                            'hm':curr.substr(11, 5),
                            'ymdHms':curr.substr(0, 19).replace('T', ' '),
                            'ymdHm':curr.substr(0, 16).replace('T', ' '),
                            'day':new Date(res.data).getDay(),//获取星期几
                        }
                        return obj[time]||res.data
                    } else {
                        this.$message({
                            message: res.message,
                            type: 'warning'
                        })
                    }
                })
            } else if (type == 1) {
                let times = new Date(time);
                let yyyy = times.getFullYear();
                let MM = times.getMonth() + 1;
                let dd = times.getDate();
                let hh = times.getHours();
                let mm = times.getMinutes();
                let ss = times.getSeconds();
                return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
            }

        },
        //获取服务时间
        getSystemTime() {
            this.getServerTime().then((time) => {
                var dateTime = new Date(time);
                this.time = dateTime.setDate(dateTime.getDate());
                //初始页面默认展示今天数据
                this.nowDate = this.formatDate(new Date(time));
                this.visitParams.dtBegin = this.nowDate;
                this.visitParams.dtEnd = this.nowDate;
                this.beginAndendTime = [this.nowDate, this.nowDate];
                this.searchList();
            });
        },
        // 分页导航
        handleCurrentChange(val) {
            this.visitParams.pageIndex = val;
            this.getVisitedList(); //获取就诊记录
        },
        handleSizeChange(val) {
            this.visitParams.pageSize = val;
            this.getVisitedList(); //获取就诊记录
        },
        docnameFocus() {
            this.makeNameArray = [];
        },
        handleSelect(item) {
            this.patName = item.patName; //页面展示名字
            this.visitParams.patCode = item.patCode; //后端查询条件
        },
        //切换开始时间和结束时间
        changeBeginAndendTime(e) {
            if (e) {
                this.visitParams.dtBegin = e[0];
                this.visitParams.dtEnd = e[1];
                this.getVisitedList(); //获取就诊记录
            }
        },
        // 预览
        btnClickView(row) {
            this.currentRowDblclick = JSON.parse(JSON.stringify(row));
            sessionStorage.setItem(
                "receivePatientParams",
                JSON.stringify(this.currentRowDblclick)
            );

            //更新地址栏参数
            this.$router.push({
                query: {
                    idPat: this.currentRowDblclick.idPat,
                },
            });

            this.$nextTick(() => {
                //更新地址栏参数
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        idVisit: this.currentRowDblclick.idVisit,
                        idPat: this.currentRowDblclick.idPat,
                        idDept: this.currentRowDblclick.idDept,
                    },
                });
            });
        },
        // 打印病历本
        btnClickPrint(row) {
            console.log("row", row);
            this.idVisit = row.idVisit; //就诊id
            let itemInfo = JSON.stringify(row);
            sessionStorage.setItem("idVisitRecordParams", itemInfo);
            this.printDialogVisible = true;
        },
        //关闭打印弹窗
        cancelPrint() {
            this.printDialogVisible = false;
        },
        // 补费弹窗
        btnClickCharge(row) {
            Object.assign(this.againAddFeeModelForm, {
                FeeAdditionalFormVisable: true,
                patInfo: {
                    // idPat: this.query.idPat,
                    ...row,
                },
                specialDisease:
                    row.chargeTypeCode ===
                        this.CONSTANT.OUTPEXCESS_CHARGETYPECODE &&
                    row.sdSpecialDiseaseStr
                        ? 1
                        : 0, // 非特病传0、特病1
            });

            console.log(
                "FeeAdditionalFormVisable:",
                this.againAddFeeModelForm.specialDisease,
                this.againAddFeeModelForm.FeeAdditionalFormVisable
            );
        },
        // 退费
        btnClickRefound(row) {
            this.delFeeModelForm = {
                RefundDetailFormVisable: true,
                patInfo: {
                    // idPat: this.query.idPat,
                    ...row,
                },
            };
        },
        // 就诊状态详情
        async btnClickStatusDetail() {
            // let url =
            //     "http://10.102.100.104:8080/webroot/decision/view/form?viewlet=%25E4%25BF%25A1%25E6%2581%25AF%25E9%2583%25A8%252F%25E9%2597%25A8%25E8%25AF%258A%25E7%258A%25B6%25E6%2580%2581.frm&ref_t=design&ref_c=6049bd3e-01f5-45dd-94ba-e7b8fcf1d879";
            // window.open(url, "_blank");
            let paramData = {
                fineReportName: "F_R_VISIT_STATUS",
                requestBody: {},
            };
            let url = await this.getReportUrl(paramData);
            window.open(url, "_blank");
        },
        // 查询列表数据
        searchList() {
            if (!this.visitParams.patCode)
                this.visitParams.patCode = this.patName;
            //埋点查询记录
            this.visitParams.pageIndex = 1;
            this.getVisitedList(); //获取就诊记录
        },
        //患者模糊查询
        querySearchPatCode(name, callback) {
            this.makeNameArray = [];
            this.visitParams.patCode = "";
            if (name) {
                this.$axios
                    .post("reg/pat/findByPatName", {
                        patName: name,
                    })
                    .then((res) => {
                        if (res.success) {
                            let newMakeList = [];
                            let dataMake = res.data;
                            dataMake.map((item) => {
                                let patCode = item.patCode || "";
                                let patName = item.patName || "";
                                let sdSexStr = item.sdSexStr || "";
                                let age = item.age || "";
                                let mobile = item.mobile || "";
                                newMakeList.push({
                                    ...item,
                                    value:
                                        patCode +
                                        "   " +
                                        patName +
                                        "   " +
                                        sdSexStr +
                                        "   " +
                                        age +
                                        "   " +
                                        mobile,
                                });
                            });
                            if (res.data.length == 0)
                                this.visitParams.patCode = "";
                            this.makeNameArray = newMakeList;
                            callback(newMakeList);
                        } else {
                            this.$message({
                                message: res.message,
                                type: "warning",
                            });
                        }
                    });
            } else {
                this.makeNameArray = [];
                callback(this.makeNameArray);
                this.visitParams.patCode = "";
            }
        },
        // 获取门诊科室（部门）
        remoteIdDeptMethod(query = "") {
            this.$axios
                .get("/sch/serve/findServeDeptList", { deptName: query })
                .then((res) => {
                    if (res.success) {
                        this.department = res.data;
                    } else {
                        this.$message({
                            message: res.message,
                            type: "warning",
                        });
                    }
                })
                .catch((err) => {
                    this.$message.error(err.message);
                });
        },
        //号别列表
        remoteNumberAliasMethod(query = "") {
            this.$axios
                ._post("/sch/serve/pageScServe", {
                    enabled: 1,
                    idDept: this.visitParams.idDept,
                    idEmp: "",
                    pageIndex: 1,
                    pageSize: 20,
                    serveName: query,
                    channelCode: "04", //渠道编码
                })
                .then((res) => {
                    if (res.success) {
                        this.numberAliasList = res.data.records;
                    } else {
                        this.$message({
                            message: res.message,
                            type: "warning",
                        });
                    }
                });
        },
        //切换筛选条件
        changeSearch(val) {
            if (val == "dept") {
                this.visitParams.idServe = "";
            }
        },
        showStatus(num) {
            switch (num) {
                case this.CONSTANT.NOT_CLOSE_VISIT_STATUS:
                    return "未诊";
                case this.CONSTANT.VISITING_STATUS:
                    return "诊中";
                case this.CONSTANT.VISITED_STATUS:
                    return "已诊";
                case this.CONSTANT.CLOSE_VISIT_STATUS:
                    return "诊毕";
                default:
                    return "";
            }
        },
        //获取就诊记录
        getVisitedList() {
            this.$axios
                .post("/outpnurse/visit/pageNurseVisitIn", this.visitParams)
                .then((res) => {
                    if (res.success) {
                        this.tableData = res.data.records;
                        this.total = res.data.count;
                        this.pageSizes = this.hisPageSizes(
                            res.data.count,
                            this.visitParams.pageSize
                        );
                    } else {
                        this.$message.warning(res.message);
                    }
                });
        },
        //清空数据
        clearParams() {
            this.showPrintBox = false;
            (this.visitedItem = null), //就诊项目
                (this.visitedList = []), //就诊记录
                (this.visitParams.patCode = "");
        },
        //关闭打印弹窗
        handlePrintClear() {
            this.$refs.OutpPrintComp.printNum = "";
        },
        //右键
        rowRightClick(row, column, event) {
            event.preventDefault();
              if (this.btnIsDisabled(row)) return;  // 右键菜单不可点击 
            this.currentRow = row;
            let itemList = [
                {
                    label: "输液卡",
                    onClick: () => {
                        console.log("输液卡弹窗");
                        this.infusionCardForm.visible = true;
                        this.infusionCardForm.rowData = this.currentRow;
                    },
                },
                {
                    label: "巡回卡",
                    onClick: async () => {
                        // let url =
                        //     "http://10.102.100.104:8080/webroot/decision/view/report?viewlet=%25E6%258A%25A4%25E7%2590%2586%25E9%2583%25A8%252F%25E9%2597%25A8%25E8%25AF%258A%25E5%25B7%25A1%25E5%259B%259E%25E5%258D%25A1.cpt&ref_t=design&ref_c=ec3b8907-c207-4013-8e4e-a63154f42a5d";
                        // window.open(url, "_blank");
                        let paramData = {
                            fineReportName: "F_R_CIRCUIT_CARD",
                            requestBody: {},
                        };
                        let url = await this.getReportUrl(paramData);
                        window.open(url, "_blank");
                    },
                },
                {
                    label: "用药说明",
                    onClick: async () => {
                        // let url =
                        //     "http://10.102.100.104:8080/webroot/decision/view/report?viewlet=%25E8%258D%25AF%25E6%2588%25BF%252F%25E9%2597%25A8%25E8%25AF%258A%25E7%2594%25A8%25E8%258D%25AF%25E6%258C%2587%25E5%258D%2597.cpt&ref_t=design&ref_c=6049bd3e-01f5-45dd-94ba-e7b8fcf1d879";
                        // window.open(url, "_blank");
                        let paramData = {
                            fineReportName: "F_R_DRUG_DESCRIPTION",
                            requestBody: {},
                        };
                        let url = await this.getReportUrl(paramData);
                        window.open(url, "_blank");
                    },
                },
                {
                    label: "退费申请",
                    onClick: () => {
                        this.btnClickRefound(row);
                    },
                },
            ];
            this.$contextmenu({
                items: itemList,
                event,
                customClass: "rightClick",
                zIndex: 3,
                minWidth: 150,
            });
            return false;
        },
        handleClose() {
            //更新地址栏参数
            this.$router.push({
                query: {},
            });
            sessionStorage.removeItem("receivePatientParams");
            this.docReceiveDetailedVisible = false;
        },
    },
    destroyed() {
        sessionStorage.removeItem("idVisitRecordParams");
    },
};
</script>
<style lang="scss" src="./index.scss" scoped></style>