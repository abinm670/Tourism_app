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
        cityName: this.props.match.params.id,
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
    "x-rapidapi-key":"512d823b2cmsh91ce58230ff3341p167b1cjsnb3f37af99e5b"
    },"params":{
    "query":`${this.props.match.params.id}`,
    "lang":"en_US",
    "units":"km"
    }
    })
    .then((response)=>{
      console.log(response)
      console.log(response.data.data[0].result_object.location_id+"response.data.data[0].result_object.location_id")
      this.setState({cityId:response.data.data[0].result_object.location_id});
          this.setState({cityName:this.props.match.params.id});
    })
    
    .catch((error)=>{
      console.log(error)
    })
}
render(){
  console.log(this.state.cityId+"this.state.cityId")
  console.log(this.state.cityName+"this.state.cityName")
  return(
    <div>
    <Link to={"/Resturant/" +  this.state.cityId }>Resturant</Link>
    <Link to={"/Attraction/" +  this.state.cityId}>Attraction</Link>
    </div>

    );
}

}
export default GetCityInfo;