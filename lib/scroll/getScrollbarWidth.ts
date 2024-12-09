export type DirectionType = 'horizontal' | 'vertical'

/**
 * **获取浏览器滚动条的宽度**
 * 
 * <Badge type="tip" text="version: v0.0.3+" />
 * 
 * <script setup>
 *   import GetScrollbarWidth from './../../.vitepress/components/scroll/GetScrollbarWidth.vue'
 * </script>
 * 
 * ## example
 * 
 * <GetScrollbarWidth></GetScrollbarWidth>
 * 
 * ::: details
 * <<< ./../../.vitepress/components/scroll/GetScrollbarWidth.vue
 * :::
 * 
 * @group scroll
 *
 * @param direction 滚动条方向，可选值为 `horizontal` 和 `vertical`，默认为 `horizontal`，当获取在 css 中通过 `::-webkit-scrollbar` 全局设置时，只需要传 `direction` 参数即可。
 * @param el 要获取滚动条宽度的元素，默认为 `document.body`，当获取在 css 中 `scrollbar-width: thin;` 或者通过 `::-webkit-scrollbar` 局部设置时需要传入 。
 * @param css 是否是在 css 中通过 `::-webkit-scrollbar` 局部设置滚动条宽度，默认为 `false`，此处暂时会直接在传入的 el 上强制出现滚动条，计算宽度，再还原，有可能出现抖动现象。
 * @returns 滚动条宽度，单位为像素。
 * 
 */
export function getScrollbarWidth (direction: DirectionType = 'horizontal', el?: HTMLElement, css: boolean = false): number {
  let scrollbarWidthNumber = 0
  let parentEl = document.body
  let scrollbarWidth = 'auto'
  let overflowY = 'auto'
  let overflowX = 'auto'
  if (el) {
    parentEl = el
    const style = window.getComputedStyle(el, null)
    scrollbarWidth = style.scrollbarWidth || 'auto'
    if (css) {
      overflowY = style.overflowY || 'auto'
      overflowX = style.overflowX || 'auto'
    }
  }

  if (!css) {
    const div = document.createElement('div')
  
    if (direction === 'horizontal') {
      div.style.overflowY = 'scroll'
    } else {
      div.style.overflowX = 'scroll'
    }
    div.style.scrollbarWidth = scrollbarWidth
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.position = 'absolute'
    div.style.top = '-9999px'
    
    parentEl.appendChild(div)
    if (direction === 'horizontal') {
      scrollbarWidthNumber = div.offsetWidth - div.clientWidth
    } else {
      scrollbarWidthNumber = div.offsetHeight - div.clientHeight
    }
    
    parentEl.removeChild(div)
  } else {
    if (direction === 'horizontal') {
      parentEl.style.overflowY = 'scroll'
      scrollbarWidthNumber = parentEl.offsetWidth - parentEl.clientWidth
      parentEl.style.overflowY = overflowY
    } else {
      parentEl.style.overflowX = 'scroll'
      scrollbarWidthNumber = parentEl.offsetHeight - parentEl.clientHeight
      parentEl.style.overflowX = overflowX
    }
  }
  
  return scrollbarWidthNumber
}