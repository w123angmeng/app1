<template>
  <div class="about">
    <h1>This is app1-demo11{{dialogData.content}}</h1>
    <!-- <el-button type="primary" @click="dialogData.visible = true">弹窗</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <!-- 公共组件 -->
    <CommonDialog :dialogData="dialogData" @handleClose="handleClose"></CommonDialog>
  </div>

</template>
<script>
export default {
 data: () => {
    return {
        dialogData: {
            visible: false,
            content: "这是父组件-调用公共组件"
        },
        input: '123',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
 },
 components: { 
    CommonDialog: () => import('lib_remote/CommonDialog'),
},
  methods: {
    handleClose(data) {
        console.log("app1 子组件监听到弹窗关闭", data)
    }
  }
};
</script>
