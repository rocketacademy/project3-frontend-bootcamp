import React from 'react';
import api from '../api/materials';
import { useState, useEffect } from 'react';
import {
  Card,
  Text,
  Container,
  HoverCard,
  Avatar,
  Group,
  Anchor,
  Stack,
} from '@mantine/core';

const Gitbook = () => {
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await api.get('/materials');
        console.log(response.data);
        setMaterial(response.data[0].body);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchMaterials();
  }, []);
  return <div className="test"></div>;
};

export default Gitbook;
