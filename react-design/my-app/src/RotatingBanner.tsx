import React, { useState } from 'react';
import './RotatingBanner.css';

type Props = {
  items: string[];
  currentIndex: number;
  onCustomClick: () => void;
};

function Banner({ items, currentIndex }: Props) {
  return <p>{items[currentIndex]}</p>;
}

function NextButton({ onCustomClick }) {
  return <button onClick={onCustomClick}>Next</button>;
}

function BackButton({ onCustomClick }) {
  return <button onClick={onCustomClick}>Prev</button>;
}

function Indices({ items, currentIndex, onCustomClick }: Props) {
  const entries = [];

  for (let i = 0; i < items.length; i++) {
    if (currentIndex === i) {
      entries.push(
        <button key={i} className="highlighted" onClick={onCustomClick}>
          {i}
        </button>
      );
    } else {
      entries.push(
        <button key={i} className="" onClick={onCustomClick}>
          {i}
        </button>
      );
    }
  }

  return <div>{entries}</div>;
}

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNextButton() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }
  function handlePrevButton() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }
  function handleIndexClick(event) {
    setCurrentIndex(Number(event.target.innerText));
    console.log(event);
  }
  return (
    <>
      <Banner items={items} currentIndex={currentIndex} />
      <BackButton onCustomClick={handlePrevButton} />
      <Indices
        items={items}
        currentIndex={currentIndex}
        onCustomClick={handleIndexClick}
      />
      <NextButton onCustomClick={handleNextButton} />
    </>
  );
}
