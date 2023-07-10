import React from 'react';

const Country = ({ country, flag, onSelect }) => {
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    value={country}
                    onChange={() => onSelect(country)}
                />
                <img 
                    className="country-flag"  
                    src={`https://flagcdn.com/${flag}.svg`}
                />
                {country}
            </label>
        </li>

    )
}

export default Country;