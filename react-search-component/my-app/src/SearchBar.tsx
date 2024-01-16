import { ChangeEvent } from 'react';

type Props = {
  onCustomInput: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchBar({ onCustomInput }: Props) {
  return (
    <>
      <span>
        <input
          className="search-bar"
          placeholder="search"
          type="text"
          onInput={onCustomInput}></input>
      </span>
    </>
  );
}
