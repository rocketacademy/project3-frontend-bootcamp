import { useState, useEffect } from 'react';
import { Modal, Button, Group, Text, Image } from '@mantine/core';
import starpic from '../../images/Frontend-map.png';
import '../css/Frontend.css';
import axios from 'axios';

import { BACKEND_URL } from '../../constants.js';
import DisplayMarkdown from '../DisplayMarkdown';

import Forum from '../Forum';

import { IconAlertCircle } from '@tabler/icons';

import { openModal, closeAllModals } from '@mantine/modals';

function Frontend() {
  const [opened, setOpened] = useState(false);
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

  const [cadetId, setCadetId] = useState(1);
  const [chapterId, setChapterId] = useState('');

  const [completedChaps, setCompletedChaps] = useState({});
  const [markdownUrl, setMarkdownUrl] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/chapters/total-chapters?sectionId=${5}`
        );

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

  const handleClick = (e) => {
    // e.preventDefault();

    axios
      .post(`${BACKEND_URL}/cadetChapters/${chapterId}`, {
        cadetId: Number(cadetId),
        ChapterId: Number(chapterId),
        completed: false,
        updatedAt: new Date().toLocaleDateString(),
      })
      .then((res) => {
        console.log('resdata:', res.data);
        console.log('Chapter data created');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    // e.preventDefault();

    axios
      .put(`${BACKEND_URL}/cadetChapters/${chapterId}`, {
        completed: true,
      })
      .then((res) => {
        console.log('resdata:', res.data);
        console.log('marked complete');
        setDisabled(true);
        // navigate(`/client/journals/${res.data.id}`);
        //after clicking submit it will disable the button and also close the modal?
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ height: 800, marginLeft: 300, paddingTop: 40 }}>
        <Image height={900} src={starpic} />
      </div>
      <Group position="center">
        <div className="Chapter-1-btn">
          <Text fw={600} c="white" ta="left">
            {btn1.name}
          </Text>
          <Button
            id={1}
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
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'FRONTEND',
                size: '55%',
                overflow: 'inside',

                children: (
                  <>
                    <DisplayMarkdown markdown={btn1.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn1.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn1.chapterIndex}
          </Button>
        </div>
        <div className="Chapter-2-btn">
          <Button
            id={2}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn1.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 14,
                paddingRight: 14,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'HTML',
                size: '55%',
                overflow: 'inside',

                children: (
                  <>
                    <DisplayMarkdown markdown={btn2.markdownUrl} />{' '}
                    <Button
                      disabled={completedChaps[btn2.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
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
        </div>
        <div className="Chapter-3-btn">
          <Text fw={600} c="white" ta="left">
            {btn3.name}
          </Text>
          <Button
            id={3}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn3.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'CSS',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn3.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn3.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn3.chapterIndex}
          </Button>
        </div>
        <div className="Chapter-4-btn">
          <Button
            id={4}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn4.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'LAYOUT',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn4.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn4.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn4.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn4.name}
          </Text>
        </div>
        <div className="Chapter-5-btn">
          <Button
            id={5}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn5.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'REACT',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn5.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn5.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn5.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn5.name}
          </Text>
        </div>
        <div className="Chapter-6-btn">
          <Text fw={600} c="white" ta="left">
            {btn6.name}
          </Text>
          <Button
            id={6}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn6.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'RECIPE SITE E1',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn6.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn6.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn6.chapterIndex}
          </Button>
        </div>
        <div className="Chapter-7-btn">
          <Button
            id={7}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn7.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'PORTFOLIO PAGE E2',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn7.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn7.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn7.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn7.name}
          </Text>
        </div>
        <div className="Chapter-8-btn">
          <Button
            id={8}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn8.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'WORLD CLOCK E3',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn8.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn8.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn8.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn8.name}
          </Text>
        </div>
        <div className="Chapter-9-btn">
          <Button
            id={9}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn9.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'HIGH CARD E4',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn9.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn9.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn9.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn9.name}
          </Text>
        </div>
        <div className="Chapter-10-btn">
          <Button
            id={10}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn10.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 13,
                paddingRight: 13,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'GUESS THE WORD E5',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn10.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn10.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn10.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn10.name}
          </Text>
        </div>
        <div className="Chapter-11-btn">
          <Button
            id={11}
            radius={'xl'}
            styles={(theme) => ({
              root: {
                backgroundColor: completedChaps[btn11.id] ? 'blue' : 'gray',
                border: 0,
                height: 33,
                paddingLeft: 11,
                paddingRight: 11,

                '&:hover': {
                  backgroundColor: theme.fn.darken('#00acee', 0.2),
                },
              },
            })}
            onClick={() => {
              handleClick();
              openModal({
                title: 'PROJECT 1: FRONTEND',
                size: '55%',
                overflow: 'inside',
                children: (
                  <>
                    <DisplayMarkdown markdown={btn11.markdownUrl} />
                    <Button
                      disabled={completedChaps[btn11.id]}
                      variant="filled"
                      color="red"
                      size="sm"
                      mt="md"
                      radius="md"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Mark as Completed
                    </Button>
                  </>
                ),
              });
            }}
          >
            {btn11.chapterIndex}
          </Button>
          <Text fw={600} c="white" ta="left">
            {btn11.name}
          </Text>
        </div>
      </Group>
    </>
  );
}

export default Frontend;
