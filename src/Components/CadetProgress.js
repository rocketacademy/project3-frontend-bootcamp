import React from 'react';
import axios from 'axios';
import { Title, Paper, filterProps } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Button, Group, Text, Image, Container } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';
import CadetChaptProgress from './CadetChaptProgress.js';
import CadetSectionProgress from './CadetSectionProgress.js';

const CadetProgress = () => {
  const [cadets, setCadets] = useState();
  const [chaptProgress, setChaptProgress] = useState([]);
  const [sectProgress, setSectProgress] = useState([]);
  const [allCadetProgress, setAllCadetProgress] = useState({});

  useEffect(() => {
    const fetchCadetProgress = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/cadets`);

        console.log('all cadets info', response.data);
        setCadets(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchCadetProgress();
  }, []);

  let cadetList;
  if (cadets && cadets.length !== 0) {
    cadetList = cadets.map((cadet) => {
      console.log('cadet Id', cadet.id);
      console.log('cadet names', cadet.name);
      return cadetList;

      // return (
      //   <>
      //     <Container>
      //       <h4 key={chapterId}>{chapterId.chapterId}</h4>
      //     </Container>
      //   </>
      // );
    });
  }

  let cadetSects;
  if (cadets && cadets.length !== 0) {
    cadetSects = cadets.map((cadet) => {
      sectProgress.push(cadet.cadetSections);
      console.log('all sect progress', sectProgress);
      // console.log('individual cadet chapter prog', cadet.cadetChapters);
      // console.log('individual cadet section id', cadet.cadetSections);
      return cadetSects;
    });
  }

  let cadetChapts;
  if (cadets && cadets.length !== 0) {
    cadetChapts = cadets.map((cadet) => {
      chaptProgress.push(cadet.cadetChapters);
      console.log('all chap progress', chaptProgress);
      // console.log('individual cadet chapter prog', cadet.cadetChapters);
      // console.log('individual cadet section id', cadet.cadetSections);
      return cadetChapts;
    });
  }

  return (
    <div>
      <Title order={1} color="yellow">
        {/* <CadetChaptProgress chapterProg={props.cadetChapters} />
        <CadetSectionProgress sectionProg={cadets} /> */}
      </Title>
    </div>
  );
};

export default CadetProgress;
