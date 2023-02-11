import { useState } from 'react';
import './App.css'

export default function App() {
  let newTime = new Date().toLocaleTimeString();
  //ceate the hook

  const [ctime, setCTime] = useState(newTime);

  const UpdateTime = () => {
    let Time = new Date().toLocaleTimeString();
    setCTime(Time);
  }
  setInterval(UpdateTime, 1000);
  return (
    <main>
      <>
        <div>
          <h1>{newTime}</h1>
        </div>
      </>
    </main>
  )
}
