[expand-element](../globals.md) / getIsScrollX

# Function: getIsScrollX()

```ts
function getIsScrollX(el: HTMLElement): boolean
```

**单独获取元素的 横向 内容是否超出，应该有滚动条 **

<Badge type="tip" text="version: v0.0.4+" />

<script setup>
  import GetIsScrollX from './../../.vitepress/components/scroll/GetIsScrollX.vue'
</script>

## example

<GetIsScrollX></GetIsScrollX>

::: details
<<< ./../../.vitepress/components/scroll/GetIsScrollX.vue
:::

## Parameters

### el

`HTMLElement`

要获取的元素。

## Returns

`boolean`

元素内容 横向 是否超出，值为布尔值，非浏览器环境时，返回 `false`。

## Defined in

[scroll/getIsScroll.ts:69](https://github.com/fxss5201/expand-element/blob/main/lib/scroll/getIsScroll.ts#L69)
