// @ts-check

/** @arg {number} num */
export const isEven = (num) => num % 2 === 0;

/**
 * @arg {number} num1
 * @arg {number} num2
 * @return {number}
 */
export const findGcd = (num1, num2) => {
  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) return findGcd(num1 % num2, num2);
    return findGcd(num1, num2 % num1);
  }
  return num1 + num2;
};

/**
 * @arg {number} firstElement
 * @arg {number} step
 * @arg {number} length
 */
export const genProgression = (firstElement, step, length) =>
  Array.from({ length }, (_, i) => firstElement + step * i);
