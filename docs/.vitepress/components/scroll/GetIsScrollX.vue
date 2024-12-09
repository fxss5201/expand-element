<template>
  <div class="scroll-box" ref="noScroll">
    <div style="width: 100px;background-color: aqua;">noScroll</div>
  </div>
  <div>
    <button class="btn" @click="noScrollFn">获取noScroll</button>
    <pre class="pre">{{ noScrollCode }}</pre>
  </div>
  <div class="scroll-box" ref="scroll">
    <div style="width: 1000px;background-color: aqua;">Scroll</div>
  </div>
  <div>
    <button class="btn" @click="scrollFn">获取Scroll</button>
    <pre class="pre">{{ scrollCode }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { getIsScrollX } from 'expand-element'
import { getIsScrollX } from '../../../../lib/main'

const noScroll = ref<HTMLElement | null>(null)
const scroll = ref<HTMLElement | null>(null)
const noScrollCode = ref('')
const scrollCode = ref('')
const noScrollFn = () => {
  if (noScroll.value) {
    const res = getIsScrollX(noScroll.value)
    noScrollCode.value = JSON.stringify(res, null, 2)
  }
}
const scrollFn = () => {
  if (scroll.value) {
    const res = getIsScrollX(scroll.value)
    scrollCode.value = JSON.stringify(res, null, 2)
  }
}
</script>

<style scoped>
.scroll-box {
  height: 88px;
  overflow: auto;
  background-color: #ccc;
  margin-bottom: 15px;
}
</style>
