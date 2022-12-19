import { useEffect, useState } from 'react';
import './css/DisplayMarkdown.css';
import Markdown from 'markdown-to-jsx';
import Code from './Code';
import { database, storage } from '../firebase';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from 'firebase/storage';
import axios from 'axios';
import { Modal, Button } from '@mantine/core';
import Forum from './Forum';

const MARKDOWN_FOLDER_NAME = 'markdown';

function DisplayMarkdown({ markdown }) {
  const [post, setPost] = useState('');
  const [isDark, setIsDark] = useState(true);
  // const url =
  //   'https://raw.githubusercontent.com/weiyu95/bootcamp3.0-docs/main/1-frontend/1.2-css/1.2.1-layout.md';

  axios.get(markdown).then((res) => {
    setPost(res.data);
    // console.log(res.data);
  });

  // useEffect(() => {

  //   axios.get(url).then((res) => {
  //     setPost(res.data);
  //     // console.log(res.data);
  //   });
  // }, []);

  // console.log(post);

  return (
    <div className="DisplayMarkdown-body">
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
              props: {
                isDark,
                setIsDark,
              },
            },
          },
        }}
      >
        {post}
      </Markdown>
      <Forum />
    </div>
  );
}

export default DisplayMarkdown;
