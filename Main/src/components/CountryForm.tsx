import React, { useState } from 'react'

function CountryForm() {
    const [countryName, setCountryName] = useState("")
    const [countryData, setCountryData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => response.json())
            .then(setCountryData)
            .then(() => setCountryName(""))
            .then(() => setIsLoading(false))
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }
    }

    return (
        <>
            <header>
                <div className="header-section">
                    <h1>Currency <span>Finder</span></h1>
                    <h3>Find Which Currency a Country Uses</h3>
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