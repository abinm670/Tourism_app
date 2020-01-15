import React from 'react';
import Time from './Time';
import axios from 'axios';
import GetCityInfo from './GetCityInfo';
import Resturant from './Resturant'
import {

  BrowserRouter as Router,
  Route,
  Link
} 
from 'react-router-dom';
//const citiesId=["1","2"]
export default class City extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.id)
    this.state = {
      alpha: this.props.alphaCode,
      cities: [],
      citiesId: [],
      citiesName: [],
      img: [],
      citiesName2: "",
      imgs: []
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

        for (let i = 0; i < 5; i++) {
          this.setState({ cities: this.state.cities.concat(res.data.data[i]) })
          this.setState({ citiesId: this.state.citiesId.concat(res.data.data[i].id) })
          this.setState({ citiesName: this.state.citiesName.concat(res.data.data[i].name) })
          this.setState({ citiesName2: this.state.citiesName2.concat(res.data.data[i].name) })
        };
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    // var x =this.state.citiesName2; 
    // console.log(x);
    for (let i = 0; i <= this.state.citiesName.length; i++) {
      axios({
        "method": "GET",
        "url": "https://tripadvisor1.p.rapidapi.com/locations/search",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
        }, "params": {

          "query": `${this.state.citiesName[i]}`

          ,
          "lang": "en_US",
          "units": "km",

        }
      })
        .then((response) => {
          console.log(this.state.citiesName[i])

          this.setState({ img: this.state.img.concat(response.data.data[i].result_object.photo.images.small.url) })

        })
        .catch((error) => {
          console.log(error)

        })
    }
  }

  DisplayRest() {
    return (
      <div>
        {this.state.cities.map((n, index) => (
          <div>
            <img src={this.state.img[index]} alt="..." />
          </div>
        ))}
      </div>)
  }






  render() {
    
    return (
            
         <Router> 

           <div className="cont">
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
    <h2 className="text-center"> {this.props.match.params.id} CITIES </h2>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
          
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
               <Route path="/GetCityInfo" component={() => <GetCityInfo cityName2={this.state.citiesName} />} />
            <Route path="/Time" component={() => <Time cityIdTime={this.state.citiesId} />} />
               
               
               </div> 
               </div> 
           )}
        </div>
          </div>
      </Router>
        
      )
 }
 }

