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
        backgroundImageR: '',
        backgroundImageA: ''
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

  axios({
      method: 'get',
      url: 'http://api.unsplash.com/search/photos?query=food&client_id=8f885b1c073299c10993ac2aaef37f9f24a7c7ef6194119d0db86dfae4707d97'
  })
  .then(response => {
      console.log(response);
      for(let i=0; i<3;i++){
      console.log(response.data.results[i].urls.regular);
      }
      this.setState(
        {backgroundImageR: response.data.results[ Math.floor(Math.random() * 9)+1].urls.regular}
      )
  })
  .catch(error => {
      console.log(error);
  })

  axios({
    method: 'get',
    url: 'http://api.unsplash.com/search/photos?query=attraction&client_id=8f885b1c073299c10993ac2aaef37f9f24a7c7ef6194119d0db86dfae4707d97'
})
.then(response => {
    console.log(response);
    for(let i=0; i<3;i++){
    console.log(response.data.results[i].urls.regular);
    }
    this.setState(
      {backgroundImageA: response.data.results[ Math.floor(Math.random() * 9)+1].urls.regular}
    )
})
.catch(error => {
    console.log(error);
})
}
render(){
  console.log(this.state.cityId+"this.state.cityId")
  console.log(this.state.cityName+"this.state.cityName")
  return(
    
    <div>

            <div className="container card">
            <Link to={"/Resturant/" +  this.state.cityId }><img src={this.state.backgroundImageR} className="card-img-top" alt="..." width="210px"height="210px"/></Link>
              <div className="card-body">
                <h5 className="card-title">Resturant</h5>
              </div>
            </div>
    
            <div className="container card">
            <Link to={"/Attraction/" +  this.state.cityId }><img src={this.state.backgroundImageA} className="card-img-top" alt="..." width="210px"height="210px"/></Link>
              <div className="card-body">
                <h5 className="card-title">Attraction</h5>
              </div>
            </div>

    {/* <Link to={"/Resturant/" +  this.state.cityId }>Resturant</Link> */}
    {/* <Link to={"/Attraction/" +  this.state.cityId}>Attraction</Link> */}
    </div>

    );
}

}
export default GetCityInfo;