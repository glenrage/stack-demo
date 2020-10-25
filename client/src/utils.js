/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
export default function getAverageMonthlySales(arr, type) {
  const salesType = type === 'retail' ? 'retailSales' : 'wholesaleSales';
  const result = [];
  let averages;
  let total = 0;
  let startMonth = 1;
  const monthTracker = num => (num < 10 ? '2017-0' : '2017-');

  while (startMonth !== 13) {
    averages = arr.filter(week =>
      week.weekEnding.includes(`${monthTracker(startMonth)}${startMonth}`));
    total = Math.floor(averages.reduce((a, b) => a + b[salesType], 0) / averages.length);
    result.push(total);
    startMonth++;
  }

  return result;
}
