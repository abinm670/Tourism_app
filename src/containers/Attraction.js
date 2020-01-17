import React,{Component} from 'react';
import axios from 'axios';
import City from './City';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  
  class Attraction extends Component {  
    constructor(props){
        super(props);
        this.state={
            landmark: [], 
            name:[],
            website:[],
            img:[],
            cityIdA: this.props.match.params.ids
        }
    }

componentDidMount(){
const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":"512d823b2cmsh91ce58230ff3341p167b1cjsnb3f37af99e5b"
    },"params":{
    "lang":"en_US",
    "currency":"USD",
    "sort":"recommended",
    "lunit":"km",
    "limit":"30",
    "bookable_first":"false",
    "subcategory":"36",
    "location_id":`${this.props.match.params.id}`
        // `${this.props.cityIdAttraction}`
    }
    })
    .then((response)=>{
        console.log("i am in then")
      for(let i in response.data.data){
          console.log("i am in for")
            this.setState({name: this.state.name.concat(response.data.data[i].name)})
            this.setState({website: this.state.website.concat(response.data.data[i].website)})
            this.setState({img: this.state.img.concat(response.data.data[i].photo.images.small.url)} )
    
      }

    })
    .catch((error)=>{
      console.log(error)
    })
    
}

render(){
    console.log('Attraction'+this.state.cityIdA)
    return(
        <div>
            <div>
               {this.DisplayAttrac()} 
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div> 
    );

}
DisplayAttrac(){
        return(
            <div >
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h2 className="text-center">  Attraction </h2>
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="row row-cols-3 row-cols-md-2">
                { this.state.name.map((n, index) => (
                    <div className="col mb-4">
                    <div className="card">
                    <img className="card-img-top flagSize" src={this.state.img[index]}  alt="..." />
                    <h3>{this.state.name[index]}</h3>
                    <a href={this.state.website[index]}>Attraction website</a>
                    </div>
            </div>
            ))}            
        </div>
        </div>
        )
   
}
}

export default Attraction;