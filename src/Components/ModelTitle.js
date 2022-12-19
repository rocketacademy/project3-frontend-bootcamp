import React from 'react';
import { Text } from '@mantine/core';

const ModelTitle = ({ id }) => {
  return (
    <div>
      <Text fw={600} c="white" ta="left">
        {id}
      </Text>
    </div>
  );
};

export default ModelTitle;
