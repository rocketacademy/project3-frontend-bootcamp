import React from 'react';
import { useState, useEffect } from 'react';
import { Textarea, Button, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../constants.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ChapterPosts from './ChapterPosts.js';

const ForumSection = () => {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();
  const { sectionId } = useParams();

  useEffect(() => {
    const fetchSectionChapters = async () => {
      try {
        const response = await axios.get(
          //ALL chapters completed by single cadet across whole BC
          `${BACKEND_URL}/chapters/total-chapters?sectionId=${sectionId}`
        );

        setChapters(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchSectionChapters();
    console.log('section param', sectionId);
    // sectId();
  }, [sectionId]);

  console.log('hup hup', chapters);

  // let relevantChapters = chapters?.map((chapter) => {
  //   return (
  //     <div fullWidth ta="center" style={{ width: 300 }}>
  //       <Button color="teal">
  //         {chapter.id}
  //         {'   '}
  //         {chapter.name}
  //       </Button>
  //     </div>
  //   );
  // });

  return (
    <>
      {chapters?.map((chapter) => (
        <Button
          key={chapter.id}
          className="chapter-list-btns"
          color="teal"
          onClick={() => navigate(`/forum/${sectionId}/${chapter.id}`)}
        >
          {chapter.id}
          {'   '}
          {chapter.name}
        </Button>
      ))}
    </>
  );
};

export default ForumSection;

// {
//   chapters?.map((chapter) => (
//     <div fullWidth ta="center" style={{ width: 300 }}>
//       <Button
//         color="teal"
//         onClick={() => navigate(`/forum/3/${chapter.id}`)}
//       >
//         {chapter.id}
//         {'   '}
//         {chapter.name}
//       </Button>
//     </div>
//   ));
// }
