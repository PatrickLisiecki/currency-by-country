import React, { useState } from 'react';
import './App.css';

type Currency = {
  name: string,
  symbol: string,
}

function App() {
  const [countryName, setCountryName] = useState("");
  const [currency, setCurrency] = useState<Currency>({name: "", symbol: ""});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3/name/poland`)
    .then((response => response.json()))
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
    </div>
  )
}

export default App