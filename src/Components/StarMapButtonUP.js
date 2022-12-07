import React from 'react';
import { Button, Text } from '@mantine/core';
import {
  openContextModal,
  openModal,
  closeAllModals,
  openConfirmModal,
} from '@mantine/modals';
import { Modal } from '@mantine/core';
import DisplayMarkdown from './DisplayMarkdown';
import { useEffect, useState } from 'react';
import Forum from './Forum';

const StarMapButtonUP = ({
  color,
  opened,
  setOpened,
  btnName,
  topic,
  openChapt1,
  markdownUrl,
}) => {
  // const [opened, setOpened] = useState(false);

  // const openModal = () =>
  //   openConfirmModal({
  //     title: 'Please confirm your action',
  //     children: <DisplayMarkdown markdownUrl={markdownUrl} />,
  //     labels: { confirm: 'Confirm', cancel: 'Cancel' },
  //     onCancel: () => console.log('Cancel'),
  //     onConfirm: () => console.log('Confirmed'),
  //   });

  return (
    <>
      <Text fw={600} c="white" ta="left">
        {topic}
      </Text>

      {/* <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="55%"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <DisplayMarkdown />
        <DisplayMarkdown markdown={markdownUrl} />
        <Forum />
      </Modal> */}

      <Button
        // component="a"
        // target="_blank"
        // rel="noopener noreferrer"
        // href="https://twitter.com/mantinedev"
        // leftIcon={<IconAlertCircle size={30} />}
        onClick={() => {
          openModal({
            title: 'Subscribe to newsletter',

            children: (
              <>
                <DisplayMarkdown markdownUrl={markdownUrl} />
              </>
            ),
          });
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

export default StarMapButtonUP;
