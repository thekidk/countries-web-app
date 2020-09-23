import React, {Component} from 'react'
import '../App.css';
import {Button} from './Button';
import './RegionSection.css';
import './counryDetail';
import {Link} from 'react-router-dom';
import Details from './counryDetail';

class RegionSection extends Component {

    state = {
        countryName: null,
        country: []
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data.countryName)
        
        var api = `https://restcountries.eu/rest/v2/name/${data.countryName}`;
        
        fetch(api)
         .then((res) => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
         })
        .then((info) => {
            this.setState({country : info});
            console.log("DATA STORED");
         })
        .catch((error) => {
         console.log('error: ' + error + '. Failed API request.');
         this.setState({ requestFailed: true });
        });

    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
render() {
    const {countryName} = this.state
    return (
        <>
        <div className='region-container'>
            <video src='/video-2.mp4' autoPlay loop muted /> 
            <h1>Find a Country</h1>
            <br/>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <li className="container">
                <input id="search"
                     class="search"
                     type="text"
                     placeholder="Search for a country"
                     name="countryName"
                     onChange={this.handleInputChange}
                />
            </li>
            <br/>
            {<center><button buttonStyle='btn--outline' 
                        onClick={this.handleSubmit}>Search</button></center>}
            </form>
        </div>
        <center><Details countryInfo={this.state.country} /></center>
        </>
    )

}

}

export default RegionSection;