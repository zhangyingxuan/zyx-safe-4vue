<template>
  <div>
    <h2>正则校验框</h2>
    <p>通过鼠标或键盘输入字符</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>

    <checkStrength :rules="rules"
                   v-model="currentValue"
                   size="small"
                   clearable
                   width="400px">
    </checkStrength>
    <checkStrength :rules="rules"
                   v-model="currentValue2"
                   size="small"
                   width="80%">
    </checkStrength>
    <pre>
<pre><span style="font-size:6.5pt;color:#E8BF6A;">&lt;template&gt;

&nbsp; &lt;div&gt;

&nbsp;&nbsp;&nbsp; &lt;checkStrength </span><span style="font-size:6.5pt;color:#BABABA;">:rules=</span><span
  style="font-size:6.5pt;color:#A5C261;">"</span><span style="font-size:6.5pt;color:#9876AA;">rules</span><span
  style="font-size:6.5pt;color:#A5C261;">"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
  style="font-size:6.5pt;color:#BABABA;">v-model=</span><span style="font-size:6.5pt;color:#A5C261;">"</span><span
  style="font-size:6.5pt;color:#9876AA;">currentValue</span><span style="font-size:6.5pt;color:#A5C261;">"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
  style="font-size:6.5pt;color:#BABABA;">size=</span><span style="font-size:6.5pt;color:#A5C261;">"small"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
  style="font-size:6.5pt;color:#BABABA;">width=</span><span style="font-size:6.5pt;color:#A5C261;">"400"</span><span
  style="font-size:6.5pt;color:#E8BF6A;">&gt;

&nbsp;&nbsp;&nbsp; &lt;/checkStrength&gt;

&nbsp;&nbsp;&nbsp; &lt;input </span><span style="font-size:6.5pt;color:#BABABA;">type=</span><span
  style="font-size:6.5pt;color:#A5C261;">"button" </span><span style="font-size:6.5pt;color:#BABABA;">value=</span><span
  style="font-size:6.5pt;color:#A5C261;">"</span><span
  style="font-size:6.5pt;color:#A5C261;">清空<span>" </span></span><span
  style="font-size:6.5pt;color:#BABABA;">@click=</span><span style="font-size:6.5pt;color:#A5C261;">"</span><span
  style="font-size:6.5pt;color:#FFC66D;">clickBtn</span><span style="font-size:6.5pt;color:#A5C261;">"</span><span
  style="font-size:6.5pt;color:#E8BF6A;">/&gt;

&nbsp; &lt;/div&gt;

&lt;/template&gt;



&lt;script&gt;

&nbsp; </span><b><span style="font-size:6.5pt;color:#CC7832;">import </span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">checkStrength </span><b><span
  style="font-size:6.5pt;color:#CC7832;">from </span></b><span style="font-size:6.5pt;color:#6A8759;">'../../../safe-components/src/packages/checkStrength/checkStrength'



&nbsp; </span><b><span style="font-size:6.5pt;color:#CC7832;">export default </span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">{

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">name</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><span
  style="font-size:6.5pt;color:#6A8759;">'CheckStrengthDemo'</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">components</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; checkStrength

&nbsp;&nbsp;&nbsp; }</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#FFC66D;">data</span><span
  style="font-size:6.5pt;color:#A9B7C6;">() {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:6.5pt;color:#CC7832;">return </span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">currentValue</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><span style="font-size:6.5pt;color:#6A8759;">'dsafs'</span><span
  style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">rules</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: [

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {</span><span
  style="font-size:6.5pt;color:#9876AA;">message</span><span style="font-size:6.5pt;color:#A9B7C6;">: </span><span
  style="font-size:6.5pt;color:#6A8759;">"</span><span
  style="font-size:6.5pt;color:#6A8759;">长度为<span>6~14</span>个字符<span>"</span></span><span
  style="font-size:6.5pt;color:#CC7832;">, </span><span style="font-size:6.5pt;color:#9876AA;">rule</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><span style="font-size:6.5pt;color:#6A8759;">"^.{6,14}$"</span><span
  style="font-size:6.5pt;color:#CC7832;">, </span><span style="font-size:6.5pt;color:#9876AA;">isPassed</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><b><span style="font-size:6.5pt;color:#CC7832;">false</span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">}</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#A9B7C6;">{</span><span
  style="font-size:6.5pt;color:#9876AA;">message</span><span style="font-size:6.5pt;color:#A9B7C6;">: </span><span
  style="font-size:6.5pt;color:#6A8759;">"</span><span style="font-size:6.5pt;color:#6A8759;">支持数字<span>,</span>大小写字母和标点符号帅到爆炸<span>"</span></span><span
  style="font-size:6.5pt;color:#CC7832;">, </span><span style="font-size:6.5pt;color:#9876AA;">rule</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><span
  style="font-size:6.5pt;color:#6A8759;">"^[A-Za-z0-9.,;:'</span><span
  style="font-size:6.5pt;color:#CC7832;">\"</span><span style="font-size:6.5pt;color:#6A8759;">]+$"</span><span
  style="font-size:6.5pt;color:#CC7832;">, </span><span style="font-size:6.5pt;color:#9876AA;">isPassed</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: </span><b><span style="font-size:6.5pt;color:#CC7832;">false</span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">}]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }

&nbsp;&nbsp;&nbsp; }</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">computed</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: {}</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">watch</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: {}</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#9876AA;">methods</span><span
  style="font-size:6.5pt;color:#A9B7C6;">: {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#FFC66D;">clickBtn</span><span
  style="font-size:6.5pt;color:#A9B7C6;">() {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b><span style="font-size:6.5pt;color:#CC7832;">this</span></b><span
  style="font-size:6.5pt;color:#A9B7C6;">.</span><span style="font-size:6.5pt;color:#9876AA;">currentValue </span><span
  style="font-size:6.5pt;color:#A9B7C6;">= </span><span style="font-size:6.5pt;color:#6A8759;">''

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#A9B7C6;">}

&nbsp;&nbsp;&nbsp; }</span><span style="font-size:6.5pt;color:#CC7832;">,

&nbsp;&nbsp;&nbsp; </span><span style="font-size:6.5pt;color:#FFC66D;">mounted</span><span
  style="font-size:6.5pt;color:#A9B7C6;">() {

&nbsp;&nbsp;&nbsp; }

&nbsp; } </span><span style="font-size:6.5pt;color:#E8BF6A;">&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;</span><span style="font-size:6.5pt;color:#A9B7C6;"></span></pre>
</pre>
    <h2>CheckStrength Attributes</h2>
    <AttributesTable :tableData="tableAttributes"></AttributesTable>
    <h2>CheckStrength Events</h2>
    <EventsOrMethodsTable :tableData="tableEvents"></EventsOrMethodsTable>
    <h2>CheckStrength Methods</h2>
    <EventsOrMethodsTable :tableData="tableMethods"></EventsOrMethodsTable>
  </div>
</template>

<script>
  import checkStrength from '../../../safe-components/src/packages/checkStrength/checkStrength'
  import AttributesTable from '../../components/attributesTable'
  import EventsOrMethodsTable from '../../components/eventsOrMethodsTable'

  export default {
    name: 'CheckStrengthDemo',
    components: {
      checkStrength,
      AttributesTable,
      EventsOrMethodsTable
    },
    data() {
      return {
        currentValue: 'dsafs',
        currentValue2: '123134daa',
        rules: [
          {message: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false},
          {message: "支持数字,大小写字母和标点符号帅到爆炸", rule: "^[A-Za-z0-9.,;:'\"]+$", isPassed: false}],
        /**
         *  正则校验框 属性描述
         */
        tableAttributes: [
          {
            attributes: 'v-model',
            explain: '双向绑定输入框值',
            type: 'String',
            options: '',
            defaultValue: ''
          },
          {
            attributes: 'rules',
            explain: '校验框规则，对象数组集，如[{message: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false}]',
            type: 'Array',
            options: '--',
            defaultValue: '[{message: "长度为6~14个字符", rule: "^.{6,14}$"},'
            + '{message: "不允许有空格", rule: "^[^\\s]+$"},'
            + '{message: "支持数字,大小写字母和标点符号", rule: "^[A-Za-z0-9.,;:\'\"]+$"}]'
          }, {
            attributes: 'showIcon',
            explain: '是否显示"眼睛"图标',
            type: 'Boolean',
            options: 'true/false',
            defaultValue: 'true'
          },
          {
            attributes: 'size',
            explain: '校验框尺寸',
            type: 'String',
            options: 'mini/small/medium',
            defaultValue: 'medium'
          }, {
            attributes: 'width',
            explain: '校验框宽度，支持px 或 % 百分比设置，如：300px / 60%',
            type: 'String',
            options: '',
            defaultValue: '100%'
          }, {
            attributes: 'clearable',
            explain: '是否显示清空icon',
            type: 'Boolean',
            options: 'true/false',
            defaultValue: 'false'
          }, {
            attributes: 'autocomplete',
            explain: '自动完成，根据用户输入值进行搜索和过滤，让用户快速找到并从预设值列表中选择',
            type: 'String',
            options: 'off/on',
            defaultValue: 'off'
          }, {
            attributes: 'maxlength',
            explain: '校验框最大可输入字符长度',
            type: 'Number',
            options: '',
            defaultValue: '100'
          }],
        tableEvents: [
          {
            eventName: 'success',
            explain: '当输入内容满足规则时触发',
            attributes: '--',
          },
          {
            eventName: 'fail',
            explain: '当输入内容未满足规则时触发',
            attributes: '--',
          }],
        tableMethods: [{
          eventName: 'isSuccess',
          explain: '返回输入内容是否满足，成功返回true，失败返回false',
          attributes: '--',
        }]
      }
    },
    methods: {
      clickBtn() {
        this.currentValue = ''
      }
    },
    mounted() {
    }
  }
</script>

<style>
</style>
