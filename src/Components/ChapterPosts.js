import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants.js";
// import { useAuth } from "./AuthContext";
import { PostBlock } from "./PostBlock.js";
import { List } from "@mantine/core";

const ChapterPosts = (chapterId) => {
  // const { cadetInfo } = useAuth();
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
        });
    };

    getPosts();
  }, [chapterId]);

  return (
    <List type="ordered" withPadding>
      {posts.map((post) => (
        <PostBlock post={post} />
      ))}
    </List>
  );
};

export default ChapterPosts;
