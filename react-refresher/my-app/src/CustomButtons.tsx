import { useState } from 'react';
type Props = {
  color: string;
};
export function CustomButtons({ color }: Props) {
  const [clicked, setState] = useState(0);
  return (
    <span>
      <button
        style={{ backgroundColor: color, color: 'black' }}
        onClick={function () {
          return setState(clicked + 1);
        }}>
        Up
      </button>
      <p>{clicked}</p>
      <button
        style={{ backgroundColor: color, color: 'black' }}
        onClick={function () {
          return setState(clicked - 1);
        }}>
        Down
      </button>
    </span>
  );
}
