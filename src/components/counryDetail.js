import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './countryCard.css';

const Details = ( {countryInfo} ) => {
    console.log(countryInfo)
    return(
        <>
        {
            countryInfo.map((country) => (
             <div className='card'>   
                        <img src={country.flag} alt="Germany" />
                        <div className='card-body' style={{color:"white"}}>
                            <h3 className="country-name" style={{color:"white"}}>{country.name}</h3>
                            <p>
                                 <strong >Population: </strong>
                                {country.population}
                            </p>
                            <p className="country-region" style={{color:"white"}}>
                                <strong >Region: </strong>
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
    )

}

export default Details;