import { useState, useEffect } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import DisplayMarkdown from './DisplayMarkdown';
import api from '../api/materials';
import Forum from './Forum';

import { IconAlertCircle } from '@tabler/icons';
import StarMapButton from './StarMapButton';

function ModalDemo() {
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState('gray');
  const [done, setDone] = useState('');
  const [btn1, setBtn1] = useState('');
  const [btn2, setBtn2] = useState('');
  const [btn3, setBtn3] = useState('');
  const [btn4, setBtn4] = useState('');
  const [btn5, setBtn5] = useState('');
  const [btn6, setBtn6] = useState('');

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const response = await api.get('/chapters');
        console.log('from completed', response.data);

        setBtn1(response.data[0]);
        setBtn2(response.data[1]);
        setBtn3(response.data[2]);
        setBtn4(response.data[3]);
        setBtn5(response.data[4]);
        setBtn6(response.data[5]);
        setDone(response.data);
        console.log('point', btn1.point);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchCompleted();
  }, []);

  // let buttonColor = Object.values(done).map((chapters, index) => {
  //   return (
  //     <div className="button-map" key={index}>
  //       {chapters.completed === true ? (
  //         <Button
  //           color={'yellow'}
  //           onClick={() => {
  //             setOpened(true);
  //           }}
  //         >
  //           {' '}
  //           A{' '}
  //         </Button>
  //       ) : (
  //         <Button
  //           color={'gray'}
  //           onClick={() => {
  //             setOpened(true);
  //           }}
  //         >
  //           {' '}
  //           B{' '}
  //         </Button>
  //       )}
  //     </div>
  //   );
  // });

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
        <Forum />
      </Modal>
      <Group position="center">
        {/* {Object.keys(done).map((chapters) => (
        <Button
          data={chapters}
          color={'yellow'}
          onClick={() => {
            setOpened(true);
          }}
        >
          {' '}
          front end
        </Button>
      ))} */}
        {/* <Button
          color={color}
          onClick={() => {
            setOpened(true);
          }}
        >
          {' '}
          front end
        </Button> */}
        <div className="Chapter-1-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn1.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn1.point}
          />
        </div>
        <div className="Chapter-2-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn2.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn2.point}
          />
        </div>
        <div className="Chapter-3-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn3.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn3.point}
          />
        </div>
        <div className="Chapter-4-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn4.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn4.point}
          />
        </div>
        <div className="Chapter-5-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn5.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn5.point}
          />
        </div>
        <div className="Chapter-6-btn">
          <StarMapButton
            setOpened={setOpened}
            opened={opened}
            color={btn6.completed ? 'purple' : 'grey'}
            setColor={setColor}
            done={done}
            setDone={setDone}
            btnName={btn6.point}
          />
        </div>
      </Group>
    </>
  );
}

export default ModalDemo;
