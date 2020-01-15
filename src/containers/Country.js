import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: [],
      s: [],
      flag1: [],
      fm1: []
      
    }
  }
  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2`)
      .then(response => {

          

        // response.data.length
        for (let i = 0; i <50 ; i++) {


          this.setState({ fm1: this.state.fm1.concat(response.data[i]) })
          this.setState({ s: this.state.country.concat(response.data[i].alpha2Code) })
          this.setState({ country: this.state.country.concat(response.data[i].name) })
          this.setState({ flag1: this.state.flag1.concat(response.data[i].flag) })
        }
      });
  }
  render() {
    const a2 = this.state.country.alpha2Code;
    console.log(this.state.data)
    return (
      <div className="cont">
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h2 className="text-center">  COUNTIRES </h2>
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="row row-cols-3 row-cols-md-2">
          {this.state.fm1.map(item =>
            <div className="col mb-4">
              <div className="card">
                <Link to={"/City/" + item.alpha2Code} >
                  <img src={item.flag}
                    className="card-img-top flagSize" alt="..." /></Link>
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Country;



