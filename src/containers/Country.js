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
    s:[],
   flag1:[],
   fm1:[]
    }}


    componentDidMount(){
      
    axios.get(`https://restcountries.eu/rest/v2`) 
        .then(response=>{
        // console.log(response.data) 
     
     for(let i=0;i<response.data.length;i++){
       this.setState({fm1: this.state.fm1.concat(response.data[i]) })
       this.setState({s: this.state.country.concat(response.data[i].alpha2Code) })
       this.setState({country: this.state.country.concat(response.data[i].name) })
       this.setState({flag1: this.state.flag1.concat(response.data[i].flag) })


  
     }});
     
    }
 



  render() { 
    const a2 = this.state.country.alpha2Code;
    console.log(this.state.data)
    return (
      <div>   
        
          <div className="row row-cols-1 row-cols-md-2">
          {this.state.fm1.map(item=>
            <div className="col mb-4">
              <div className="card">
                <Link to={"/City/" +  item.alpha2Code} >
                  <img src={item.flag} 
                  className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.alpha2Code}</h5>

                
                </div>
              </div>
              </div>
          )}

          </div>

{/* <Router>
          <Route exact path="/city"  component={() => <City alphaCode={a2}/> }/>
          </Router>     */}
  
        

        </div>
              
    )}   
    
          }
  


export default Country;
