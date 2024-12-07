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

包含元素四个方向内边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值。

### bottom

```ts
bottom: number;
```

### left

```ts
left: number;
```

### right

```ts
right: number;
```

### top

```ts
top: number;
```

## Defined in

[layout/getElementLayout.ts:24](https://github.com/fxss5201/expand-element/blob/main/lib/layout/getElementLayout.ts#L24)
