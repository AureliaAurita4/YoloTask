import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import CountryFilter from './components/CountryFilter';
import Countries from './components/Countries';
import Country from './interfaces/Country';
import { GET_COUNTRIES } from './apollo/queries';
import './App.css';

const App: React.FC = () => {
  const { data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);
  
  const [
    filter,
    setFilter
  ] = useState('');

  const filteredData = data?.countries.filter((country) =>
    country.code.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Country List</h1>
      <CountryFilter onFilterChange={ setFilter } />
      {filteredData && <Countries countries={ filteredData } />}
    </div>
  );
}

export default App;
