[expand-element](../globals.md) / getElementPadding

# Function: getElementPadding()

```ts
function getElementPadding(el: HTMLElement): {
  bottom: number;
  left: number;
  right: number;
  top: number;
}
```

**获取 Element 的内边距 padding**

<Badge type="tip" text="version: v0.0.1+" />

<script setup>
  import GetElementPadding from './../../.vitepress/components/layout/GetElementPadding.vue'
</script>

## example

<GetElementPadding></GetElementPadding>

::: details
<<< ./../../.vitepress/components/layout/GetElementPadding.vue
:::

## Parameters

### el

`HTMLElement`

要获取内边距的元素。

## Returns

```ts
{
  bottom: number;
  left: number;
  right: number;
  top: number;
}
```

包含元素四个方向内边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值，非浏览器环境时，返回 `{ left: 0, right: 0, top: 0, bottom: 0 }`。

### bottom

```ts
bottom: number = 0;
```

### left

```ts
left: number = 0;
```

### right

```ts
right: number = 0;
```

### top

```ts
top: number = 0;
```

## Defined in

[layout/getElementLayout.ts:27](https://github.com/fxss5201/expand-element/blob/main/lib/layout/getElementLayout.ts#L27)
