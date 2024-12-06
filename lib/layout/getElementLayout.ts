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
  const left = Number.parseInt(style.paddingLeft, 10) || 0
  const right = Number.parseInt(style.paddingRight, 10) || 0
  const top = Number.parseInt(style.paddingTop, 10) || 0
  const bottom = Number.parseInt(style.paddingBottom, 10) || 0
  return {
    left,
    right,
    top,
    bottom,
  }
}

/**
 * **获取 Element 的外边距 margin**
 * 
 * <Badge type="tip" text="version: v0.0.2+" />
 * 
 * <script setup>
 *   import GetElementMargin from './../../.vitepress/components/layout/GetElementMargin.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetElementMargin></GetElementMargin>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/layout/GetElementMargin.vue
 * :::
 * 
 * @group layout
 *
 * @param el 要获取外边距的元素
 * @returns 包含元素四个方向外边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值。
 * 
 */
export function getElementMargin (el: HTMLElement) {
  const style = window.getComputedStyle(el, null)
  const left = Number.parseInt(style.marginLeft, 10) || 0
  const right = Number.parseInt(style.marginRight, 10) || 0
  const top = Number.parseInt(style.marginTop, 10) || 0
  const bottom = Number.parseInt(style.marginBottom, 10) || 0
  return {
    left,
    right,
    top,
    bottom,
  }
}
