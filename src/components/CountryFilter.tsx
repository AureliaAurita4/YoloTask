import React, { useState } from 'react';

type FilterProps = {
    onFilterChange: (filter: string) => void;
  };

const CountryFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [
      filter,
      setFilter
    ] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
      onFilterChange(e.target.value);
    };
  
    return (
      <div>
        <input 
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Filter by code"
        />
      </div>
    );
};
  
export default CountryFilter;
  