<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="eventName"
        label="事件名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
      <el-table-column
        width="120"
        prop="attributes"
        label="参数">
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: 'eventsOrMethodsTable',
    props: {
      tableData: {
        type: Array
      }
    }
  }
</script>

<style>
</style>
