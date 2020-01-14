import React,{Component} from 'react';
import axios from 'axios';
import City from './City';
import Time from './Time'
import Resturant from './Resturant';
import Attraction from './Attraction';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  class GetCityInfo extends Component {
     
    constructor(props){
      super(props);
      this.state={ 
        cityName: this.props.cityName2,
        cityId:"",
      }
      
      }
componentDidMount(){
const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    },"params":{
    "query":`${this.props.cityName2}`,
    "lang":"en_US",
    "units":"km"
    }
    })
    .then((response)=>{
     //   console.log(response)
     //   console.log(response.data.data[0].result_object.location_id)
          this.setState({   
        cityId:response.data.data[0].result_object.location_id
      });
     // console.log(this.props.cityName2+" this.props.cityName2")
     // console.log(this.state.cityId+"cityId")

    })
    .catch((error)=>{
      console.log(error)
    })
}
render(){
  return(
    <div>
    <Router>
    <Link to="/Resturant">Resturant</Link>
    <Link to="/Attraction">Attraction</Link>

    <br></br> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3>{this.state.cityId}</h3>
    <Route path="/Resturant"  component={() => <Resturant cityIdResturant={this.state.cityId}/> }/>
    <Route path="/Attraction"  component={() => <Attraction cityIdAttraction={this.state.cityId}/> }/>
    </Router>
    </div> 

    );
}
    

}
export default GetCityInfo;