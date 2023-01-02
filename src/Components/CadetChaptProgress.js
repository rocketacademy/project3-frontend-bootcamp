import React from 'react';
import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../constants.js';
import { Button, Text } from '@mantine/core';
import '../Components/css/CadetChaptProgress.css';
import SLDashboardlinks from './SLDashboardlinks.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CadetChaptProgress = ({ cadetId, cadetName }) => {
  // const CadetChaptProgress = () => {
  //here map out the cadetChapters
  const [progress, setProgress] = useState([]);
  const [singleProgress, setSingleProgress] = useState([]);

  const [completedChaps, setCompletedChaps] = useState({});

  const { sectionId } = useParams();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        console.log(cadetId);
        const response = await axios.get(
          //ALL chapters completed by single cadet across whole BC
          `${BACKEND_URL}/cadetChapters/section-progress-status?cadetId=${cadetId}&sectionId=${sectionId}`
          // `${BACKEND_URL}/cadetChapters/progress-status?cadetId=${cadetId}`
        );

        setProgress(response.data);

        console.log('omg', response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchChapters();
  }, [cadetId, sectionId]);

  console.log('all progress', progress);

  let cadetProgressList = progress.map((chapter) => {
    return (
      <>
        {chapter.completed === true ? (
          <>
            <Button className="chapter-btn" radius="xl" color="blue">
              {/* {chapter.chapterId} */}
              {chapter.chapter.name}
            </Button>
          </>
        ) : (
          <>
            <Button className="chapter-btn" radius="xl" color="gray">
              {/* {chapter.chapterId} */}
              {chapter.chapter.name}
            </Button>
          </>
        )}
      </>
    );
  });

  return (
    <>
      <span>{cadetProgressList}</span>
    </>
  );
};

export default CadetChaptProgress;
