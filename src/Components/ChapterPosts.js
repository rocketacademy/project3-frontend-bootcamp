import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants.js";
import { PostBlock } from "./PostBlock.js";
import { List } from "@mantine/core";
import PostForm from "./PostForm.js";

const ChapterPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      axios
        .get(`${BACKEND_URL}/posts`, {
          params: {
            chapterId: props.chapter,
          },
        })
        .then((response) => {
          setPosts(response.data);
        });
    };
    getPosts();
  }, [props.chapter]);

  console.log("chapterpost", props);

  const onPostUpdate = (post) => {
    setPosts((prevPosts) => {
      return [...prevPosts, post];
    });
  };

  return (
    <div>
      <List type="ordered" withPadding>
        {posts.map((post) => (
          <PostBlock post={post} key={post.id} />
        ))}
      </List>
      <PostForm
        chapter={props.chapter}
        cadet={props.cadet}
        onPostUpdate={onPostUpdate}
      />
    </div>
  );
};

export default ChapterPosts;
