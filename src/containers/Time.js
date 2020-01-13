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
      super();
      this.state={ 
        time:""
      }
      
      }
componentDidMount(){
    // const timeEls = (
    //     props.cityId.map((el, index) => {
    //       return <li key={index}>{el}</li>
    //     })
    //   )
    //   console.log({timeEls}+"props");

axios({
    "method":"GET",
    "url":"https://wft-geo-db.p.rapidapi.com/v1/geo/cities/105276/time",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
    }
    })
    .then((response)=>{
      console.log(response.headers.date)
      this.setState({   
        time:response.headers.date
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