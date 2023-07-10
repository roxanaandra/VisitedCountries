import React, { useState } from 'react';
import CountryList from './CountryList';
import Map from './Map';

const Main = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleCountrySelect = (country) => {
        if (selectedCountries.includes(country)) {
            setSelectedCountries(selectedCountries.filter((c) => c !== country))
        } else {
            setSelectedCountries([...selectedCountries, country]);
        }
    }

    return (
        <main>
            <Map selectedCountries={selectedCountries} />
            <CountryList onCountrySelect={handleCountrySelect} />
        </main>
    )
}

export default Main;