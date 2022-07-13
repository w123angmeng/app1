<template>
    <div :class="{active: item.checked, infusionCardItemWrap: true}">
        <div class="row mainTxt">
            <div class="lw">
                <span>ID: {{item.patCode}}</span>
                <span> 日期：{{item.orderDt}}</span>
            </div>
            <div class="rw">
                <el-checkbox v-model="item.checked" @change="changeHandle"></el-checkbox>
            </div>
        </div>
        <div class="row mainTxt">
            <div class="lw">
                <span>{{item.patName}}</span>
                <span> {{item.sdSexStr}}</span>
                <span> {{item.age}}</span>
            </div>
            <div class="rw">
                {{item.freqUnit}}
            </div>
        </div>
        <div class="drugW">
            <div class="row subMainTxt" v-for="(drug, ind) in drugArr" :key="ind">
            <div class="lw">
                <span>{{drug.ordersName}} [{{drug.drugSpecification}}]</span>
            </div>
            <div class="rw">
                {{drug.dose}}{{drug.doseUnits}}
            </div>
        </div>
        <div class="row subMainTxt">{{ showMore ? '...' : '&nbsp;'}}</div>
        </div>
        
        <div class="row">
            <div class="lw subMainTxt">
                {{item.description}}
            </div>
            <div class="rw mainTxt otherTxt">
                {{item.routeName}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        itemData: {
            type: Object,
            default: ()=> {
                return {
                    ind: 0,
                    checked: false,
                }
            }
        }
    },
    data() {
        return {
            item: {
                ind: 0,
                checked: false,
            }
        };
    },
    computed: {
        showMore() {
            return this.item && this.item.infusionList && this.item.infusionList.length > 3 ? true : false
        },
        drugArr() {
            if(this.item && this.item.infusionList) return this.item.infusionList.slice(0, 3)
            return []
        },
    },
    watch: {
        itemData: {
            handler(valObj, oldObj) {
                Object.assign(
                    this.item, valObj
                )
            },
            immediate: true,
            deep: true,
        },
        // 'itemData.checked': {
        //     handler(newVal, oldVal) {
        //         console.log("newVal", newVal, oldVal)
        //         this.item.checked = newVal
        //         // Object.assign(
        //         //     this.item, newVal
        //         // )
        //     },
        //     immediate: true,
        //     deep: true,
        // },
    },
    created() {},
    mounted() {
    },
    methods: {
       changeHandle(val) {
        this.$emit('itemCheckChange', this.item.ind, val)
       }
    },
    destroyed() {
    },
};
</script>
<style lang="scss" scoped>
.infusionCardItemWrap {
    display: inline-block;
    width: 390px;
    padding: 12px;
    box-sizing: border-box;
    border: 1px dashed #BFBFBF;
    border-radius: 2px;
    background-color: #FFFFFF;
    margin-bottom: 12px;
    margin-left: 11px;
    text-align: left;
    .drugW {
        height: 88px;
        overflow: hidden;
    }
    .row {
        display: flex;
        .lw {
            flex: 1;
        }
        .rw {
            width: 80px;
            display: flex;
            flex-direction:row-reverse;
        }
    }
    .rowR {
        display: flex;
        flex-direction:row-reverse;
    }
    .mainTxt {
        color: #595959;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
    .subMainTxt {
        color:#8C8C8C;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    }
    .otherTxt {
        font-size: 14px;
    }
}
.infusionCardItemWrap + .infusionCardItemWrap {
    //  margin-left: 12px;
}
.active {
    background: #E8F4FF;
    border: 1px dashed #4CA8FC;
}
</style>