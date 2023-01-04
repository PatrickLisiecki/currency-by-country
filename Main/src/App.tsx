import React, { useState } from 'react';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState<any[]>([]);
  //const [currencyData, setCurrencyData] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then(setCountryData)
    .then(() => setCountryName(""))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Country Name</label>
        <input 
          type="text" 
          id="search-input" 
          value={countryName} 
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button className="search-button">Search</button>
      </form>
      <ul>
        {countryData.map((country) => (
          <>
            <li>{country.currencies ? Object.values(country.currencies)[0].name : "-"}</li>
            <li>{country.currencies ? Object.values(country.currencies)[0].symbol : "-"}</li>
          </>
        ))}
       </ul>
      
    </div>
  )
}

export default App