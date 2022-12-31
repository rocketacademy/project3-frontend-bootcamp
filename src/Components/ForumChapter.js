import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Textarea, Button, TextInput, Card } from '@mantine/core';
import { BACKEND_URL } from '../constants.js';
import { PostBlock } from './PostBlock.js';
import { List } from '@mantine/core';
import PostForm from './PostForm.js';
import axios from 'axios';
import { connectStorageEmulator } from 'firebase/storage';

const ForumChapter = () => {
  const [sections, setSections] = useState([]);
  const { sectionId, chapterId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      axios
        .get(`${BACKEND_URL}/posts`, {
          params: {
            chapterId: chapterId,
          },
        })
        .then((response) => {
          setPosts(response.data);
          console.log('what is in post', response.data);
        });
    };
    getPosts();
  }, [chapterId]);

  console.log('hup ho', sections);

  const onPostUpdate = (post) => {
    setPosts((prevPosts) => {
      return [...prevPosts, post];
    });
  };

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        <Card shadow="sm" p="xl" radius="md" withBorder>
          <List type="ordered">
            {posts?.map((post) => (
              <PostBlock post={post} key={post.id} />
            ))}
          </List>
        </Card>
      ) : (
        ''
      )}

      {/* <PostForm
        chapter={chapterId}
        cadet={props.cadet}
        onPostUpdate={onPostUpdate}
      /> */}
    </div>
  );
};

export default ForumChapter;
