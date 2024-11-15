import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, setTimeLeft]);

  return <h2>Оставащо време: {timeLeft} секунди</h2>;
};

export default Timer;
