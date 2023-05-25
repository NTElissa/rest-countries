import React from 'react';

export const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  const selectStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '8px',
    color: 'black',
    fontSize: '16px',
  };

  const optionStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <select onChange={selectHandler} style={selectStyle}>
      <option className="option" style={optionStyle}>
        Filter by Region
      </option>
      <option className="option" style={optionStyle} value="Africa">
        Africa
      </option>
      <option className="option" style={optionStyle} value="America">
        America
      </option>
      <option className="option" style={optionStyle} value="Asia">
        Asia
      </option>
      <option className="option" style={optionStyle} value="Europe">
        Europe
      </option>
      <option className="option" style={optionStyle} value="Oceania">
        Oceania
      </option>
    </select>
  );
};
