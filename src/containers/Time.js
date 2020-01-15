import React,{Component} from 'react';
import axios from 'axios';
import City from './City';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  class Time extends Component {
     
    constructor(props){
      super(props);
      this.state={ 
        time:"",
      }
      
      }
componentDidMount(){
    console.log(this.props.match.params.id)

axios({
    "method":"GET",
    "url":"https://wft-geo-db.p.rapidapi.com/v1/geo/cities/"+`${this.props.match.params.id}`+"/time",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    }
    })
    .then((response)=>{
      this.setState({   
        time:response.data.data
      });

    })
    .catch((error)=>{
      console.log(error)
    })
}
render(){
  return(
    <div>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <h3>{this.state.time}</h3>
    </div> 

    );
}
}
export default Time;