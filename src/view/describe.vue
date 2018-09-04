<template>
  <div>
    <h2>拖拽容器</h2>
    <p>通过点击组件拖动布局容器</p>
    <h3>基础用法</h3>
    <DragContainer>

    </DragContainer>
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
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style>
</style>
