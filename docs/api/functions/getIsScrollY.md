[expand-element](../globals.md) / getIsScrollY

# Function: getIsScrollY()

```ts
function getIsScrollY(el: HTMLElement): boolean
```

**单独获取元素的 纵向 内容是否超出，应该有滚动条 **

<Badge type="tip" text="version: v0.0.4+" />

<script setup>
  import GetIsScrollY from './../../.vitepress/components/scroll/GetIsScrollY.vue'
</script>

## example

<GetIsScrollY></GetIsScrollY>

::: details
<<< ./../../.vitepress/components/scroll/GetIsScrollY.vue
:::

## Parameters

### el

`HTMLElement`

要获取的元素。

## Returns

`boolean`

元素内容 纵向 是否超出，值为布尔值，非浏览器环境时，返回 `false`。

## Defined in

[scroll/getIsScroll.ts:103](https://github.com/fxss5201/expand-element/blob/main/lib/scroll/getIsScroll.ts#L103)
