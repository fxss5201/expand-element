import { isString } from '@vue/shared'

/**
 * **判断是 HTMLElement**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 *
 * @param el 要判断的值。
 * @returns 值为布尔值。
 * 
 */
export const isHTMLElement = (el: unknown): el is HTMLElement => {
  if (typeof HTMLElement === 'undefined') return false
  return el instanceof HTMLElement
}

/**
 * **判断是否是数字字符串**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 *
 * @param val 要判断的值。
 * @returns 值为布尔值。
 * 
 */
export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false
  }
  return !Number.isNaN(Number(val))
}
