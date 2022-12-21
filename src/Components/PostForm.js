import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { BACKEND_URL } from "../constants";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PostForm = (chapterId) => {
  const { cadetInfo } = useAuth();
  const [author, setAuthor] = useState();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setAuthor(cadetInfo.id);
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
      .then(() => {
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
