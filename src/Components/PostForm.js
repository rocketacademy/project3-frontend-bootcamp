import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { BACKEND_URL } from "../constants";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PostForm = (props) => {
  // const { cadetInfo } = useAuth();
  const [author, setAuthor] = useState();
  const [chapterId, setChapterId] = useState();
  const [content, setContent] = useState("");
  console.log(props);

  const handleChange = (event) => {
    setAuthor(props.cadet.id);
    setChapterId(props.chapter);
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/posts`, {
        author,
        chapterId,
        content,
      })
      .then((res) => {
        setAuthor();
        setChapterId();
        setContent("");
        console.log(res);
      });
  };
  return (
    <div>
      <Textarea
        label="Post your messages:"
        placeholder="What are your thoughts?"
        variant="filled"
        value={content}
        onChange={handleChange}
        autosize
        minRows={2}
      />

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
    </div>
  );
};

export default PostForm;
