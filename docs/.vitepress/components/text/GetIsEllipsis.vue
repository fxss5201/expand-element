<template>
  <div class="ellipsis-box" ref="noEllipsis">no-ellipsis-box</div>
  <div>
    <button class="btn" @click="noEllipsisFn">获取noEllipsis</button>
    <pre class="pre">{{ noEllipsisCode }}</pre>
  </div>
  <div class="ellipsis-box" ref="ellipsis">Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis Ellipsis</div>
  <div>
    <button class="btn" @click="ellipsisFn">获取Ellipsis</button>
    <pre class="pre">{{ ellipsisCode }}</pre>
  </div>
  <div class="ellipsis-box-line2" ref="ellipsisLine2">ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2 ellipsisLine2</div>
  <div>
    <button class="btn" @click="ellipsisLine2Fn">获取EllipsisLine2</button>
    <pre class="pre">{{ ellipsisLine2Code }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { getIsEllipsis } from 'expand-element'
import { getIsEllipsis } from '../../../../lib/main'

const noEllipsis = ref<HTMLElement | null>(null)
const ellipsis = ref<HTMLElement | null>(null)
const ellipsisLine2 = ref<HTMLElement | null>(null)
const noEllipsisCode = ref('')
const ellipsisCode = ref('')
const ellipsisLine2Code = ref('')
const noEllipsisFn = () => {
  if (noEllipsis.value) {
    const res = getIsEllipsis(noEllipsis.value)
    noEllipsisCode.value = JSON.stringify(res, null, 2)
  }
}
const ellipsisFn = () => {
  if (ellipsis.value) {
    const res = getIsEllipsis(ellipsis.value)
    ellipsisCode.value = JSON.stringify(res, null, 2)
  }
}
const ellipsisLine2Fn = () => {
  if (ellipsisLine2.value) {
    const res = getIsEllipsis(ellipsisLine2.value)
    ellipsisLine2Code.value = JSON.stringify(res, null, 2)
  }
}
</script>

<style scoped>
.ellipsis-box {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 15px;
}
.ellipsis-box-line2 {
  word-break: break-all;
  margin-bottom: 15px;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
