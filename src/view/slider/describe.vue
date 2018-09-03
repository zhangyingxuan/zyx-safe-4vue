<template>
  <div>
    <h2>拼图滑块</h2>
    <p>通过滑动滑块移动拼图至缺失位置</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>

    <jigsawSlider :width="'300px'"
                  :failAutoRefresh="false"
                  message="滑滑我试试"
                  @fail="onFail"
                  @refresh="onRefresh"
                  @success="onSuccess">
    </jigsawSlider>
    <pre><span style="color:#e8bf6a;">&lt;jigsawSlider </span><span style="color:#bababa;">:width=</span><span
      style="color:#a5c261;">"</span>'300px'<span style="color:#a5c261;">" </span><span
      style="color:#a5c261;"> </span><span style="color:#bababa;">:failAutoRefresh=</span><span
      style="color:#a5c261;">"</span>false<span style="color:#a5c261;">" </span><span
      style="color:#a5c261;"> </span><span style="color:#bababa;">message=</span><span
      style="color:#a5c261;">"滑滑我试试" </span><span style="color:#a5c261;"> </span></pre>
    <pre><span style="color:#bababa;">@fail=</span><span style="color:#a5c261;">"</span><span style="color:#ffc66d;">onFail</span><span
      style="color:#a5c261;">" </span><span style="color:#a5c261;"> </span><span style="color:#bababa;">@refresh=</span><span
      style="color:#a5c261;">"</span><span style="color:#ffc66d;">onRefresh</span><span style="color:#a5c261;">" </span><span
      style="color:#a5c261;"> </span><span style="color:#bababa;">@success=</span><span
      style="color:#a5c261;">"</span><span style="color:#ffc66d;">onSuccess</span><span
      style="color:#a5c261;">"</span><span style="color:#e8bf6a;">&gt; </span></pre>
    <pre><span style="color:#e8bf6a;">&lt;/jigsawSlider&gt;</span></pre>

    <slider>
    </slider>
    <pre><span style="color:#e8bf6a;">&lt;slider&gt; </span><span style="color:#e8bf6a;">&lt;/slider&gt;</span></pre>

    <h2>JigsawSlider Attributes</h2>
    <AttributesTable :tableData="tableAttributes"></AttributesTable>
    <h2>JigsawSlider Events</h2>
    <EventsOrMethodsTable :tableData="tableEvents"></EventsOrMethodsTable>
  </div>
</template>

<script>
  import slider from '../../../safe-components/src/packages/slider/slider.vue'
  import JigsawSlider from '../../../safe-components/src/packages/slider/jigsaw-slider.vue'

  import checkStrength from '../../../safe-components/src/packages/checkStrength/checkStrength'
  import AttributesTable from '../../components/attributesTable'
  import EventsOrMethodsTable from '../../components/eventsOrMethodsTable'

  export default {
    name: 'SliderDemo',
    components: {
      slider,
      JigsawSlider,
      checkStrength,
      AttributesTable,
      EventsOrMethodsTable
    },
    data() {
      return {

        tableAttributes: [
          {
            attributes: 'width',
            explain: '整个拼图滑块组件的宽度，支持px 或 % 百分比设置，如：300px / 60%',
            type: 'String',
            options: '',
            defaultValue: '320px'
          },
          {
            attributes: 'failAutoRefresh',
            explain: '当拼图失败时，是否自动刷新拼图界面',
            type: 'Boolean',
            options: 'true/false',
            defaultValue: 'true'
          }, {
            attributes: 'message',
            explain: '拼图滑块滑动条提示内容',
            type: 'String',
            options: '',
            defaultValue: '向右滑动滑块填充拼图'
          }],
        tableEvents: [
          {
            eventName: 'success',
            explain: '当滑块停止时，拼图校验成功时触发',
            attributes: '--',
          },
          {
            eventName: 'fail',
            explain: '当滑块停止时，拼图校验失败时触发',
            attributes: '--',
          },
          {
            eventName: 'refresh',
            explain: '点击拼图组件刷新图标时触发',
            attributes: '--',
          }]
      }
    },
    computed: {},
    methods: {
      onSuccess() {
        this.$message.success('成功了啊')
      },
      onRefresh() {
        this.$message.success('您点了刷新')
      },
      onFail() {
        this.$message.error('失败了啊')
      }
    },
    mounted() {
    }
  }
</script>

<style>
</style>
