import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { BACKEND_URL } from "../constants";
import axios from "axios";

const PostForm = ({ chapter, cadet, onPostUpdate }) => {
  const [post, setPost] = useState({
    author: null,
    chapterId: null,
    content: "",
    createdAt: null,
  });

  const handleChange = (event) => {
    setPost({
      author: cadet.id,
      chapterId: chapter,
      content: event.target.value,
      createdAt: new Date().toLocaleString(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/posts`, {
        ...post,
      })
      .then((res) => {
        onPostUpdate(post);
        setPost({
          author: null,
          chapterId: null,
          content: "",
        });
        console.log(res);
      });
  };
  return (
    <div>
      <Textarea
        label="Post your messages:"
        placeholder="What are your thoughts?"
        variant="filled"
        value={post.content}
        onChange={handleChange}
        autosize
        minRows={2}
      />

      {post.content === "" ? (
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

export default PostForm;
