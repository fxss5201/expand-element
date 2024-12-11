[expand-element](../globals.md) / getIsScroll

# Function: getIsScroll()

```ts
function getIsScroll(el: HTMLElement): {
  x: boolean;
  y: boolean;
}
```

**获取元素的 横纵向 内容是否超出，应该有滚动条 **

<Badge type="tip" text="version: v0.0.4+" />

<script setup>
  import GetIsScroll from './../../.vitepress/components/scroll/GetIsScroll.vue'
</script>

## example

<GetIsScroll></GetIsScroll>

::: details
<<< ./../../.vitepress/components/scroll/GetIsScroll.vue
:::

## Parameters

### el

`HTMLElement`

要获取的元素。

## Returns

```ts
{
  x: boolean;
  y: boolean;
}
```

包含元素是否超出的对象，包含 `x` 和 `y` 属性，值为布尔值，非浏览器环境时，返回 `{ x: false, y: false }`。

### x

```ts
x: boolean = false;
```

### y

```ts
y: boolean = false;
```

## Defined in

[scroll/getIsScroll.ts:27](https://github.com/fxss5201/expand-element/blob/main/lib/scroll/getIsScroll.ts#L27)
