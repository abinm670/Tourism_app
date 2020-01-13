import React from 'react';
import Time from './Time'
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

  this.state = {
    alpha: this.props.alphaCode,
    cities: [],
    citiesId:[],
    cityName:""
    }
}
  componentDidMount() {
    const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    },"params":{
    "countryIds":`${this.props.alphaCode}`
    }
    })

    // axios({
    //     "method":"GET",
    //     "url":"https://countries-cities.p.rapidapi.com/location/country/"+`${this.props.alphaCode}`+"/city/list",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"countries-cities.p.rapidapi.com",
    //     "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    //     },"params":{
    //     "page":"2",
    //     "per_page":"20",
    //     "format":"json",
    //     "population":"15000"
    //     }
    //     })

    // axios({
    //     "method":"GET",
    //     "url":"https://wft-geo-db.p.rapidapi.com/v1/geo/cities/"+id+"/time",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"wft-geo-db.p.rapidapi.com",
    //     "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    //     }
    //     })
    //     .then((response)=>{
    //       console.log(response)
    //       const citiesId = res.data.data.id;
    //       this.setState({ citiesId }); 

    //     })
    //     .catch((error)=>{
    //       console.log(error)
    //     })

      .then(res => {
        console.log(res)
        console.log(" city res ")
        console.log(this.props.alphaCode+" this.props.alphaCode")

    //    const linkCity=res.data.links;
    //    this.setState({ linkCity }); 

    //  const cities = res.data.data;
    const citiesId = res.data.data[0].id;
     const cityName = res.data.data[0].name;
    //  const cities = res.data.cities;
    // this.setState({ cities }); 
    this.setState({ citiesId });
    this.setState({cityName});
})

    .catch((error)=>{
      console.log(error)
    })

   
}

  render() {

    return (
    <Router>
    <div>
    <Link to="/Time">Time</Link>{" "}
    <Link to="/Resturant">Resturant</Link>
            <ul>
            {/* { this.state.cities.map(city => <li><Link to="/Time">{city.name}</Link></li>)}
            { this.state.citiesId.map(cityId => <li>{cityId.id}</li>)}
            <Route path='/time' component={Time} /> */}
            <Route path="/GetCityInfo"  component={() => <GetCityInfo cityName2={this.state.cityName}/> }/>
            <Route path="/time"  component={() => <Time cityId2={this.state.citiesId}/> }/>

            <Route path='/Resturant' component={Resturant} />

        </ul>
      </div>
    </Router>


    )
  }

  
}