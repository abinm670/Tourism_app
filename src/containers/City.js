import React from 'react';
import Time from './Time';
import axios from 'axios';
import GetCityInfo from'./GetCityInfo';
import Resturant from './Resturant'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  //const citiesId=["1","2"]


export default class City extends React.Component {
    constructor(props){
        super(props)
console.log(this.props.match.params.id)
  this.state = {
    alpha: this.props.alphaCode,
    cities: [],
    citiesId:[],
    cityName:""
    }
}

  componentDidMount() {
    // const axios = require("axios");

    axios({
      "method": "GET",
      "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
      },
      "params": {
      "countryIds": `${this.props.match.params.id}`
      // `${this.props.alphaCode}`
   }
    })

      .then(res => {

     //   console.log(res)
     //   console.log(" city res ")
      //  console.log(this.props.alphaCode+" this.props.alphaCode")

console.log(res)

      const cities = res.data.data;
    const citiesId = res.data.data[0].id;
     const cityName = res.data.data[0].name;
    this.setState({ cities }); 
    this.setState({ citiesId });
    this.setState({cityName});
})

      

      .catch((error) => {
        console.log(error)
      })


   
}

  render() {
    console.log()

    return (
    <Router>
    <div>
    {/* <Link to="/Time">Time</Link>{" "} */}
    <Link to="/GetCityInfo">GetCityInfo</Link>{" "}
    <Link to="/Time">Time</Link>
            <ul>
            { this.state.cities.map(city => <li>{city.name}</li>)}
            {/* { this.state.citiesId.map(cityId => <li>{cityId.id}</li>)} */}
            <Route path="/GetCityInfo"  component={() => <GetCityInfo cityName2={this.state.cityName}/> }/>
            <Route path="/Time"  component={() => <Time cityIdTime={this.state.citiesId}/> }/>

        </ul>
        </div>
        </Router>
    )
  
}
}
