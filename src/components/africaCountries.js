import React from 'react';
import './countryCard.css';

    const Countries = ({ countries }) => {
        return(
            <>
                {
                    countries.map((country) => (
                    <div className='card'>   
                        <img src={country.flag} alt="Germany" />
                        <div className='card-body'>
                            <h3 className="country-name">{country.name}</h3>
                            <p>
                                 <strong>Population: </strong>
                                {country.population}
                            </p>
                            <p className="country-region">
                                <strong>Region: </strong>
                                {country.region}
                            </p>
                            <p>
                                <strong>Capital: </strong>
                                 {country.capital}
                            </p>
                        </div>    
                    </div>
                    ))
                }
            </>    
         );
    };

    export default Countries;