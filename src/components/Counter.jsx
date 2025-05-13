import React from 'react';
import CountUp from 'react-countup';

function Counter({ end, duration = 2, start = 0, prefix = '', suffix = '', children }) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
    >
      {children}
    </CountUp>
  );
}

export default Counter;
