/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import getAverageMonthlySales from '../utils';

const Chart = (data) => {
  let retailSales;
  let wholesaleSales;
  if (data.data) {
    retailSales = getAverageMonthlySales(data.data.sales, 'retail');
    wholesaleSales = getAverageMonthlySales(data.data.sales, 'wholesale');
  }

  const options = {
    xAxis: {
      type: 'datetime',
    },
    chart: {
      type: 'line',
      height: 550,

    },
    title: {
      text: 'Retail Sales',
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(2020, 0, 1),
        pointIntervalUnit: 'month',
      },
    },
    series: [
      {
        data: retailSales,
        name: 'Retail Sales',
      },

      {
        data: wholesaleSales,
        name: 'Wholesale Sales',

      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
