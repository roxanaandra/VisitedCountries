import React from 'react';

const Map = ({ selectedCountries }) => {
    return (
        <div>
            <h2>Selected Countries:</h2>
            {selectedCountries.length === 0 ? (
                <p>No countries slected.</p>
            ) : (
            <ul>
                {selectedCountries.map((country) => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
            )
            }
        </div>
        
    )
}

export default Map;