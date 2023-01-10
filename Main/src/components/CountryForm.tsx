import React, { useState } from 'react'
import { getCountryData } from '../api/getCountryData'

function CountryForm() {
    const [countryName, setCountryName] = useState("")
    const [countryData, setCountryData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        getCountryData(countryName)
        .then(setCountryData)
        .then(() => {
            setIsLoading(false)
            setCountryName("")
        })
    }

    return (
        <>
            <header>
                <div className="header-container">
                    <h1>Currency <span>Finder</span></h1>
                    <h3>Find Out Which Currency a Country Uses</h3>
                </div>
            </header>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search-input">Country Name</label>
                    <input 
                        type="text" 
                        className="search-text" 
                        placeholder="Country"
                        required
                        value={countryName} 
                        onChange={(e) => setCountryName(e.target.value)}
                    />
                    <button className="search-button">{isLoading ? "Loading..." : "Search"}</button>
                </form>
            </div>
            <div className="country-container">
                {countryData.map((country) => (
                    <>
                        <p>{country.name.common}</p>
                        <div className="flag-image-container"><img src={country.flags ? country.flags.png : ""}/></div>
                        <span>Currency Name: {country.currencies ? Object.values(country.currencies)[0].name : "-"}</span>
                        <span>Symbol: {country.currencies ? Object.values(country.currencies)[0].symbol : "-"}</span>
                    </>
                ))}
            </div>
        </>
    )
}

export default CountryForm