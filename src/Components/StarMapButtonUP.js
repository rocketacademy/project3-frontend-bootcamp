import React from 'react';
import { Button, Text } from '@mantine/core';

const StarMapButtonA = ({ color, setOpened, btnName, topic }) => {
  return (
    <>
      <Text fw={600} c="white" ta="left">
        {topic}
      </Text>
      <Button
        // component="a"
        // target="_blank"
        // rel="noopener noreferrer"
        // href="https://twitter.com/mantinedev"
        // leftIcon={<IconAlertCircle size={30} />}
        onClick={() => {
          setOpened(true);
        }}
        radius={'xl'}
        styles={(theme) => ({
          root: {
            backgroundColor: color,
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
      >
        {btnName}
      </Button>
    </>
  );
};

export default StarMapButtonA;
