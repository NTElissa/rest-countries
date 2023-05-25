import React, { useState } from 'react';

export default function SearchInput({ onSearch }) {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const inputStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '8px',
    color: 'black',
    fontSize: '16px',
    width:'400px',
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search a Country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={inputStyle}
      />
    </form>
  );
}
