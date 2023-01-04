import React, { useState } from 'react';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then(setCountryData)

    setCountryName("");
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
            <li>{country["currencies"]["PEN"]["name"]}</li>
            <li>{country["currencies"]["PEN"]["symbol"]}</li>
          </>
        ))}
       </ul>
      
    </div>
  )
}

export default App