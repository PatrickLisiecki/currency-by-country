import React, { useState } from 'react'

function CountryFrom() {
    const [countryName, setCountryName] = useState("");
    const [countryData, setCountryData] = useState<any[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => response.json())
        .then(setCountryData)
        .then(() => setCountryName(""))
    }

    return (
        <>
            <header>
                <h1>Find Which Currency a Country Uses</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-input">Country Name</label>
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Country"
                    value={countryName} 
                    onChange={(e) => setCountryName(e.target.value)}
                />
                <button className="search-button">Search</button>
            </form>
            {countryData.map((country) => (
                <>
                    <div className="flag-image-container"><img src={country.flags ? country.flags.png : ""}/></div>
                    <div>{country.currencies ? Object.values(country.currencies)[0].name : "-"}</div>
                    <div>{country.currencies ? Object.values(country.currencies)[0].symbol : "-"}</div>
                </>
            ))}
        </>
    )
}

export default CountryFrom