<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="attributes"
        label="参数"
        width="120">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="type"
        width="80"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="options"
        width="80"
        label="可选值">
      </el-table-column>
      <el-table-column
        prop="defaultValue"
        label="默认值">
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: 'attributesTable',
    props: {
      tableData: {
        type: Array
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>
