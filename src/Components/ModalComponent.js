import { Button, Group } from '@mantine/core';
import { openModal, closeAllModals } from '@mantine/modals';
import { TextInput, Image } from '@mantine/core';
import React from 'react';
import DisplayMarkdown from './DisplayMarkdown';

function ModalComponent() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          openModal({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <DisplayMarkdown />
              </>
            ),
          });
        }}
      ></Button>
    </Group>
  );
}
export default ModalComponent;
