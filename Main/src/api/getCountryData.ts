const API_URL = `https://restcountries.com/v3.1`

export const getCountryData = (name: string) => {
    return fetch(`${API_URL}/name/${name}`)
    .then((response) => response.json())
    .catch((error) => {
        console.log(error)
    });
}