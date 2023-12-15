import { useState } from 'react';
import './ToggleSwitch.css';
export default function ToggleSwitch() {
  const [state, changeState] = useState(false);
  let containerClass = 'OFF';
  let innerButtonClass = 'inner-button-left';
  function handleClick() {
    changeState(!state);
  }

  if (state) {
    containerClass = 'ON';
    innerButtonClass = 'inner-button-right';
  }

  return (
    <>
      <div className={containerClass}>
        <button onClick={handleClick} className={innerButtonClass}></button>
      </div>
      <p>{containerClass}</p>
    </>
  );
}
