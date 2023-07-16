import React from 'react';
import MapPlaceholder from '../assets/images/map-placeholder.png';

const Map = ({ selectedCountries }) => {
    const totalSelectedCountries = selectedCountries.length;
    const percentageVisited = ((totalSelectedCountries / 195) * 100).toFixed(1);




    return (
        <div>
            <div className="map-container">
                <img className="map-placeholder" src={MapPlaceholder} />
            </div>
            <h2>Selected Countries:</h2>
            {selectedCountries.length === 0 ? (
                <p>No countries selected.</p>
            ) : (
            <div>
                {selectedCountries.map((country, index) => (
                <React.Fragment key={index}>
                    {country}
                    {index !== selectedCountries.length - 1 && ', '}
                </React.Fragment>
                ))}
                <p>Total Selected Countries: {totalSelectedCountries}</p>
                <p>Percentage of Globe Visited: {percentageVisited}%</p>

            </div>
            )
            }
        </div>
    )
}

export default Map;

