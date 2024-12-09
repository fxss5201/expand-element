import { getElementPadding } from "../layout"

function isGreaterThan(a: number, b: number, epsilon = 0.03) {
  return a - b > epsilon
}

/**
 * **获取元素的内容是否有显示... **
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * <script setup>
 *   import GetIsEllipsis from './../../.vitepress/components/text/GetIsEllipsis.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetIsEllipsis></GetIsEllipsis>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/text/GetIsEllipsis.vue
 * :::
 * 
 * @group text
 *
 * @param el 要获取的元素。
 * @returns 元素内容是否有显示...，值为布尔值。
 * 
 */
export function getIsEllipsis(el: HTMLElement) {
  const range = document.createRange()
  range.setStart(el, 0)
  range.setEnd(el, el.childNodes.length)

  const { width: rangeWidth, height: rangeHeight } = range.getBoundingClientRect()
  const { width: elementWidth, height: elementHeight } = el.getBoundingClientRect()
  const { top, left, right, bottom } = getElementPadding(el)

  const horizontalPadding = left + right
  const verticalPadding = top + bottom

  if (
    isGreaterThan(rangeWidth + horizontalPadding, elementWidth) ||
    isGreaterThan(rangeHeight + verticalPadding, elementHeight) ||
    isGreaterThan(el.scrollWidth, elementWidth)
  ) {
    return true
  } else {
    return false
  }
}