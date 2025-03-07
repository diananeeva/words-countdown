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

  return (
    <div className="timer">
      <h2 className='h2-timer'>Time remaining: {timeLeft} seconds</h2>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
