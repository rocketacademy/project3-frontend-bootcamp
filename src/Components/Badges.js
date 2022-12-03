import React from 'react';
import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../constants.js';
import axios from 'axios';

const Badges = () => {
  const [icon1, seticon1] = useState('🚀');
  const [icon2, seticon2] = useState('🛠️');
  const [icon3, seticon3] = useState('📚');
  const [icon4, seticon4] = useState('💎');
  const [icon5, seticon5] = useState('🖼️');
  const [icon6, seticon6] = useState('🏭');
  const [icon7, seticon7] = useState('🤖');
  const [icon8, seticon8] = useState('⛰️');
  const [icon9, seticon9] = useState('🧮');
  const [icon10, seticon10] = useState('💼');
  const [sectionProgress, setSectionProgress] = useState([]);
  const [cadetId, setCadetId] = useState(1);

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/cadetSections/progress-status?cadetId=${cadetId}`
        );
        console.log('section progress for badges', response.data);

        setSectionProgress(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchCompleted();
  }, []);

  return (
    <div className="Badges">
      {sectionProgress.length >= 2 && sectionProgress[0].completed === true
        ? icon1
        : ''}
      {/* {sectionProgress[1].completed === true ? icon2 : ''}
      {sectionProgress[2].completed === true ? icon3 : ''} */}
      {/* {icon4}
      {icon5}
      {icon6}
      {icon7}
      {icon8}
      {icon9}
      {icon10} */}
    </div>
  );
};

export default Badges;

// 🚀
// 🛠️
// 📚
// 💎
// 🖼️
// 🏭
// 🤖
// ⛰️
// 🧮
// 💼
