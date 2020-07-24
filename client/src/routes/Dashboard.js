import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempChart from '../components/TempChart';
import PHChart from '../components/PHChart';
import SalinityChart from '../components/SalinityChart';

export default () => {
  const [Temp, setTemp] = useState([]);
  const [PH, setPH] = useState([]);
  const [Salinity, setSalinity] = useState([]);

  useEffect(() => {
    axios.get('/api/dashboard').then((response) => {
      if (response.data.success) {
        let tempData = [];
        let phData = [];
        let salinityData = [];
        response.data.data.virtualTableStorage.forEach((element) => {
          const {
            EventEnqueuedUtcTime,
            pi1_ui1,
            pi17_ui145,
            pi12_ui97,
          } = element;
          tempData.push({ x: new Date(EventEnqueuedUtcTime), y: pi1_ui1 });
          phData.push({ x: new Date(EventEnqueuedUtcTime), y: pi17_ui145 });
          salinityData.push({
            x: new Date(EventEnqueuedUtcTime),
            y: pi12_ui97,
          });
        });
        setTemp(tempData);
        setPH(phData);
        setSalinity(salinityData);
      } else {
        alert('데이터를 불러오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <>
      <TempChart temp={Temp} />
    </>
  );
};
