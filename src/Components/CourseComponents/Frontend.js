import { useState, useEffect } from 'react';
import { Modal, Button, Group, Text } from '@mantine/core';

import axios from 'axios';

import { BACKEND_URL } from '../../constants.js';
import DisplayMarkdown from '../DisplayMarkdown';
// import api from '../../api/materials';
import Forum from '../Forum';

import { IconAlertCircle } from '@tabler/icons';
import StarMapButtonDown from '../StarMapButtonDown';
import StarMapButtonUP from '../StarMapButtonUP';
import { openModal, closeAllModals } from '@mantine/modals';

function Frontend() {
  const [opened, setOpened] = useState(false);

  const [done, setDone] = useState('');
  const [btn1, setBtn1] = useState('');

  const [btn2, setBtn2] = useState('');

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
  // const [sectionId, setSectionId] = useState(5);
  // const [urlNum, setUrlNum] = useState(1);
  // const [btnNum, setBtnNum] = useState("");
  const [cadetId, setCadetId] = useState(1);
  // const [url, setUrl] = useState('');
  const [completedChaps, setCompletedChaps] = useState({});
  const [markdownUrl, setMarkdownUrl] = useState('');

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
        let chapsCompleted = {};

        for (let i = 0; i < response2.data.length; i++) {
          chapsCompleted[response2.data[i].chapterId] = true;
        }

        setCompletedChaps(chapsCompleted);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchChapters();
  }, []);

  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="55%"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <DisplayMarkdown />
        <DisplayMarkdown markdown={btn1.markdownUrl} />
        <Forum />
      </Modal> */}

      <Group position="center">
        <div className="Chapter-1-btn">
          <Text fw={600} c="white" ta="left">
            {btn1.name}
          </Text>
          <Button
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn1.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },

              // leftIcon: {
              //   marginRight: 'auto',
              //   marginLeft: 'auto',
              // },
            })}
            onClick={() => {
              openModal({
                title: 'Subscribe to newsletter',
                size: '55%',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn1.markdownUrl} />
                  </>
                ),
              });
            }}
          >
            {btn1.chapterIndex}
          </Button>
          {/* <StarMapButtonUP
            id={1}
            opened={opened}
            setOpened={setOpened}
            color={completedChaps[btn1.id] ? 'blue' : 'gray'}
            btnName={btn1.chapterIndex}
            topic={btn1.name}
            markdownUrl={btn1.markdownUrl}
          /> */}
        </div>
        <div className="Chapter-2-btn">
          <Button
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn1.id] ? 'blue' : 'gray',
                border: 0,
                height: 40,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },

              // leftIcon: {
              //   marginRight: 'auto',
              //   marginLeft: 'auto',
              // },
            })}
            onClick={() => {
              openModal({
                title: 'eek',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn3.markdownUrl} />
                  </>
                ),
              });
            }}
          >
            {btn2.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn2.name}
          </Text>
          {/* <StarMapButtonDown
            id={2}
            opened={opened}
            setOpened={setOpened}
            color={completedChaps[btn2.id] ? 'blue' : 'gray'}
            btnName={btn2.chapterIndex}
            topic={btn2.name}
            markdownUrl={btn2.markdownUrl}
          /> */}
        </div>
        <div className="Chapter-3-btn">
          <StarMapButtonUP
            opened={opened}
            setOpened={setOpened}
            color={completedChaps[btn3.id] ? 'blue' : 'gray'}
            btnName={btn3.chapterIndex}
            topic={btn3.name}
            // markdownUrl={btn3.markdownUrl}
          />
        </div>
        <div className="Chapter-4-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={completedChaps[btn4.id] ? 'blue' : 'gray'}
            btnName={btn4.chapterIndex}
            topic={btn4.name}
          />
        </div>
        <div className="Chapter-5-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={completedChaps[btn5.id] ? 'blue' : 'grey'}
            btnName={btn5.chapterIndex}
            topic={btn5.name}
          />
        </div>
        <div className="Chapter-6-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={completedChaps[btn6.id] ? 'blue' : 'gray'}
            btnName={btn6.chapterIndex}
            topic={btn6.name}
          />
        </div>
        <div className="Chapter-7-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={completedChaps[btn7.id] ? 'blue' : 'gray'}
            btnName={btn7.chapterIndex}
            topic={btn7.name}
          />
        </div>
        <div className="Chapter-8-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={completedChaps[btn8.id] ? 'blue' : 'gray'}
            btnName={btn8.chapterIndex}
            topic={btn8.name}
          />
        </div>
        <div className="Chapter-9-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={completedChaps[btn9.id] ? 'blue' : 'gray'}
            btnName={btn9.chapterIndex}
            topic={btn9.name}
          />
        </div>
        <div className="Chapter-10-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={completedChaps[btn10.id] ? 'blue' : 'gray'}
            btnName={btn10.chapterIndex}
            topic={btn10.name}
          />
        </div>
        <div className="Chapter-11-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={completedChaps[btn11.id] ? 'blue' : 'gray'}
            btnName={btn11.chapterIndex}
            topic={btn11.name}
          />
        </div>
      </Group>
    </>
  );
}

export default Frontend;
