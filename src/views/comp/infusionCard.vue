<template>
    <div class="infusionCardWrap">
        <el-drawer
            :visible="modelForm.visible"
            direction="rtl"
            :before-close="handleClose"
            size="1242px"
            title="输液卡"
            :show-close="true"
        >
            <div class="searchWrap">
                <div class="lWrap">
                    <el-radio-group
                        v-model="searchData.printFlag"
                        class="common_radio_group"
                    >
                        <el-radio-button :label="0">未打印</el-radio-button>
                        <el-radio-button :label="1">已打印</el-radio-button>
                    </el-radio-group>
                    <span>用法：</span>
                    <el-select
                        v-model="searchData.infusionRoutes"
                        multiple
                        collapse-tags
                        placeholder="请选择"
                        width="228"
                    >
                        <el-option
                            v-for="item in usageOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-button
                        type="primary"
                        @click="btnClickSearch"
                        class="searchBtn"
                        size="small"
                        >查 询</el-button
                    >
                    <el-checkbox v-model="allChecked" @change="changeHandle"
                        >全选</el-checkbox
                    >
                </div>

                <div class="rWrap">
                    <el-button
                        type="primary"
                        @click="btnClickPrint"
                        class="searchList"
                        size="small"
                        >打 印</el-button
                    >
                </div>
            </div>
            <div class="contWrap">
                <InfusionCardItem
                    v-for="item in cardList"
                    :key="item.ind"
                    :itemData="item"
                    @itemCheckChange="itemCheckChange"
                >
                </InfusionCardItem>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import InfusionCardItem from "@/components/page/OutpNurse_WEB/outpNurseUniversalPrint/comp/infusionCardItem.vue";
import { mixins } from "./reportConfig";
export default {
    mixins: [mixins],
    props: {
        modelForm: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {
            searchData: {
                idVisit: "",
                printFlag: 0,
                infusionRoutes: "", // 用法
            },
            allChecked: false,
            cardList: [],
            usageOptions: [],
            user: null
        };
    },
    components: {
        InfusionCardItem,
    },
    mounted() {
        this.searchData.idVisit = this.modelForm.rowData.idVisit;
        this.getUsageOptions();
        this.user = this.getUserStorage();
    },
    methods: {
        // 用法字典
        getUsageOptions() {
            let params = {
                configerCode: "OutpNurse_Infusion_Route", // 门诊护士打印输液卡的用法
                // idConfigerControl: this.userInfo.wardCode, // 当前病区id
            };
            this.usageOptions = [];
            this.searchData.infusionRoutes = [];
            return this.$axios
                .get("/dict/conf/findConfigerByCode", params)
                .then((res) => {
                    if (res.success) {
                        let configerDefaultValue =
                            res.data.configerDefaultValue;
                        let splitArr = configerDefaultValue.split("|");
                        if (splitArr.length) {
                            // this.handlerData.routeCodes = splitArr;
                            // this.routeCodesCopy = JSON.parse(JSON.stringify(splitArr));
                            splitArr.forEach((item) => {
                                if (item) {
                                    this.usageOptions.push({
                                        label: item,
                                        value: item,
                                    });
                                    // 默认全选
                                    this.searchData.infusionRoutes.push(item);
                                }
                            });
                            this.btnClickSearch();
                        }
                    } else {
                        this.$message({
                            type: "warning",
                            message: res.message,
                        });
                    }
                });
        },
        // 搜索
        btnClickSearch() {
            this.$axios
                ._post("outpnurse/infusion", this.searchData)
                .then((res) => {
                    if (res.success) {
                        this.allChecked = true;
                        this.cardList = res.data;
                        this.cardList = this.cardList.map((item, ind) => {
                            item.checked = true;
                            item.ind = ind;
                            return item;
                        });
                    } else {
                        this.$message({
                            message: res.message,
                            type: "warning",
                        });
                    }
                });
        },
        // 打印
        async btnClickPrint() {
            let data = this.cardList.filter((item) => item.checked);
            console.log("打印：", data.length);
            
            // 获取默认打印机
            // let ipInfo = sessionStorage.getItem('COMPUTER_INFO') ? JSON.parse(sessionStorage.getItem('COMPUTER_INFO')) : '';
            // let hostName = ipInfo ? ipInfo.hostName : '';
            // let printObj = {
            //     deptCode: this.user.idDept,//科室
            //     hostName: hostName, //主机名
            //     idOrg: this.user.idOrg, //机构
            //     printDTO: {},//本次打印单据数据
            //     sdPrintClass: "10",//打印分类 "输液卡"
            //     systemId: this.CONSTANT.INP_NURSE_SYSTEM_FLAG,//系统 1门诊  2 住院  4护士站
            //     wardCode: this.user.idDept//病区
            // }
            // let resData = await this.$axios._post('/print/common/commonPrint',printObj);
            // console.log("打印机配置信息：", resData)

            // 打开报表
            let paramData = {
                fineReportName: "F_R_INFUSION_CARD",
                requestBody: {
                    idVisit: this.searchData.idVisit
                },
            };
            let url = await this.getReportUrl(paramData);
            window.open(url, "_blank");
        },

        itemCheckChange(ind, val) {
            this.$set(this.cardList[ind], "checked", val);
        },
        // 全选
        changeHandle(val) {
            // this.cardList.forEach((item, ind) => {
            //     // item.checked = val ? true : false
            //     Object.assign(item, {
            //         checked: val ? true : false,
            //     });
            //     this.$set(this.cardList, ind, item);
            //     console.log("this.cardList[ind]:", this.cardList[ind].checked);
            // });
            this.cardList = this.cardList.map(item => {
                let itemCopy = JSON.parse(JSON.stringify(item))
                itemCopy.checked = val ? true : false
                return itemCopy
            })
        },
        // 关闭弹窗
        handleClose() {
            this.modelForm.visible = false;
        },
    },
};
</script>
<style lang="scss" scoped>
.infusionCardWrap {
    .searchWrap {
        padding: 12px 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .common_radio_group {
            margin-right: 12px;
        }
        .searchBtn {
            margin: 0 24px;
        }
    }

    .lWrap {
    }

    .rWrap {
    }
    .contWrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        // justify-content: center;
        align-items: center;
        padding: 12px 12px;
        background-color: #f5f5f5;
        overflow-y: scroll;
        // :nth-child(n) {
            // background:red;
            // margin: 0 12px;
            // margin-left: 10px;
        // }
    }
    /*滚动条样式*/
    .contWrap::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    .contWrap::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(80, 79, 79, 0.2);
    }
    /deep/ .el-drawer__wrapper {
        .el-drawer__header {
            padding: 24px 24px 12px 24px;
            margin-bottom: 0;
        }
    }
}
</style>