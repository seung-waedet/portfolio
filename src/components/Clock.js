import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right text-yellow-500 mb-4">
      {time.toLocaleDateString()} {time.toLocaleTimeString()} WAT
    </div>
  );
};

export default Clock;