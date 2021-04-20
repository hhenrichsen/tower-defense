export function isWithinThreshold(
  a: number,
  b: number,
  threshold: number
): boolean {
  return Math.abs(a - b) <= threshold;
}
