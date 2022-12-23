import { useState, useEffect } from "react";
import { Modal, Button, Group } from "@mantine/core";
import DisplayMarkdown from "./DisplayMarkdown";
import axios from "axios";

function ModalDemo() {
  const [opened, setOpened] = useState(false);
  const [frontend, setFrontend] = useState({});
  // useEffect(() => {
  //   if (user) {
  //     const getFrontend = async () => {
  //       // const accessToken = await getAccessTokenSilently({
  //       //   audience: "https://stayhere/api",
  //       //   scope: "read:current_user",
  //       // });
  //       axios
  //         .get(`${BACKEND_URL}/chapters/${chapter_name}`, {
  //           params: {
  //             ownerEmail: user.email,
  //           },
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then((response) => {
  //           setFrontend(response.data);
  //         });
  //     };

  //     getProperties();
  //   }
  // }, [user]);

  useEffect(() => {
    const getFrontend = async () => {
      axios.get("http://localhost:8080/chapters/15").then((response) => {
        setFrontend(response.data);
      });
    };
    getFrontend();
  }, []);

  console.log(frontend);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        centered
        size="xl"
      >
        <DisplayMarkdown markdown={frontend.markdownUrl} />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Layout</Button>
      </Group>
    </>
  );
}

export default ModalDemo;
