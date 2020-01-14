import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';
  


class Country extends Component {

  constructor(props){

    super(props);
    this.state={      
    country:[],
   flag1:[],
   fm1:[]
    }}


    componentDidMount(){
      console.log("Component did mount")
    axios.get(`https://restcountries.eu/rest/v2`)
        .then(response=>{
        console.log(response.data) 
     
     for(let i=0;i<20;i++){
       this.setState({fm1: this.state.fm1.concat(response.data[i]) })
       this.setState({country: this.state.country.concat(response.data[i].name) })
       this.setState({flag1: this.state.flag1.concat(response.data[i].flag) })

     }});
     
    }
 
  render() { 
    const a2 = this.state.country.alpha2Code;
    return (
      <div>   
        {/* <Router> */}
          <div className="row row-cols-3 row-cols-md-2">
          {this.state.fm1.map(item=>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" >
                  <img src={item.flag} 
                  className="card-img-top flagSize" alt="..." /></Link>
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                
                </div>
              </div>
              </div>
          )}

          </div>

          <Router>
          <Route exact path="/city"  component={() => <City alphaCode={a2}/> }/>
          </Router>    
  
        

        </div>
              
    )}   
    
          }
  


export default Country;
