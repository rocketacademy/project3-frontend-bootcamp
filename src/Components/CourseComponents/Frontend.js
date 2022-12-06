import { useState, useEffect } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import axios from 'axios';

import { BACKEND_URL } from '../../constants.js';
import DisplayMarkdown from '../DisplayMarkdown';
// import api from '../../api/materials';
import Forum from '../Forum';

import { IconAlertCircle } from '@tabler/icons';
import StarMapButtonDown from '../StarMapButtonDown';
import StarMapButtonUP from '../StarMapButtonUP';

function ModalDemo() {
  const [opened, setOpened] = useState(false);

  const [done, setDone] = useState('');
  const [btn1, setBtn1] = useState('');
  const [btn1color, setBtn1Color] = useState([]);
  const [btn2, setBtn2] = useState('');
  const [btn2color, setBtn2Color] = useState([]);
  const [btn3, setBtn3] = useState('');
  const [btn4, setBtn4] = useState('');
  const [btn5, setBtn5] = useState('');
  const [btn6, setBtn6] = useState('');
  const [btn7, setBtn7] = useState('');
  const [btn8, setBtn8] = useState('');
  const [btn9, setBtn9] = useState('');
  const [btn10, setBtn10] = useState('');
  const [btn11, setBtn11] = useState('');
  const [btn12, setBtn12] = useState('');
  const [sectionId, setSectionId] = useState(5);
  const [urlNum, setUrlNum] = useState(1);
  const [btnNum, setBtnNum] = useState('');
  const [cadetId, setCadetId] = useState(1);
  // const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/chapters/total-chapters?sectionId=${5}`
        );

        // const response = await api.get('/chapters');
        console.log('chapters', response.data);

        setBtn1(response.data[0]);
        setBtn2(response.data[1]);
        setBtn3(response.data[2]);
        setBtn4(response.data[3]);
        setBtn5(response.data[4]);
        setBtn6(response.data[5]);
        setBtn7(response.data[6]);
        setBtn8(response.data[7]);
        setBtn9(response.data[8]);
        setBtn10(response.data[9]);
        setBtn11(response.data[10]);
        setBtn12(response.data[11]);
        setDone(response.data);

        const response2 = await axios.get(
          `${BACKEND_URL}/cadetChapters/progress-status?cadetId=${cadetId}`
        );
        console.log('res2', response2.data);
        setBtn1Color(response2.data[0].completed);
        setBtn2Color(response2.data[1].completed);
        console.log('btn1 color', response2.data[0].completed);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchChapters();
  }, []);

  // switch (urlNum) {
  //   case 1:
  //     setUrl(
  //       'https://raw.githubusercontent.com/weiyu95/bootcamp3.0-docs/main/1-frontend/1.2-css/1.2.1-layout.md'
  //     );
  //     break;

  //   case 2:
  //     setUrl(
  //       'https://raw.githubusercontent.com/weiyu95/capstone-markdownfiles/main/1.1_HTML.md'
  //     );
  //     break;

  //   default:
  //     alert("I'm am sick of this");
  // }

  // const settingUrl = () => {};

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="55%"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <DisplayMarkdown />
        {/* <DisplayMarkdown markdown={frontend.markdown_url} /> */}
        <Forum />
      </Modal>
      <Group position="center">
        <div className="Chapter-1-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn1color ? 'blue' : 'gray'}
            btnName="HTML lala"
            topic={btn1.name}
          />
        </div>
        <div className="Chapter-2-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn2color ? 'blue' : 'gray'}
            btnName={btn2.id}
            topic={btn2.name}
          />
        </div>
        <div className="Chapter-3-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn3 ? 'blue' : 'gray'}
            btnName={btn3.id}
            topic={btn3.name}
          />
        </div>
        <div className="Chapter-4-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn4.completed ? 'blue' : 'gray'}
            btnName={btn4.id}
            topic={btn4.name}
          />
        </div>
        <div className="Chapter-5-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn5.completed ? 'blue' : 'grey'}
            btnName={btn5.point}
            topic={btn5.topic}
          />
        </div>
        <div className="Chapter-6-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn6.completed ? 'blue' : 'gray'}
            btnName={btn6.id}
            topic={btn6.name}
          />
        </div>
        <div className="Chapter-7-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn7.completed ? 'blue' : 'gray'}
            btnName={btn7.id}
            topic={btn7.name}
          />
        </div>
        <div className="Chapter-8-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn8.completed ? 'blue' : 'gray'}
            btnName={btn8.id}
            topic={btn8.name}
          />
        </div>
        <div className="Chapter-9-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn9.completed ? 'blue' : 'gray'}
            btnName={btn9.id}
            topic={btn9.name}
          />
        </div>
        <div className="Chapter-10-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn10.completed ? 'blue' : 'gray'}
            btnName={btn10.id}
            topic={btn10.name}
          />
        </div>
        <div className="Chapter-11-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn11.completed ? 'blue' : 'gray'}
            btnName={btn11.id}
            topic={btn11.name}
          />
        </div>
      </Group>
    </>
  );
}

export default ModalDemo;
