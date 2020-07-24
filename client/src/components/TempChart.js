import React from 'react';
import Paper from '@material-ui/core/Paper';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default ({ temp }) => {
  const tempOptions = {
    theme: 'light1', // "light1", "dark1", "dark2"
    height: 650,
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: '수온',
      fontWeight: 'bold',
    },
    axisY: {
      title: '수온(도씨)',
      includeZero: false,
      suffix: ' 도',
    },
    data: [
      {
        type: 'area',
        xValueFormatString: 'DD MMM YYYY',
        yValueFormatString: '#,##0.## 도',
        dataPoints: temp,
      },
    ],
  };

  return (
    <Paper style={{ width: '100%' }} elevation={10}>
      <CanvasJSChart options={tempOptions} />
    </Paper>
  );
};
