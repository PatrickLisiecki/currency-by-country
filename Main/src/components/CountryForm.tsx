import React, { useState } from "react";
import { getCountryData } from "../api/getCountryData";
import "../CountryForm.css";

function CountryForm() {
    const [countryName, setCountryName] = useState("");
    const [countryData, setCountryData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const countryContainer =
            document.querySelector<HTMLElement>(".country-container");

        if (countryContainer) {
            countryContainer.classList.toggle("active");
        }

        getCountryData(countryName)
            .then(setCountryData)
            .then(() => {
                setIsLoading(false);
                setCountryName("");
            })
            .catch((error) => {
                alert(error);
                setIsLoading(false);
            });
    };

    return (
        <>
            <main>
                <div className="main">
                    <header>
                        <div className="header-container">
                            <h1>
                                Currency <span>Finder</span>
                            </h1>
                            <h3>Find Out Which Currency a Country Uses</h3>
                        </div>
                    </header>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="search-input"
                                name="search-input"
                                id="search-input"
                                placeholder="Country"
                                required
                                value={countryName}
                                onChange={(e) => setCountryName(e.target.value)}
                            />
                            <button className="search-button">
                                {isLoading ? (
                                    "Loading..."
                                ) : (
                                    <img src="../images/glass.svg" />
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="country-container">
                        {countryData.map((country, index) => (
                            <>
                                <div className="left-side">
                                    <div
                                        key={index}
                                        className="flag-image-container"
                                    >
                                        <img
                                            src={
                                                country.flags
                                                    ? country.flags.png
                                                    : ""
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="right-side">
                                    <h1 key={index}>{country.name.common}</h1>
                                    <span key={index}>
                                        Currency Name:{" "}
                                        <span className="inner-span">
                                            {country.currencies
                                                ? Object.values(
                                                      country.currencies
                                                  )[0].name
                                                : "-"}
                                        </span>
                                    </span>
                                    <span key={index}>
                                        Symbol:{" "}
                                        <span className="inner-span">
                                            {country.currencies
                                                ? Object.values(
                                                      country.currencies
                                                  )[0].symbol
                                                : "-"}
                                        </span>
                                    </span>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default CountryForm;
