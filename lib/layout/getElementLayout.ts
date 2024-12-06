/**
 * **获取 Element 的内边距 padding**
 * 
 * <Badge type="tip" text="version: v0.0.1+" />
 * 
 * <script setup>
 *   import GetElementPadding from './../../.vitepress/components/layout/GetElementPadding.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetElementPadding></GetElementPadding>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/layout/GetElementPadding.vue
 * :::
 * 
 * @group layout
 *
 * @param el 要获取内边距的元素
 * @returns 包含元素四个方向内边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值。
 * 
 */
export function getElementPadding (el: HTMLElement) {
  const style = window.getComputedStyle(el, null)
  const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0
  const paddingRight = Number.parseInt(style.paddingRight, 10) || 0
  const paddingTop = Number.parseInt(style.paddingTop, 10) || 0
  const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0
  return {
    left: paddingLeft,
    right: paddingRight,
    top: paddingTop,
    bottom: paddingBottom,
  }
}