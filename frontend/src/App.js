import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch('http://localhost:8080/api/v1/time');
      const data = await response.json();
      setTime(data.time);
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
}

export default App;