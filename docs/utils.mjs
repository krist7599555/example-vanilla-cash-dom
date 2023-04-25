/**
 * range from [s, t)
 * @param {number} n
 * @returns number[]
 */
export const range = (s, t) =>
  Array.from({ length: t - s }).map((_, i) => s + i);

/**
 * zip
 * @template A
 * @template B
 * @param {A[]} xs
 * @param {B[]} ys
 * @returns {[A, B][]}
 */
export const zip = (xs, ys) =>
  Array.from({ length: Math.min(xs.length, ys.length) }).map((_, i) => [
    xs[i],
    ys[i],
  ]);
