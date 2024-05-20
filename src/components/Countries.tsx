import React from 'react';
import Country from '../interfaces/Country';

type CountryProps = {
  countries: Country[];
};

const CountryTable: React.FC<CountryProps> = ({ countries }) => {
  return (
    <table className="Countries">
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.code}>
            <td>{country.name}</td>
            <td>{country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
