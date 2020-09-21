import React from 'react'
import '../App.css';
import {Button} from './Button';
import './RegionSection.css';

function RegionSection() {
    return (
        <div className='region-container'>
            <video src='/video-2.mp4' autoPlay loop muted /> 
            <h1>Select a Region</h1>
            <br/>
            <br/>
            <br/>
            <li className="container">
                <input id="search"
                     class="search"
                     type="text"
                     placeholder="Search for a country"
                />
            </li>
            <br/>
            {<Button buttonStyle='btn--outline'>Search</Button>}
        </div>
    )
}

export default RegionSection;