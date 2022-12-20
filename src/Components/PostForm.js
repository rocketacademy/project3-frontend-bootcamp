import React, { useState, useEffect } from "react";
import { Textarea, Button, TextInput } from "@mantine/core";
import { BACKEND_URL } from "../constants";
import axios from "axios";

const PostForm = (chapterId) => {
  const [author, setAuthor] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

  const handleChange = (event) => {
    setAuthor(cadets.name);
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/posts`, {
        author,
        chapterId,
        message,
      })
      .then((res) => {
        setAuthor("");
        setMessage("");
      });
  };
  return (
    <div>
      <Textarea
        placeholder="What are your thoughts?"
        variant="filled"
        value={message}
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
