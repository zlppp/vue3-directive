<template>
  <div class="home">
    <h2>vue3自定义指令</h2>
    <div>
      <p>使用方式：</p>
      <p>https://www.npmjs.com/package/vue3-directive-npm</p>
      <p>npm i --save vue3-directive-npm</p>
      <p>npm i --save ant-design-vue@next</p>
      
    </div>
    <!-- 复制文本 -->
    <h3 class="title">v-copy 复制文本指令</h3>
    <p v-copy="'复制的文本'">点击复制文本</p>

    <!-- v-waterMark 自定义图片水印 -->
    <h3 class="title" id="waterMark">v-waterMark 自定义图片水印</h3>
    <img v-waterMark="'我是水印'" src="@/assets/example.jpeg" height="300" width="400"/>


    <!-- 表格 -->
    <h3 class="title">v-table-scroll 表格滑动<span class="tips">(*只适用ant-design-vue表格)</span></h3>
    <p class="p">示例：</p>
    <div style="width: 800px;">
      <a-table v-table-scroll :dataSource="dataSource" :columns="columns" :scroll="{ x: 1200, y: 300 }"/>
    </div>
    
    <h3 class="title">v-click-outside 点击元素外部区域隐藏组件</h3>
    <a-button @click="showCard">显示元素{{isShowCard}}</a-button>
    <div>
      <a-card v-click-outside v-show="isShowCard" title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>

    <!-- 滚动到指定区域 -->
    <h3 class="title">v-scroll 滚动到指定元素</h3>
    <div>
      <a-button v-scroll-to="0">跳转到顶部</a-button>
      <a-button class="margin-left" v-scroll-to="'waterMark'">滚动到id为waterMark的元素</a-button>
    </div>

    <!-- 模态框，锁定下层不能滚动 -->
    <h3 class="title">v-scoll-lock 模态框锁定下层元素</h3>
    <a-button @click="isShow = true">打开模态框</a-button>
    <div class="modal-flex" v-show="isShow" v-scroll-lock>
      <a-button @click="isShow = false">关闭</a-button>
    </div>
    <!-- <a-modal v-model:visible="isShow" title="Basic Modal">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal> -->

    <!-- v-debounce 文本框防抖 -->
    <h3 class="title">文本框防抖,delay默认500</h3>
    <a-input v-debounce="{fn: inputKeyUp, delay: 800}" v-model="value" style="width: 200px;"/>
    {{value}}
    <h3 class="title">v-lazy-load 图片懒加载</h3>
    <img v-lazy-load data-src="@/assets/lazy.png" alt="">

    <h3>输入内容转货币</h3>
    <p>¥<span v-money="money"> {{money}}</span></p>
    <input type="text" v-model="money"  />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
const columns = [
  { title: '姓名', dataIndex: 'name',key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address'},
  { title: '住址', dataIndex: 'address', key: 'address'},
  { title: '住址', dataIndex: 'address', key: 'address'},
  { title: '住址', dataIndex: 'address', key: 'address'},
  { title: '住址', dataIndex: 'address', key: 'address'}
]
const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
  { key: '2', name: '胡彦斌', age: 23, address: '西湖区湖底公园1号'},
  { key: '3', name: '胡彦斌', age: 23, address: '西湖区湖底公园1号'}
]
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    // 给data添加类型注解
    interface DataProps {
      columns: any[];
      dataSource: any[];
      value: string;
      isShow: Boolean;
      isShowCard: Boolean,
      money: string,
      inputKeyUp: () => void,
      inputVal: string | number
    }

    const data:DataProps = reactive({
      columns,
      dataSource,
      value: '',
      isShow: false,
      isShowCard: true,
      money: '',
      inputVal: '',
      inputKeyUp: () => {
        alert(data.value)
        console.log(data.value, 'keyup')
        if (data.value) {
          // 请求
        }
      },
      showCard: () => {
        data.isShowCard = true
      }
    })
    const refData = toRefs(data)

    return {
      ...refData
    }
    // reactive() 和 Ref()都是生成响应式对象
  }
});
</script>

<style scoped>
.home {
  padding: 40px;
  text-align: left;
}
.title {
  margin-top: 60px;
}
.title::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 8px;
  background:rgba(0,0,0,.8);
  border-radius: 50%;
  vertical-align: middle;
}
.p {
  line-height: 2;
}
.tips {
  color: #fc1944;
}
.margin-left {
  margin-left: 15px;
}
.modal-flex {
  z-index: 9999;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.7);
}
</style>