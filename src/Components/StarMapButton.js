import React from 'react';
import { Button } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

const StarMapButton = ({
  color,
  setColor,
  setOpened,
  opened,
  setDone,
  done,
  btnName,
}) => {
  return (
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
          paddingLeft: 18,
          paddingRight: 18,

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
  );
};

export default StarMapButton;
