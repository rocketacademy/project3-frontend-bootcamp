import { useState, useEffect } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import DisplayMarkdown from '../DisplayMarkdown';
import api from '../../api/materials';
import Forum from '../Forum';

import { IconAlertCircle } from '@tabler/icons';
import StarMapButtonDown from '../StarMapButtonDown';
import StarMapButtonUP from '../StarMapButtonUP';

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
  const [btn7, setBtn7] = useState('');
  const [btn8, setBtn8] = useState('');
  const [btn9, setBtn9] = useState('');
  const [btn10, setBtn10] = useState('');
  const [btn11, setBtn11] = useState('');
  const [btn12, setBtn12] = useState('');
  const [topic, setTopic] = useState('');

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
        setBtn7(response.data[6]);
        setBtn8(response.data[7]);
        setBtn9(response.data[8]);
        setBtn10(response.data[9]);
        setBtn11(response.data[10]);
        setBtn12(response.data[11]);
        setDone(response.data);
        console.log('point', btn1.point);
        console.log('topic', btn1.topic);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchCompleted();
  }, []);

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
            color={btn1.completed ? 'blue' : 'grey'}
            btnName={btn1.point}
            topic={btn1.topic}
          />
        </div>
        <div className="Chapter-2-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn2.completed ? 'blue' : 'grey'}
            btnName={btn2.point}
            topic={btn2.topic}
          />
        </div>
        <div className="Chapter-3-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn3.completed ? 'blue' : 'grey'}
            btnName={btn3.point}
            topic={btn3.topic}
          />
        </div>
        <div className="Chapter-4-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn4.completed ? 'blue' : 'grey'}
            btnName={btn4.point}
            topic={btn4.topic}
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
            color={btn6.completed ? 'blue' : 'grey'}
            btnName={btn6.point}
            topic={btn6.topic}
          />
        </div>
        <div className="Chapter-7-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn7.completed ? 'blue' : 'grey'}
            btnName={btn7.point}
            topic={btn7.topic}
          />
        </div>
        <div className="Chapter-8-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn8.completed ? 'blue' : 'grey'}
            btnName={btn8.point}
            topic={btn8.topic}
          />
        </div>
        <div className="Chapter-9-btn">
          <StarMapButtonUP
            setOpened={setOpened}
            color={btn9.completed ? 'blue' : 'grey'}
            btnName={btn9.point}
            topic={btn9.topic}
          />
        </div>
        <div className="Chapter-10-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn10.completed ? 'blue' : 'grey'}
            btnName={btn10.point}
            topic={btn10.topic}
          />
        </div>
        <div className="Chapter-11-btn">
          <StarMapButtonDown
            setOpened={setOpened}
            color={btn11.completed ? 'blue' : 'grey'}
            btnName={btn11.point}
            topic={btn11.topic}
          />
        </div>
      </Group>
    </>
  );
}

export default ModalDemo;
