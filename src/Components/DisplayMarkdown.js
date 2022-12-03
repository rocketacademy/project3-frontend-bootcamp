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
import { Modal } from '@mantine/core';

const MARKDOWN_FOLDER_NAME = 'markdown';

function DisplayMarkdown() {
  const [post, setPost] = useState('');
  const [isDark, setIsDark] = useState(true);
  const url =
    'https://raw.githubusercontent.com/weiyu95/bootcamp3.0-docs/main/1-frontend/1.2-css/1.2.1-layout.md';
  {
  }
  const test =
    'https://firebasestorage.googleapis.com/v0/b/launchpad-app-development.appspot.com/o/markdown%2F1.1_%20HTML%20-%20text.txt?alt=media&token=f39511a9-b5b1-4975-be66-36a58e4fa614';
  const [firebaseUrl, setFirebaseUrl] = useState('');

  useEffect(() => {
    // import(
    //   "https://firebasestorage.googleapis.com/v0/b/launchpad-app-development.appspot.com/o/markdown%2F1.1_%20HTML%20-%20text.txt?alt=media&token=f39511a9-b5b1-4975-be66-36a58e4fa614"
    // ).then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((response) => setPost(response))
    //     .catch((err) => console.log(err));
    // });
    // const fileRef = storageRef(storage, `${MARKDOWN_FOLDER_NAME}/1.1_HTML.md`);
    // getDownloadURL(fileRef).then((downloadUrl) => {
    //   setFirebaseUrl(downloadUrl);
    // });
    // console.log(firebaseUrl);
    axios.get(url).then((res) => {
      setPost(res.data);
      // console.log(res.data);
    });
  }, []);

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
    </div>
  );
}

export default DisplayMarkdown;

// function DisplayMarkdown(props) {
//   const [post, setPost] = useState("");
//   const [isDark, setIsDark] = useState(true);
//   useEffect(() => {
//     if (props) {
//       const getProps = async () => {
//         axios.get(props.markdown).then((res) => {
//           setPost(res.data);
//         });
//       };
//       getProps();
//     }
//   }, [props]);

//   return (
//     <div className="DisplayMarkdown-body">
//       <Markdown
//         options={{
//           overrides: {
//             Code: {
//               component: Code,
//               props: {
//                 isDark,
//                 setIsDark,
//               },
//             },
//           },
//         }}
//       >
//         {post}
//       </Markdown>
//     </div>
//   );
// }

// export default DisplayMarkdown;
