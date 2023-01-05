import React, { useState, useEffect } from 'react';
import { Textarea, Button } from '@mantine/core';
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { RichTextEditor } from '@mantine/rte';
import { useAuth } from './AuthContext';

const SLPostForm = ({ sl, onPostUpdate, chapter }) => {
  const { slInfo } = useAuth();
  const [value, onChange] = useState('<p><br></p>');
  const [post, setPost] = useState({
    sl: null,
    author: null,
    authorName: '',
    authorImage: '',
    chapterId: null,
    content: '',
    createdAt: null,
  });

  useEffect(() => {
    setPost({
      sl: slInfo.id,
      author: null,
      authorName: slInfo.name,
      authorImage: slInfo.photoLink,
      chapterId: chapter,
      content: value,
      createdAt: new Date().toLocaleString(),
    });
  }, [value, slInfo.id, slInfo.name, slInfo.photoLink, chapter]);

  const handleChange = () => {
    setPost({
      // author: slInfo.id,
      sl: slInfo.id,
      authorName: slInfo.name,
      authorImage: slInfo.photoLink,
      chapterId: chapter,
      content: value,
      createdAt: new Date().toLocaleString(),
    });
  };
  console.log('post content', post.content);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/posts`, {
        ...post,
      })
      .then((res) => {
        console.log('in handle submit', res);
        onPostUpdate(post);
        setPost({
          author: null,
          sl: null,
          authorName: '',
          authorImage: '',
          chapterId: null,
          content: '',
          createdAt: null,
        });
        onChange('');
      });
  };
  console.log(value);

  return (
    <div className="sl-post-form ">
      <RichTextEditor
        id="rte"
        value={value}
        onChange={onChange}
        placeholder="Post your messages here"
      />

      {value === '<p><br></p>' ? (
        <Button
          variant="filled"
          color="tan"
          size="xs"
          mt="sm"
          radius="sm"
          disabled
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="filled"
          color="tan"
          size="xs"
          mt="sm"
          radius="sm"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
      <br />
      <br />
    </div>
  );
};

export default SLPostForm;
