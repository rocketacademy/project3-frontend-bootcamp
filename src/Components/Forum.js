import React from 'react';
import { useState, useEffect } from 'react';
import { Textarea, Button, Paper, Grid } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import axios from 'axios';
import '../Components/css/Forum.css';
import ForumNavlinks from './ForumNavlinks.js';
import ForumSection from './ForumSection.js';
import { useParams } from 'react-router-dom';
import ChapterPosts from './ChapterPosts.js';
import ForumChapter from './ForumChapter.js';

const Forum = () => {
  // const { topic } = useParams();
  // const user = useContext(UserContext);
  const [fileInputFile, setFileInputFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [course, setCourse] = useState([]);

  const [titleInput, setTitleInput] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [editCompleted, setEditCompleted] = useState('');
  const [color, setColor] = useState('gray');
  const [completed, setCompleted] = useState('');
  const [completedMat, setCompletedMat] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [disabled, setDisabled] = useState(false);
  // const FORUM_FOLDER_NAME = topic;
  // const FORUM_IMAGES_FOLDER_NAME = 'forumImages';

  //useEffect to get all the available chapters and map into different links, each link will display available chapters in that component

  const [chapters, setChapters] = useState('');
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

  return (
    <div className="progress-list-paper">
      <Paper withBorder shadow="sm" className="fsectionlist-progress-list">
        <Grid>
          <Grid.Col span={3}>
            <div className="forum-sect-btn-list">
              <ForumNavlinks />
            </div>
          </Grid.Col>
          <Grid.Col span={8}>
            <ForumChapter />
          </Grid.Col>
        </Grid>
        <div className="chapter-list-btns">
          <ForumSection />
        </div>
      </Paper>
    </div>
  );
};
export default Forum;

// <div className="progress-list-paper">
//   <Paper className="fsectionlist-progress-list">
//     <Grid>
//       <Grid.Col span={3}>
//         <div className="forum-sect-btn-list">
//           <ForumNavlinks />
//         </div>
//       </Grid.Col>
//       <Grid.Col span={4} offset={2}>
//         <div className="chapter-list-btns">
//           <ForumSection />
//         </div>
//       </Grid.Col>

//       {/* {relevantChapters} */}
//       {/* <ChapterPosts /> */}
//     </Grid>
//   </Paper>
// </div>;
