import React from 'react';
import { useState, useEffect } from 'react';
import { BACKEND_URL } from '../constants.js';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Badges = () => {
  const icon1 = '🚀';
  const icon2 = '🛠️';
  const icon3 = '📚';
  const icon4 = '💎';
  const icon5 = '🖼️';
  const icon6 = '🏭';
  const icon7 = '🤖';
  const icon8 = '⛰️';
  const icon9 = '🧮';
  const icon10 = '💼';

  const [badge1, setBadge1] = useState('');
  const [badge2, setBadge2] = useState('');
  const [badge3, setBadge3] = useState('');
  const [badge4, setBadge4] = useState('');
  const [badge5, setBadge5] = useState('');
  const [badge6, setBadge6] = useState('');
  const [badge7, setBadge7] = useState('');
  const [badge8, setBadge8] = useState('');
  const [badge9, setBadge9] = useState('');
  const [badge10, setBadge10] = useState('');

  const [sections, setSections] = useState([]);
  const [completedSects, setCompletedSects] = useState({});
  const { cadetInfo } = useAuth();

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/sections`);

        console.log('sections', response.data);
        setSections(response.data);

        setBadge1(response.data[0]);
        setBadge2(response.data[1]);
        setBadge3(response.data[2]);
        setBadge4(response.data[3]);
        setBadge5(response.data[4]);
        setBadge6(response.data[5]);
        setBadge7(response.data[6]);
        setBadge8(response.data[7]);
        setBadge9(response.data[8]);
        setBadge10(response.data[9]);

        const response2 = await axios.get(
          `${BACKEND_URL}/cadetSections/progress-status?cadetId=${cadetInfo.id}`
        );
        console.log('res2', response2.data);
        let sectsCompleted = {};

        for (let i = 0; i < response2.data.length; i++) {
          sectsCompleted[response2.data[i].sectionId] = true;
        }

        setCompletedSects(sectsCompleted);
        console.log('completed sections', sectsCompleted);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchSections();
  }, []);

  return (
    <div className="Badges">
      {completedSects[badge1.id] === true ? icon1 : ''}
      {completedSects[badge2.id] === true ? icon2 : ''}
      {completedSects[badge3.id] === true ? icon3 : ''}
      {completedSects[badge4.id] === true ? icon4 : ''}
      {completedSects[badge5.id] === true ? icon5 : ''}
      {completedSects[badge6.id] === true ? icon6 : ''}
      {completedSects[badge7.id] === true ? icon7 : ''}
      {completedSects[badge8.id] === true ? icon8 : ''}
      {completedSects[badge9.id] === true ? icon9 : ''}
      {completedSects[badge10.id] === true ? icon10 : ''}
    </div>
  );
};

export default Badges;
