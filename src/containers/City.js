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
    citiesName:[],
    img:[],
    citiesName2:""
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
        for(let i=0;i<5;i++){
            this.setState({cities: this.state.cities.concat(res.data.data[i]) })
            this.setState({citiesId: this.state.citiesId.concat(res.data.data[i].id) })
            this.setState({citiesName: this.state.citiesName.concat(res.data.data[i].name) })
            this.setState({citiesName2: this.state.citiesName2.concat(res.data.data[i].name+"%2C")})
          };
console.log(res)
})

      .catch((error) => {
        console.log(error)
      })

      axios({
        "method":"GET",
        "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key":"512d823b2cmsh91ce58230ff3341p167b1cjsnb3f37af99e5b"
        },"params":{
            // `${this.state.citiesName2}`
        "query":"Jeddah%2CAbha%2CMakkah",
        "lang":"en_US",
        "units":"km"
        }
        })
        .then((response)=>{
          console.log(response)
          for(let i in response.data.data){
            this.setState({img: this.state.img.concat(response.data.data[i].result_object.photo.images.small.url) })
          }
        })
        .catch((error)=>{
          console.log(error)
        })
}

  render() {
    return (

        <div className="row row-cols-3 row-cols-md-2">
          {this.state.cities.map(item=>
            <div className="col mb-4">
              <div className="card">
              <h4 className="card-text"><Link to={"/Time/" +  item.id} >Time</Link></h4>
                  <div className="card-body">
                <h4 className="card-text"><Link to={"/GetCityInfo/" +  item.name} >{item.name}</Link></h4>
                  </div>
              </div>
            </div>
          )}
        </div>    
        
    )
  
}
DisplayRest(){
    return(
        <div>
        
            { this.state.cities.map((n, index) => (
                
                <div>
                <img src={this.state.img[index]}  alt="..." />
                </div>
        ))}
        
        </div>)
}
}