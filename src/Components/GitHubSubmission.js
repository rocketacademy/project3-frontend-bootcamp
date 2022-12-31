import React from "react";
import { Button } from "@mantine/core";

const GitHubSubmissionBtn = ({ id, handleUpload }) => {
  return (
    <div>
      <Button
        variant="filled"
        color="blue"
        size="sm"
        mt="md"
        radius="md"
        onClick={() => {
          handleUpload(id);
        }}
      >
        Submit your GitHub repo here!
      </Button>
    </div>
  );
};

export default GitHubSubmissionBtn;
