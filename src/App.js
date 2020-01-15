// import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar.js';
import Home from './containers/Home.js';
import AboutUs from './containers/AboutUs';
import FooterBar from './components/FooterBar.js';
import Country from './containers/Country.js';
import Currency from './containers/Currency.js';
import ContactUs from './containers/ContactUs.js';
import City from './containers/City.js';
import Time from './containers/Time.js';
import GetCityInfo from './containers/GetCityInfo';
import Resturant from './containers/Resturant';
import Attraction from './containers/Attraction';
import Weather from './containers/Weather';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <HeaderBar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={AboutUs} />
          <Route path="/Country" component={Country} />
          <Route path="/Currency" component={Currency} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/City/:id" exact component={City} />
          <Route path="/Time/:id"  exact component={Time}/>
          <Route path="/GetCityInfo/:id"  exact component={GetCityInfo}/>
          <Route path="/Resturant/:id"  exact component={Resturant}/>
          <Route path="/Attraction/:id"  exact component={Attraction}/>  
          <Route path="/Weather/:id/:id2"  exact component={Attraction}/>  
          <FooterBar />
          </Router>
          </div>
    );
  }
}

export default App;
