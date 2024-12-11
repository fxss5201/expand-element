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

要获取外边距的元素。

## Returns

```ts
{
  bottom: number;
  left: number;
  right: number;
  top: number;
}
```

包含元素四个方向外边距的对象，包含 `left`, `right`, `top`, `bottom` 属性，值为像素值，非浏览器环境时，返回 `{ left: 0, right: 0, top: 0, bottom: 0 }`。

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

[layout/getElementLayout.ts:77](https://github.com/fxss5201/expand-element/blob/main/lib/layout/getElementLayout.ts#L77)
