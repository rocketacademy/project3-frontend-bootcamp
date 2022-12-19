import React from 'react';
import { Button } from '@mantine/core';
import { useState } from 'react';

const MarkCompleteBtn = ({ completedChaps, handleSubmit, id }) => {
  const [disable, setDisable] = useState(completedChaps);

  return (
    <div>
      <Button
        disabled={disable}
        variant="filled"
        color="red"
        size="sm"
        mt="md"
        radius="md"
        onClick={() => {
          handleSubmit(id);
          setDisable(true);
        }}
      >
        Mark as Completed
      </Button>
    </div>
  );
};

export default MarkCompleteBtn;
