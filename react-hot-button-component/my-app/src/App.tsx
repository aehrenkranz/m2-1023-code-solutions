import HotButton from './HotButton';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './HotButton.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  let styling = 'default';
  if (count > 2) {
    styling = 'threeClicks';
  }
  if (count > 5) {
    styling = 'sixClicks';
  }
  if (count > 8) {
    styling = 'nineClicks';
  }
  if (count > 11) {
    styling = 'twelveClicks';
  }
  if (count > 14) {
    styling = 'fifteenClicks';
  }
  if (count > 17) {
    styling = 'eighteenClicks';
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <HotButton currentClass={styling} onCustomClick={handleClick} />
      </div>
    </>
  );
}

export default App;
