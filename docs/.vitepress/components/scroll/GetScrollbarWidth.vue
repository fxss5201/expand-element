<template>
  <button class="btn" @click="getFnHorizontal">获取 浏览器默认 水平方向滚动条宽度</button>
  <p>水平方向滚动条宽度（右侧滚动条宽度）：{{ codeHorizontal }}</p>
  <button class="btn" @click="getFnVertical">获取 浏览器默认 垂直方向滚动条宽度</button>
  <p>垂直方向滚动条宽度（底部滚动条高度）：{{ codeVertical }}</p>
  
  <div class="thin-scrollbar" ref="thinScrollbar">
    scrollbar-width: thin;
    <br />
    scrollbar-width: thin;
    <br />
    scrollbar-width: thin;
    <br />
    scrollbar-width: thin;
  </div>
  <button class="btn" @click="getFnHorizontalThin">获取 thin滚动条 水平方向滚动条宽度</button>
  <p>水平方向滚动条宽度（右侧滚动条宽度）：{{ codeHorizontalThin }}</p>
  <button class="btn" @click="getFnVerticalThin">获取 thin滚动条 垂直方向滚动条宽度</button>
  <p>垂直方向滚动条宽度（底部滚动条高度）：{{ codeVerticalThin }}</p>

  <div class="custom-scrollbar" ref="customScrollbar">
    自定义滚动条
    <br />
    自定义滚动条
    <br />
    自定义滚动条
    <br />
    自定义滚动条
  </div>
  <button class="btn" @click="getFnHorizontalCustom">获取 自定义滚动条 水平方向滚动条宽度</button>
  <p>水平方向滚动条宽度（右侧滚动条宽度）：{{ codeHorizontalCustom }}</p>
  <button class="btn" @click="getFnVerticalCustom">获取 自定义滚动条 垂直方向滚动条宽度</button>
  <p>垂直方向滚动条宽度（底部滚动条高度）：{{ codeVerticalCustom }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { getScrollbarWidth } from 'expand-element'
import { getScrollbarWidth } from './../../../../lib/main'

const codeHorizontal = ref<number>()
const getFnHorizontal = () => {
  codeHorizontal.value = getScrollbarWidth()
}

const codeVertical = ref<number>()
const getFnVertical = () => {
  codeVertical.value = getScrollbarWidth('vertical')
}

const thinScrollbar = ref<HTMLElement | null>()
const codeHorizontalThin = ref<number>()
const getFnHorizontalThin = () => {
  codeHorizontalThin.value = getScrollbarWidth('horizontal', thinScrollbar.value!)
}

const codeVerticalThin = ref<number>()
const getFnVerticalThin = () => {
  codeVerticalThin.value = getScrollbarWidth('vertical', thinScrollbar.value!)
}

const customScrollbar = ref<HTMLElement | null>()
const codeHorizontalCustom = ref<number>()
const getFnHorizontalCustom = () => {
  codeHorizontalCustom.value = getScrollbarWidth('horizontal', customScrollbar.value!, true)
}

const codeVerticalCustom = ref<number>()
const getFnVerticalCustom = () => {
  codeVerticalCustom.value = getScrollbarWidth('vertical', customScrollbar.value!, true)
}
</script>

<style scoped>
.thin-scrollbar {
  scrollbar-width: thin;
  height: 50px;
  overflow-y: auto;
}


.custom-scrollbar {
  height: 50px;
  overflow-y: auto;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px;
  background-color: #fff;
}
.custom-scrollbar::-webkit-scrollbar-track-piece {
  background-color: #efefef;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px #ccc;
}
</style>
