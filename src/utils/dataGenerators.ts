/**
 * Генерирует случайное число, следующее нормальному распределению.
 *
 * @param mean - Среднее значение нормального распределения.
 * @param stdDev - Стандартное отклонение нормального распределения.
 * @returns Случайное число, следующее нормальному распределению.
 */
export function generateNormalRandom(mean: number, stdDev: number): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return mean + z * stdDev;
}

/**
 * Генерирует массив чисел, следующих нормальному распределению.
 *
 * @param count - Количество генерируемых точек данных.
 * @param mean - Среднее значение нормального распределения.
 * @param stdDev - Стандартное отклонение нормального распределения.
 * @returns Массив чисел, следующих нормальному распределению, каждое значение округлено до одного знака после запятой и не меньше 0.
 */
export function generateNormalDistributionData(
  count: number,
  mean: number,
  stdDev: number
): number[] {
  const data: number[] = [];
  for (let i = 0; i < count; i++) {
    const value = generateNormalRandom(mean, stdDev);
    data.push(Math.max(0, parseFloat(value.toFixed(1))));
  }
  return data;
}
