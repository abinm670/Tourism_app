import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar.js';
import Home from './containers/Home.js';
import AboutUs from './containers/AboutUs';
import FooterBar from './components/FooterBar.js';
import Country from './containers/Country.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <div>

<Router>
<HeaderBar />  

<Route exact path="/" component={Home} />
<Route path="/About" component={AboutUs} />
<Route path="/Country" component={Country} />


<FooterBar />

</Router>
    
    
      
                   </div>





    
  );
}

export default App;



