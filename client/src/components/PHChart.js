import React from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default ({ ph }) => {
  const options = {
    theme: 'light1', // "light1", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: '수소이온농도',
    },
    axisY: {
      title: '염분',
      includeZero: false,
      suffix: ' pH',
    },
    data: [
      {
        type: 'area',
        xValueFormatString: 'DD MMM YYYY',
        yValueFormatString: '#,##0.## pH',
        dataPoints: ph,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};
