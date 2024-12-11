[expand-element](../globals.md) / getScrollbarWidth

# Function: getScrollbarWidth()

```ts
function getScrollbarWidth(
   direction: DirectionType, 
   el?: HTMLElement, 
   css?: boolean): number
```

**获取浏览器滚动条的宽度**

<Badge type="tip" text="version: v0.0.3+" />

<script setup>
  import GetScrollbarWidth from './../../.vitepress/components/scroll/GetScrollbarWidth.vue'
</script>

## example

<GetScrollbarWidth></GetScrollbarWidth>

::: details
<<< ./../../.vitepress/components/scroll/GetScrollbarWidth.vue
:::

## Parameters

### direction

[`DirectionType`](../type-aliases/DirectionType.md) = `'horizontal'`

滚动条方向，可选值为 `horizontal` 和 `vertical`，默认为 `horizontal`，当获取在 css 中通过 `::-webkit-scrollbar` 全局设置时，只需要传 `direction` 参数即可。

### el?

`HTMLElement`

要获取滚动条宽度的元素，默认为 `document.body`，当获取在 css 中 `scrollbar-width: thin;` 或者通过 `::-webkit-scrollbar` 局部设置时需要传入 。

### css?

`boolean` = `false`

是否是在 css 中通过 `::-webkit-scrollbar` 局部设置滚动条宽度，默认为 `false`，此处暂时会直接在传入的 el 上强制出现滚动条，计算宽度，再还原，有可能出现抖动现象。

## Returns

`number`

滚动条宽度，单位为像素，非浏览器环境时，返回 17，单位为像素。

## Defined in

[scroll/getScrollbarWidth.ts:31](https://github.com/fxss5201/expand-element/blob/main/lib/scroll/getScrollbarWidth.ts#L31)
