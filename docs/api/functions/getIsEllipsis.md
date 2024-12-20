[expand-element](../globals.md) / getIsEllipsis

# Function: getIsEllipsis()

```ts
function getIsEllipsis(el: HTMLElement): boolean
```

**获取元素的内容是否有显示... **

<Badge type="tip" text="version: v0.0.4+" />

<script setup>
  import GetIsEllipsis from './../../.vitepress/components/text/GetIsEllipsis.vue'
</script>

## example

<GetIsEllipsis></GetIsEllipsis>

::: details
<<< ./../../.vitepress/components/text/GetIsEllipsis.vue
:::

## Parameters

### el

`HTMLElement`

要获取的元素。

## Returns

`boolean`

元素内容是否有显示...，值为布尔值，非浏览器环境时，返回 `false`。

## Defined in

[text/getIsEllipsis.ts:32](https://github.com/fxss5201/expand-element/blob/main/lib/text/getIsEllipsis.ts#L32)
