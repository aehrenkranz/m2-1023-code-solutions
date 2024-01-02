import { useState } from 'react';
import './RotatingBanner.css';

type Props = {
  items: string[];
  currentIndex: number;

};

function Banner({ items, currentIndex }: Props) {
  return <p>{items[currentIndex]}</p>;
}

function NextButton() {
  return <button>Next</button>;
}

function BackButton() {
  return <button>Prev</button>;
}

function Indices({ items, currentIndex}: Props) {
  const entries = [];

  for (let i = 0; i < items.length; i++) {
      if(currentIndex===i){
        entries.push(
        <button key={i} className="highlighted">
          {i}
        </button>)
      }
      else {entries.push(
        <button key={i} className="">
          {i}
        </button>
      )}
  }


  return <div>{entries}</div>;
}

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Banner items={items} currentIndex={currentIndex} />
      <BackButton />
      <Indices items={items} currentIndex={currentIndex} />
      <NextButton />
    </>
  );
}
