import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import home from './components/pages/home';
import Africa from './components/pages/Africa';
import Americas from './components/pages/Americas';
import Europe from './components/pages/Europe';
import Asia from './components/pages/Asia';
import Oceania from './components/pages/Oceania';
import Detail from './components/counryDetail';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/africa' component={Africa} />
          <Route path='/americas' component={Americas} />
          <Route path='/europe' component={Europe} />
          <Route path='/asia' component={Asia} />
          <Route path='/oceania' component={Oceania} />
          <Route path='/countryDetail' component={Detail}/>
        </Switch>
      </Router>
    </>
  );
}



export default App;
