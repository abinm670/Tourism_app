import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar.js';
import Home from './containers/Home.js';
import AboutUs from './containers/AboutUs';
import FooterBar from './components/FooterBar.js';
import Country from './containers/Country.js';
import Currency from './containers/Currency.js';
import ContactUs from './containers/ContactUs.js';


import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';



function App() {
  return (
    <div>

<Router>
<HeaderBar />  

<Route exact path="/" component={Home} />
<Route path="/About" component={AboutUs} />
<Route path="/Country" component={Country} />
<Route path="/Currency" component={Currency} />
<Route path="/ContactUs" component={ContactUs} />



<FooterBar />

</Router>
    
    
      
                   </div>





    
  );
}

export default App;



