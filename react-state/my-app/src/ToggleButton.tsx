import { useState } from 'react';
export default function ToggleButton({ text, color }) {
  const [isClicked, setState] = useState(false);
  function handleClick() {
    if (isClicked) {
      return setState(false);
    } else {
      return setState(true);
    }
  }
  if (isClicked) {
    return (
      <button style={{ color: 'red' }} onClick={handleClick}>
        you clicked this
      </button>
    );
  }
  return (
    <button
      style={{ backgroundColor: color, color: 'black' }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
