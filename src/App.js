import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const [isDay, setisDay] = useState(true)
  
  return (
    <div className={`box ${isDay ? 'daylight' : ''}`}>
      <h1>Have a Good {isDay ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={() => setCount(++count)}>Update counter</button>
      <button onClick={() => setisDay(!isDay)}>Switch Day</button>
    </div>
  )
}

export default App;
