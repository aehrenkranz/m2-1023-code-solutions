import { useState } from 'react';
import './RotatingBanner.css';
type Props = {
  items: string[];
};
type ButtonProps = {
  onCustomClick: () => void;
};
type BannerProps = {
  items: string[];
  currentIndex: number;
};

type IndicesProps = {
  items: string[];
  currentIndex: number;
  onCustomClick: (index: number) => void;
};

function Banner({ items, currentIndex }: BannerProps) {
  return <p>{items[currentIndex]}</p>;
}

function NextButton({ onCustomClick }: ButtonProps) {
  return <button onClick={onCustomClick}>Next</button>;
}

function BackButton({ onCustomClick }: ButtonProps) {
  return <button onClick={onCustomClick}>Prev</button>;
}

function Indices({ items, currentIndex, onCustomClick }: IndicesProps) {
  const entries = [];

  for (let i = 0; i < items.length; i++) {
    if (currentIndex === i) {
      entries.push(
        <button
          key={i}
          className="highlighted"
          onClick={() => {
            onCustomClick(i);
          }}>
          {i}
        </button>
      );
    } else {
      entries.push(
        <button
          key={i}
          className=""
          onClick={() => {
            onCustomClick(i);
          }}>
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
  function handleIndexClick(index: number) {
    setCurrentIndex(index);
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
