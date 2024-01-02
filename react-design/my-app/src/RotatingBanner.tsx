type Props = {
  items: string[];
};

function Name({ items }: Props) {
  return <p>{items[0]}</p>;
}

function NextButton() {
  return <button>Next</button>;
}

function BackButton() {
  return <button>Prev</button>;
}

function Indices({ items }: Props) {
  const entries = [];
  for (let i = 0; i < items.length; i++) {
    entries.push(<button key={i}>{i + 1}</button>);
  }
  return <div>{entries}</div>;
}

export default function RotatingBanner({ items }: Props) {
  return (
    <>
      <Name items={items} />
      <BackButton />
      <Indices items={items} />
      <NextButton />
    </>
  );
}
