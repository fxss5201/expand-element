<template>
  <div class="element-padding" ref="elementPadding">GetElementPadding</div>
  <button class="btn" @click="getFn">获取</button>
  <pre class="pre">{{ code }}</pre>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { getElementPadding } from 'expand-element'
import { getElementPadding } from './../../../../lib/main'

const elementPadding = ref<HTMLElement | null>(null)
const code = ref('')
const getFn = () => {
  if (elementPadding.value) {
    const res = getElementPadding(elementPadding.value)
    code.value = JSON.stringify(res, null, 2)
  }
}
</script>

<style scoped>
.element-padding {
  padding: 10px 5px 15px 0;
}
</style>
