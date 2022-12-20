import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import { Card, Text, Grid, Container, Image, Paper } from '@mantine/core';

export default function TimeDisplay() {
  const [date, setDate] = useState(new Date());
  const [timerDays, setTimerDays] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('May 14 2022').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
      }
    });
  };

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
    startTimer();

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
        {timerDays}
      </Text>
    </Paper>

    // </Container>
  );
}
