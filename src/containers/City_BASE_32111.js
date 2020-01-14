import React from 'react';

import axios from 'axios';

export default class City extends React.Component {
    constructor(props){
        super(props)
  this.state = {
    alpha: this.props.alphaCode,
    cities: [],
    citiesId:"",
    
  }
    }
  componentDidMount() {
    // const axios = require("axios");

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
        console.log("res")
        console.log(this.props.alphaCode)

    //    const linkCity=res.data.links;
    //    this.setState({ linkCity }); 

       const cities = res.data.data;
     //  const cities = res.data.cities;
        this.setState({ cities }); 
    })

    .catch((error)=>{
      console.log(error)
    })

    
}

  render() {
    console.log(this.state.id)
    return (
    <div>
    <br></br>
        <ul>
        {/* { this.state.cities.map(city => <li>{city.name}</li>)} */}
        {/* { this.state.citiesId.map(city => <li>{city.name}</li>)} */}
        {this.state.id}
      </ul>
      {/* <ul>
        { this.state.linkCity.map(link => <li>{link.href}</li>)}
      </ul> */}
      </div>
    )
  }

  
}