/**
 * **判断是否在浏览器内标识**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 *
 * @returns 值为布尔值。
 * 
 */
export function isClientFlag() {
  return !!(typeof window !== 'undefined' && window.document)
}
