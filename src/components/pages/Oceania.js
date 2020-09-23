import React, { Component } from 'react';
import '../../App.css';
import '../countryCard.css';
import Countries from '../africaCountries';

class Oceania extends Component {

    state = {
        countries: []
    }

    componentDidMount() {
        const api = 'https://restcountries.eu/rest/v2/region/oceania';
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                this.setState({countries : data})
            })
            .catch(console.log)
    }

    render(){
        return(
            <>
                <h1 className='oceania'>Oceania</h1>
                <center><Countries countries={this.state.countries} /></center>
            </>
            
        )
    }

}

export default Oceania;