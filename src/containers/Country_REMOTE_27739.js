import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Country extends Component {

  constructor(props) {
    super();
    this.state = {
      country: {}
    }

  }
  componentDidMount() {

    console.log("Component did mount")
    axios.get('https://restcountries.eu/rest/v2/name/saudi')
      .then(response => {
        this.setState({
          country: response.data[0]
        });
      });

  }
  render() {

    const m1 = this.state.country.name;
    const m2 = this.state.country.capital;
    const m3 = this.state.country.region;
    const flag = this.state.country.flag;
    const a2 = this.state.country.alpha2Code;

    return (

      <div>
        {/* <Router> */}
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
          </div>
          {/* <Route path="/City" component={() => <City alphaCode={a2} />} /> */}
        {/* </Router> */}

      </div>

    );

  };

}
export default Country;