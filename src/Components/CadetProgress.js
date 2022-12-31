import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Group,
  Text,
  Table,
  Container,
  Title,
  Paper,
  filterProps,
  List,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { useParams } from 'react-router-dom';

import CadetChaptProgress from './CadetChaptProgress.js';
import '../Components/css/CadetChaptProgress.css';
import CadetSectionProgress from './CadetSectionProgress.js';
import SLDashboardlinks from './SLDashboardlinks.js';

const CadetProgress = () => {
  const { sectionId } = useParams();
  const [cadets, setCadets] = useState();
  const [cadetIdList, setCadetIdList] = useState([]);
  const [chaptProgress, setChaptProgress] = useState([]);
  const [sectProgress, setSectProgress] = useState([]);
  const [allCadetProgress, setAllCadetProgress] = useState({});

  const [progress, setProgress] = useState([]);
  const [singleProgress, setSingleProgress] = useState([]);
  const [markCompleted, setMarkCompleted] = useState();
  const [completedChaps, setCompletedChaps] = useState({});

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

  return (
    <div className="progress-list-paper">
      <Paper className="chapter-progress-list">
        <SLDashboardlinks />
        {sectionId ? (
          <List type="ordered" withPadding>
            {cadets?.map((cadet) => (
              <div className="individual-chapter-progress-list">
                <span className="cadet-names">{cadet.name}</span>
                <span className="cadet-progress-map">
                  <CadetChaptProgress cadetId={cadet.id} key={cadet.id} />
                </span>
              </div>
            ))}
          </List>
        ) : (
          <List type="ordered" withPadding>
            {cadets?.map((cadet) => (
              <div className="individual-chapter-progress-list">
                <span className="cadet-names">{cadet.name}</span>
                <span className="cadet-progress-map">
                  <CadetSectionProgress cadetId={cadet.id} key={cadet.id} />
                </span>
              </div>
            ))}
          </List>
        )}
      </Paper>
    </div>
  );
};

export default CadetProgress;

//main page get the section progress of all cadets
//when click on section links => shows all cadet progress for each section
//when you click on the cadet name => see cadet all progress (pending)

// return (
//   <div>
//     <Paper className="chapter-progress-list">
//       <SLDashboardlinks />
//       {sectionId ? (
//         <List type="ordered" withPadding>
//           {cadets?.map((cadet) => (
//             <div className="individual-chapter-progress-list">
//               <span className="cadet-names">{cadet.name}</span>
//               <span className="cadet-progress-map">
//                 <CadetChaptProgress cadetId={cadet.id} key={cadet.id} />
//               </span>
//             </div>
//           ))}
//         </List>
//       ) : (
//         <List type="ordered" withPadding>
//           {cadets?.map((cadet) => (
//             <div className="individual-chapter-progress-list">
//               <span className="cadet-names">{cadet.name}</span>
//               <span className="cadet-progress-map">
//                 <CadetSectionProgress cadetId={cadet.id} key={cadet.id} />
//               </span>
//             </div>
//           ))}
//         </List>
//       )}
//     </Paper>
//   </div>
// );

// <Table horizontalSpacing="sm" verticalSpacing="sm">
//     {cadets?.map((cadet) => (
//       <tr className="individual-chapter-progress-list">
//         <td className="cadet-names">{cadet.name}</td>
//         <td className="cadet-progress-map">
//           <CadetChaptProgress cadetId={cadet.id} key={cadet.id} />
//         </td>
//       </tr>
//     ))}
//   </Table>
// ) : (
//   <Table horizontalSpacing="sm" verticalSpacing="sm">
//     {cadets?.map((cadet) => (
//       <tr className="individual-chapter-progress-list">
//         <td className="cadet-names">{cadet.name}</td>
//         <td className="cadet-progress-map">
//           <CadetSectionProgress cadetId={cadet.id} key={cadet.id} />
//         </td>
//       </tr>
//     ))}
//   </Table>
