import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import DisplayMarkdown from "./DisplayMarkdown";

function ModalDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        centered
        size="xl"
      >
        <DisplayMarkdown />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Frontend</Button>
      </Group>
    </>
  );
}

export default ModalDemo;
