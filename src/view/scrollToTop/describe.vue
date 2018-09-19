<template>
  <div>
    <h2>滚动至顶部组件</h2>
    <p>通过点击组件滑动页面至顶部</p>
    <h3>基础用法</h3>
    <pre>
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
      巨长的一篇文章
    </pre>
    <scrollToTop></scrollToTop>
    <scrollToBottom @click.native="onClick"></scrollToBottom>


    <h2>ScrollToTop Attributes</h2>
    <AttributesTable :tableData="scrollToTopAttributes"></AttributesTable>
    <h2>ScrollToBottom Attributes</h2>
    <AttributesTable :tableData="scrollToBottomAttributes"></AttributesTable>
  </div>
</template>

<script>
  // import ScrollToTop from '../../../safe-components/src/packages/scrollTo/scrollToTop'
  // import ScrollToBottom from '../../../safe-components/src/packages/scrollTo/scrollToBottom'
  import AttributesTable from '../../components/attributesTable'
  import EventsOrMethodsTable from '../../components/eventsOrMethodsTable'

  export default {
    name: 'ScrollToTopDemo',
    components: {
      // ScrollToTop,
      // ScrollToBottom,
      AttributesTable,
      EventsOrMethodsTable
    },
    data() {
      return {
        scrollToTopAttributes: [
          {
            attributes: 'width',
            explain: '悬浮置顶按钮宽度，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '40'
          },
          {
            attributes: 'height',
            explain: '悬浮置顶按钮高度，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '40'
          },
          {
            attributes: 'bottom',
            explain: '悬浮置顶按钮距离浏览器下定位，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '150'
          },
          {
            attributes: 'right',
            explain: '悬浮置顶按钮距离浏览器右定位，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '100'
          },
          {
            attributes: 'color',
            explain: '悬浮置顶按钮箭头颜色',
            type: 'String',
            options: '',
            defaultValue: '#3E8EF7'
          }
        ],
        scrollToBottomAttributes: [
          {
            attributes: 'width',
            explain: '悬浮置底按钮宽度，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '40'
          },
          {
            attributes: 'height',
            explain: '悬浮置底按钮宽度，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '40'
          },
          {
            attributes: 'bottom',
            explain: '悬浮置底按钮距离浏览器下定位，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '100'
          },
          {
            attributes: 'right',
            explain: '悬浮置底按钮距离浏览器右定位，仅支持数字传入，默认单位 px',
            type: 'Number',
            options: '',
            defaultValue: '100'
          },
          {
            attributes: 'color',
            explain: '悬浮置底按钮箭头颜色',
            type: 'String',
            options: '',
            defaultValue: '#3E8EF7'
          }
        ],
      }
    },
    methods: {
      onClick() {
        console.log('点我干嘛')
      }
    },
    mounted() {
    }
  }
</script>

<style>
</style>
