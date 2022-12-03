import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Progress, Text, Title } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import axios from 'axios';

const ProgressBar = () => {
  const [chaptProgress, setchaptProgress] = useState('');
  const [sectionProgress, setSectionProgress] = useState('');
  const [numOfChapt, setNumOfChapt] = useState('');
  const [numOfSection, setNumOfSection] = useState(10);

  const [cadetId, setCadetId] = useState(1);
  const [sectionId, setSectionId] = useState(5);

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/cadetSections/progress-status?cadetId=${cadetId}`
        );

        console.log('section progress', response.data);
        setSectionProgress(response.data.length);

        const response1 = await axios.get(
          `${BACKEND_URL}/chapters/total-chapters?sectionId=${sectionId}`
        );
        setNumOfChapt(response1.data.length);
        console.log('total num of chapters', response1.data.length);

        const response2 = await axios.get(
          `${BACKEND_URL}/cadetChapters/progress-status?cadetId=${cadetId}`
        );
        console.log('chapter progress', response2.data);
        setchaptProgress(response2.data.length);
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response2.data);
      }
    };
    fetchCompleted();
  }, []);

  const sectionProgressNum = (sectionProgress / numOfSection) * 100;
  const chaptProgressNum = (chaptProgress / numOfChapt) * 100;

  const chaptProgressLabel = chaptProgressNum.toFixed() + '%';
  const sectionProgressLabel = Number(sectionProgress).toFixed() + '%';

  return (
    <>
      <Title order={6}>Bootcamp Progress:</Title>
      {console.log(sectionProgress)}
      {console.log(numOfSection)}
      {console.log(chaptProgress)}
      {console.log(numOfChapt)}
      <Progress
        className="Bootcamp-bar"
        color="orange"
        // mt="sm"
        radius="xl"
        size={20}
        value={sectionProgressNum}
        label={sectionProgressLabel}
      />
      <br />
      <Title order={6}>Section Progress:</Title>

      <Progress
        color="pink"
        // mt="sm"
        radius="xl"
        size={20}
        value={chaptProgressNum}
        label={chaptProgressLabel}
      />
      <br />
    </>
  );
};

export default ProgressBar;
