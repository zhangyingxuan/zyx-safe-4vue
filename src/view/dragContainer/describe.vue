<template>
  <div>
    <h2>拖拽容器</h2>
    <p>通过点击组件拖动布局容器</p>
    <h3>基础用法</h3>
    <DragContainer>
      <h1>这是一个拖拽内容title</h1>
      <pre>
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
        这是一个拖拽内容
      </pre>
    </DragContainer>

    <h2>DragContainer Attributes</h2>
    <AttributesTable :tableData="dragContainerAttributes"></AttributesTable>
  </div>
</template>

<script>
  import DragContainer from '../../../safe-components/src/packages/dragContainer/dragContainer'
  import AttributesTable from '../../components/attributesTable'
  import EventsOrMethodsTable from '../../components/eventsOrMethodsTable'

  export default {
    name: 'DragContainerDemo',
    components: {
      DragContainer,
      AttributesTable,
      EventsOrMethodsTable
    },
    data() {
      return {
        dragContainerAttributes: [
        ],
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style>
</style>
