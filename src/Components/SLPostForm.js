import React, { useState, useEffect } from 'react';
import { Textarea, Button } from '@mantine/core';
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { RichTextEditor } from '@mantine/rte';

const SLPostForm = ({ chapter, cadet, onPostUpdate }) => {
  const [value, onChange] = useState('<p><br></p>');
  const [post, setPost] = useState({
    author: null,
    authorName: '',
    authorImage: '',
    chapterId: null,
    content: '',
    createdAt: null,
  });

  useEffect(() => {
    setPost({
      author: cadet.id,
      authorName: cadet.name,
      authorImage: cadet.photoLink,
      chapterId: chapter,
      content: value,
      createdAt: new Date().toLocaleString(),
    });
  }, [value, cadet.id, cadet.name, cadet.photoLink, chapter]);

  const handleChange = () => {
    setPost({
      author: cadet.id,
      authorName: cadet.name,
      authorImage: cadet.photoLink,
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
    <div>
      {/* <Textarea
        label="Post your messages:"
        placeholder="What are your thoughts?"
        variant="filled"
        value={post.content}
        onChange={handleChange}
        autosize
        minRows={2}
      /> */}
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
          size="sm"
          mt="md"
          radius="md"
          disabled
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="filled"
          color="tan"
          size="sm"
          mt="md"
          radius="md"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default SLPostForm;
