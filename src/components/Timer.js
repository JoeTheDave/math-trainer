import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds } from 'date-fns';
import { padStart } from 'lodash';
import '../assets/Timer.css';

const Timer = ({ time }) => {
  const [ms, setMs] = useState(0);
  let interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      setMs(differenceInMilliseconds(new Date(), time))
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });
  

  return (
    <div className="timer">
      {`${Math.floor(ms / 1000)}:${padStart(Math.floor(ms % 1000 / 10), 2, '0')}`}
    </div>
  );
};

export default Timer;
