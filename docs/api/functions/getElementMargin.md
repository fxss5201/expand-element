[expand-element](../globals.md) / getElementMargin

# Function: getElementMargin()

```ts
function getElementMargin(el: HTMLElement): {
  bottom: number;
  left: number;
  right: number;
  top: number;
}
```

**获取 Element 的外边距 margin**

<Badge type="tip" text="version: v0.0.2+" />

<script setup>
  import GetElementMargin from './../../.vitepress/components/layout/GetElementMargin.vue'
</script>

## example

<GetElementMargin></GetElementMargin>

::: details
<<< ./../../.vitepress/components/layout/GetElementMargin.vue
:::

## Parameters

### el

`HTMLElement`

要获取外边距的元素

## Returns

```ts
{
  bottom: number;
  left: number;
  right: number;
  top: number;
}
```

包含元素四个方向外边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值。

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

[getElementLayout.ts:61](https://github.com/fxss5201/expand-element/blob/main/lib/layout/getElementLayout.ts#L61)
