const API_URL = `https://restcountries.com/v3.1`;

function getStatus(res: Response) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
}

export const getCountryData = (name: string) => {
    return fetch(`${API_URL}/name/${name}`).then(getStatus);
    // .then((response) => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw new Error("Fetch Request Failed");
    // })
};
