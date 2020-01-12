import React from 'react';
import './App.css';
import HandFApp from './components/HandFApp.js';
import Home from './containers/Home.js';
import AboutUs from './containers/AboutUs';
import FooterBar from './components/FooterBar.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <div>



<Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={AboutUs} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>

    <HandFApp />
    <Home />
    <FooterBar />     
                   </div>
  );
}

export default App;
