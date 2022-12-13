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
import Forum from './Forum';

const MARKDOWN_FOLDER_NAME = 'markdown';

function DisplayMarkdown({ markdown }) {
  const [post, setPost] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (markdown) {
      const getProps = async () => {
        axios.get(markdown.markdown).then((res) => setPost(res.data));
      };
      getProps();
    }
  }, [markdown]);

  // useEffect(() => {
  //   axios.get(markdown.markdown).then((res) => {
  //     setPost(res.data);
  //   });
  // }, [markdown]);

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
