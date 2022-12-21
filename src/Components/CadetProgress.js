import React from 'react';
import axios from 'axios';
import { Title, Paper } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Button, Group, Text, Image } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';

const CadetProgress = () => {
  const [cadets, setCadets] = useState([]);
  const [cadetProgress, setCadetProgress] = useState();

  useEffect(() => {
    const fetchCadetProgress = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/cadets`);

        console.log('cadet', response.data);
        console.log('cadet progress', response.data[0].cadetSections);

        let chapsCompleted = [];
        for (let i = 0; i < response.data.length; i++) {
          // console.log('chaptId', response2.data[i].chapterId);
          chapsCompleted.push[response.data[i].id] = true;
          setCadets(cadets);
          console.log('hmm', chapsCompleted);
        }

        // const response2 = await axios.get(
        //   `${BACKEND_URL}/cadetChapters/progress-status?cadetId=${cadetInfo.id}`
        // );
        // console.log('res2', response2.data);
        // let chapsCompleted = {};

        // for (let i = 0; i < response2.data.length; i++) {
        //   // console.log('chaptId', response2.data[i].chapterId);
        //   chapsCompleted[response2.data[i].chapterId] = true;
        // }

        // setCompletedChaps(chapsCompleted);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    // sectId();
    fetchCadetProgress();
  }, []);

  return (
    <div>
      <Title order={1} color="yellow">
        CadetProgress
      </Title>
    </div>
  );
};

export default CadetProgress;
