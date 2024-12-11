import { isClientFlag } from './../browser'
import { isHTMLElement } from './../types'

/**
 * **获取元素的 横纵向 内容是否超出，应该有滚动条 **
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * <script setup>
 *   import GetIsScroll from './../../.vitepress/components/scroll/GetIsScroll.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetIsScroll></GetIsScroll>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/scroll/GetIsScroll.vue
 * :::
 * 
 * @group scroll
 *
 * @param el 要获取的元素。
 * @returns 包含元素是否超出的对象，包含 `x` 和 `y` 属性，值为布尔值，非浏览器环境时，返回 `{ x: false, y: false }`。
 * 
 */
export function getIsScroll(el: HTMLElement) {
  if (!isClientFlag()) {
    return {
      x: false,
      y: false
    }
  }

  if (!isHTMLElement(el)) {
    throw new Error('The el is not a HTMLElement')
  }

  const { scrollWidth, clientWidth, scrollHeight, clientHeight } = el
  return {
    x: scrollWidth > clientWidth,
    y: scrollHeight > clientHeight
  }
}

/**
 * **单独获取元素的 横向 内容是否超出，应该有滚动条 **
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * <script setup>
 *   import GetIsScrollX from './../../.vitepress/components/scroll/GetIsScrollX.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetIsScrollX></GetIsScrollX>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/scroll/GetIsScrollX.vue
 * :::
 * 
 * @group scroll
 *
 * @param el 要获取的元素。
 * @returns 元素内容 横向 是否超出，值为布尔值，非浏览器环境时，返回 `false`。
 * 
 */
export function getIsScrollX(el: HTMLElement) {
  if (!isClientFlag()) return false

  if (!isHTMLElement(el)) {
    throw new Error('The el is not a HTMLElement')
  }

  const { scrollWidth, clientWidth } = el
  return scrollWidth > clientWidth
}

/**
 * **单独获取元素的 纵向 内容是否超出，应该有滚动条 **
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * <script setup>
 *   import GetIsScrollY from './../../.vitepress/components/scroll/GetIsScrollY.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetIsScrollY></GetIsScrollY>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/scroll/GetIsScrollY.vue
 * :::
 * 
 * @group scroll
 *
 * @param el 要获取的元素。
 * @returns 元素内容 纵向 是否超出，值为布尔值，非浏览器环境时，返回 `false`。
 * 
 */
export function getIsScrollY(el: HTMLElement) {
  if (!isClientFlag()) return false

  if (!isHTMLElement(el)) {
    throw new Error('The el is not a HTMLElement')
  }

  const { scrollHeight, clientHeight } = el
  return scrollHeight > clientHeight
}