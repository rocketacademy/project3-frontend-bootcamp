import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import { Card, Text, Grid, Container, Image, Paper } from '@mantine/core';

export default function TimeDisplay() {
  const [date, setDate] = useState(new Date());

  let interval = useRef();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  let tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    // <Container className="Time-header" size={400} px={50}>

    <Paper className="Time-header" shadow="sm" p="xl" radius="sm" withBorder>
      <Text ta="center" weight={600} size={14}>
        {date.toLocaleTimeString('en-US')}
        <br />
        {date.toLocaleDateString('en-GB')}
        <br />
        {day}
        <br />
      </Text>
    </Paper>

    // </Container>
  );
}
