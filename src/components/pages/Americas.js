import React, { Component } from 'react';
import '../../App.css';
import '../countryCard.css';
import Countries from '../africaCountries';

class Americas extends Component {

    state = {
        countries: []
    }

    componentDidMount() {
        const api = 'https://restcountries.eu/rest/v2/region/americas';
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
                <h1 className='americas'>North America & South America</h1>
                <Countries countries={this.state.countries} />
            </>
        )
    }

}

export default Americas;
