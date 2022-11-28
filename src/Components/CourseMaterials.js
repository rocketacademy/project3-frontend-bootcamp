import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Text, Image } from '@mantine/core';
import ModalDemo from './ModalDemo';
import starpic from '../images/Star-map-test-01.png';

const CourseMaterials = () => {
  return (
    <div className="git-book">
      <div style={{ height: 850, marginLeft: 300 }}>
        <Image height={900} src={starpic} />
      </div>
      <ModalDemo />
    </div>
  );
};

export default CourseMaterials;
