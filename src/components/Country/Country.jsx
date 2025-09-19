import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    
     const handleVisited = () => {
        
        // 
        setVisited(visited ? false : true);
        handleVisitedCountries(country);
        
     }
    
    return (
        // <div className={`country ${visited ? 'country-visited' : 'country-not-visited' }`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    ); 
};

export default Country;