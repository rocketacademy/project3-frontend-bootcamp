import { Image } from '@mantine/core';
import React from 'react';
import mainstar from '../../images/Main tracker.png';

const MainMap = () => {
  return (
    <div
      style={{ height: 600, marginLeft: 300, paddingTop: 40, paddingLeft: 20 }}
    >
      <Image height={900} src={mainstar} />
    </div>
  );
};

export default MainMap;
