import { ChangeEvent, useState } from 'react';
import './PasswordField.css';

export default function PasswordField() {
  const [input, setInput] = useState('');
  let text = '';
  let symbol = '';
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  if (!input) {
    symbol = '\u{274C}';
    text = 'A password is required.';
  } else if (input.length < 8) {
    symbol = '\u{274C}';
    text = 'Your password is too short.';
  } else if (input.length >= 8) {
    symbol = '\u{2705}';
    text = '';
  }

  return (
    <div className="container">
      <label className="password-label">
        <div className="label-text">Password</div>
        <input
          name="password"
          type="password"
          required
          value={input}
          onChange={handleInput}></input>
        <span className="symbol">{symbol}</span>
        <p id="status" className="status">
          {text}
        </p>
      </label>
    </div>
  );
}
