import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempChart from '../components/TempChart';
import PHChart from '../components/PHChart';

export default () => {
  const [Temp, setTemp] = useState([]);
  const [PH, setPH] = useState([]);

  useEffect(() => {
    axios.get('/api/dashboard').then((response) => {
      if (response.data.success) {
        let tempData = [];
        let ph = [];
        response.data.data.virtualTableStorage.forEach((element) => {
          const { EventEnqueuedUtcTime, pi1_ui1, pi17_ui145 } = element;
          tempData.push({ x: new Date(EventEnqueuedUtcTime), y: pi1_ui1 });
          ph.push({ x: new Date(EventEnqueuedUtcTime), y: pi17_ui145 });
        });
        setTemp(tempData);
        setPH(ph);
      } else {
        alert('데이터를 불러오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <>
      <TempChart temp={Temp} />
      <PHChart ph={PH} />
    </>
  );
};
