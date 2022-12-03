import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Text, Image } from '@mantine/core';
import Frontend from './CourseComponents/Frontend';
import starpic from '../images/star map-01-01.png';

const CourseMaterials = () => {
  return (
    // <div className="git-book">
    <>
      <div style={{ height: 800, marginLeft: 300, paddingTop: 40 }}>
        <Image height={900} src={starpic} />
      </div>
      <Frontend />
    </>
    // </div>
  );
};

export default CourseMaterials;
