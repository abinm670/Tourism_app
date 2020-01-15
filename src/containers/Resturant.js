import React,{Component} from 'react';
import axios from 'axios';
import City from './City';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  
  class Resturant extends Component {  
    constructor(props){
        super(props);
        this.state={ 
          name:[],
          description:[],
          img:[],
          rate:[],
          cityIdR: this.props.match.params.id
        }
        console.log(this.props.match.params.id+"this.props.cityIdResturant")
    }
componentDidMount(){
const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":"512d823b2cmsh91ce58230ff3341p167b1cjsnb3f37af99e5b"
    },"params":{
    "restaurant_tagcategory_standalone":"10591",
    "lunit":"km",
    "restaurant_tagcategory":"10591",
    "limit":"30",
    "prices_restaurants":"10953%2C10955",
    "restaurant_mealtype":"10598%2C10599",
    "currency":"USD",
    "lang":"en_US",
    "location_id":`${this.props.match.params.id}`
    // `${this.props.cityIdResturant}`
    }
    })
    .then((response)=>{
      console.log(response)
      // console.log(response.data.data[0].name)
      // console.log(response.data.data[0].description)
      // console.log(response.data.data[0].photo.images.small)
      // this.setState({ 
      //   name:response.data.data[0].name,
      //   description:response.data.data[0].description,
      //   img:response.data.data[0].photo.images.small.url  
      // });
      console.log("i am in then")
    for(let i in response.data.data){
        console.log("i am in for")
         this.setState({name: this.state.name.concat(response.data.data[i].name)})
         this.setState({rate: this.state.rate.concat(response.data.data[i].rating)} )
          this.setState({description: this.state.description.concat(response.data.data[i].description)})
         this.setState({img: this.state.img.concat(response.data.data[i].photo.images.small.url)} )
   
    }


    })
    .catch((error)=>{
      console.log(error)
    })
}
render(){
  console.log('Rest'+this.state.cityIdR)

    return(
        <div>
          {this.DisplayRest()} 
            {/* <h3>{this.state.name}</h3>
            <p>{this.state.description}</p>
            <img src={this.state.img}  alt="..." /> */}
          <br></br>
          <br></br>
        </div> 
    );

}
DisplayRest(){
      return(
        <div className="row row-cols-3 row-cols-md-2">
              { this.state.name.map((n, index) => (
                  <div className="col mb-4">
                  <div className="card">
                  <img className="card-img-top flagSize" src={this.state.img[index]}  alt="..." />
                  <h3>{this.state.name[index]}</h3>
                  <p>{this.state.rate[index]}</p>
                  <h3>{this.state.description[index]}</h3>
                  </div>
            </div>
          ))}
          </div>
      )
}
}

export default Resturant;