

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
  
export default class City extends React.Component {
    constructor(props){
        super(props)
console.log(this.props.match.params.id)
  this.state = {
    alpha: this.props.alphaCode,
    cities: [],
    citiesId:[],
    citiesName:[]
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
          };
console.log(res)
   
})
      .catch((error) => {
        console.log(error)
      })
}
  render() {
    
    return (
            
         <Router> 
           <div className="row row-cols-3 row-cols-md-2">
              {/* <Link to="/Time">Time</Link>{" "} */}
           {/* <Link to="/GetCityInfo">GetCityInfo</Link>{" "} */}
           {/* <Link to="/Time">Time</Link> */}
           {this.state.cities.map(city => 
             <div className="col mb-4">
              <div className="card">
                <Link to={"/GetCityInfo/" +  city.name} >
                   <img src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 " 
                   className="card-img-top flagSize" alt="..." /></Link> 
                 <div className="card-body">
                   <h3 className="card-title">{city.name}</h3>
                 </div>
                 {/* <Route path="/GetCityInfo"  component={() => <GetCityInfo cityName2={this.state.citiesName}/> }/>
                 <Route path="/Time"  component={() => <Time cityIdTime={this.state.citiesId}/> }/> */}
               </div> 
               </div> 
           )}

          </div>
      </Router>
        
      )
 }
 }