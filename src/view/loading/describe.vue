<template>
  <div>
    <h2>加载loading</h2>
    <p>多种纯css loading 动画组件</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>

    <loading color="red" :width="30" :height="30">
    </loading>
    <pre><span style="color:#e8bf6a;">&lt;loading </span><span style="color:#bababa;">color=</span><span
      style="color:#a5c261;">"red" </span><span style="color:#bababa;">:width=</span><span
      style="color:#a5c261;">"</span>30<span style="color:#a5c261;">" </span><span
      style="color:#bababa;">:height=</span><span style="color:#a5c261;">"</span>30<span style="color:#a5c261;">"</span><span
      style="color:#e8bf6a;">&gt; </span><span style="color:#e8bf6a;">&lt;/loading&gt;</span>
    </pre>
    <loadingRect></loadingRect>
    <pre><span style="color:#e8bf6a;">&lt;loadingRect&gt;&lt;/loadingRect&gt;</span></pre>
    <loadingBounce></loadingBounce>
    <pre><span style="color:#e8bf6a;">&lt;loadingBounce&gt;&lt;/loadingBounce&gt;</span></pre>
    <loadingBounce2></loadingBounce2>
    <pre><span style="color:#e8bf6a;">&lt;loadingBounce2&gt;&lt;/loadingBounce2&gt;</span></pre>


    <h2>Loading Attributes</h2>
    <AttributesTable :tableData="tableAttributes"></AttributesTable>
    <h2>loadingRect Attributes</h2>
    <AttributesTable :tableData="table2Attributes"></AttributesTable>
    <h2>loadingBounce Attributes</h2>
    <AttributesTable :tableData="table3Attributes"></AttributesTable>
    <h2>loadingBounce2 Attributes</h2>
    <AttributesTable :tableData="table4Attributes"></AttributesTable>
  </div>
</template>
<script>
  import loading from '../../../safe-components/src/packages/loading/loading.vue'
  import loadingRect from '../../../safe-components/src/packages/loading/loading-rect.vue'
  import loadingBounce from '../../../safe-components/src/packages/loading/loading-bounce.vue'
  import loadingBounce2 from '../../../safe-components/src/packages/loading/loading-bounce2.vue'

  import checkStrength from '../../../safe-components/src/packages/checkStrength/checkStrength'
  import AttributesTable from '../../components/attributesTable'
  import EventsOrMethodsTable from '../../components/eventsOrMethodsTable'

  export default {
    name: 'LoadingDemo',
    components: {
      loading,
      loadingRect,
      loadingBounce,
      loadingBounce2,
      checkStrength,
      AttributesTable,
      EventsOrMethodsTable
    },
    data() {
      return {
        tableAttributes: [
          {
            attributes: 'color',
            explain: '双向绑定输入框值',
            type: 'String',
            options: '',
            defaultValue: ''
          }, {
            attributes: 'width',
            explain: 'loading宽度',
            type: 'Number',
            options: '',
            defaultValue: '20'
          }, {
            attributes: 'height',
            explain: 'loading高度',
            type: 'Number',
            options: '',
            defaultValue: '20'
          }],

        table2Attributes: [
          {
            attributes: 'color',
            explain: '双向绑定输入框值',
            type: 'String',
            options: '',
            defaultValue: ''
          }, {
            attributes: 'width',
            explain: 'loading宽度',
            type: 'Number',
            options: '',
            defaultValue: '50'
          }, {
            attributes: 'height',
            explain: 'loading高度',
            type: 'Number',
            options: '',
            defaultValue: '60'
          }],
        table3Attributes: [
          {
            attributes: 'color',
            explain: '双向绑定输入框值',
            type: 'String',
            options: '',
            defaultValue: ''
          }, {
            attributes: 'width',
            explain: 'loading宽度',
            type: 'Number',
            options: '',
            defaultValue: '40'
          }, {
            attributes: 'height',
            explain: 'loading高度',
            type: 'Number',
            options: '',
            defaultValue: '40'
          }],
        table4Attributes: [
          {
            attributes: 'color',
            explain: '双向绑定输入框值',
            type: 'String',
            options: '',
            defaultValue: ''
          }, {
            attributes: 'width',
            explain: 'loading宽度',
            type: 'Number',
            options: '',
            defaultValue: '150'
          }],
      }
    },
    computed: {},
    methods: {},
    mounted() {
    }
  }
</script>

<style>
</style>
