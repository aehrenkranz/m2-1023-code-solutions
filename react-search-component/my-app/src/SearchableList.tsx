import Banner from './Banner';
import SearchBar from './SearchBar';
import { ChangeEvent, useState } from 'react';
import './Banner.css';
import './SearchBar.css';
type Props = {
  list: string[];
};
export default function SearchableList({ list }: Props) {
  const [input, setInput] = useState('');

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  const results = list
    .map((element, index) => {
      if (element.includes(input.toLowerCase())) {
        return <Banner key={index} text={element} />;
      }
    })
    .filter((element) => {
      if (element) {
        return element;
      }
    });
  if (results.length === 0) {
    results.push(<h2>No results found.</h2>);
  }
  return (
    <>
      <SearchBar onCustomInput={handleInput} />
      <ul>{results}</ul>
    </>
  );
}
