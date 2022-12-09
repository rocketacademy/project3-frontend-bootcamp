import { Image } from '@mantine/core';
import React from 'react';
import test from '../../images/test 1.png';

const Foundations = () => {
  return (
    <div style={{ height: 800, marginLeft: 300, paddingTop: 40 }}>
      <Image height={900} src={test} />
    </div>
  );
};

export default Foundations;
