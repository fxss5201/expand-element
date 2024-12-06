<template>
  <div class="element-margin" ref="elementMargin">GetElementMargin</div>
  <button class="btn" @click="getFn">获取</button>
  <pre class="pre">{{ code }}</pre>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { getElementMargin } from 'expand-element'
import { getElementMargin } from './../../../../lib/main'

const elementMargin = ref<HTMLElement | null>(null)
const code = ref('')
const getFn = () => {
  if (elementMargin.value) {
    const res = getElementMargin(elementMargin.value)
    code.value = JSON.stringify(res, null, 2)
  }
}
</script>

<style scoped>
.element-margin {
  margin: 10px 5px 15px 0;
}
</style>
