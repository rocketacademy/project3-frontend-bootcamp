import React from 'react';
import { useState, useEffect } from 'react';
import { Textarea, Button, TextInput } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import axios from 'axios';

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

  // useEffect(() => {
  //   const fetchForum = async () => {
  //     try {
  //       const response = await api.get('/forum');
  //       console.log(response.data);
  //       setCourse(response.data);
  //     } catch (err) {
  //       console.log(err.response.data);
  //     }
  //   };
  //   fetchForum();
  // }, []);

  // const handleSubmit = () => {
  //   // e.preventDefault();

  //   axios
  //     .put(`${BACKEND_URL}/cadetChapters/${chapterId}`, {
  //       completed: true,
  //     })
  //     .then((res) => {
  //       console.log('resdata:', res.data);
  //       console.log('marked complete');
  //       setDisabled(true);
  //       // navigate(`/client/journals/${res.data.id}`);
  //       //after clicking submit it will disable the button and also close the modal?
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // let forumPosts = posts.map((posts, index) => {
  //   return <div className="forum-posts" key={index} id={posts.key}></div>;
  // });

  //  const handleCompleted  = async (id) => {

  //         const updateCompleted = { id, completed: editCompleted };
  //         try {
  //             const response = await api.put(`/materials/${id}`, updateCompleted);
  //             setCourse(
  //               course.map((post) =>
  //                 course.id === id ? { ...response.data } : course
  //               )
  //             );
  //         } catch (err) {
  //             console.log(`Error: ${err.message}`);
  //         }
  //     }

  return (
    <div className="post-box">
      <TextInput
        label="Post your messages:"
        variant="filled"
        type="text"
        placeholder="Post Title"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <br />

      <br />

      <Textarea
        placeholder="What are your thoughts?"
        variant="filled"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        autosize
        minRows={2}
      />

      <Button variant="filled" color="tan" size="sm" mt="md" radius="md">
        Submit
      </Button>

      {/* add another button for mark as completed */}
    </div>
  );
};

export default Forum;
