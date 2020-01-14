// import React,{Component} from 'react';
// import axios from 'axios';
// import City from './City';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     NavLink
//   } from 'react-router-dom';
  
//  class Country extends Component {  
     
// constructor(props){
// super();
// this.state={ 
//     country:{}
// }

// }
// componentDidMount(){
    
//      console.log("Component did mount")
//    axios.get('https://restcountries.eu/rest/v2/name/saudi')
//        .then(response=>{
//          this.setState({   
//            country: response.data[0]
//                });
//          }  );

//         }
// render(){

//   const m1 = this.state.country.name;
//   const m2 = this.state.country.capital;
//   const m3 =  this.state.country.region;
//   const flag = this.state.country.flag;
//   const a2 = this.state.country.alpha2Code;
  
//     return(

//     <div> 
//       <Router> 
        
//         <nav>  
//       <div className="row row-cols-1 row-cols-md-2">
//         <div className="col mb-4">
//           <div className="card">
//           <Link to="/city" ><img src={flag} className="card-img-top" alt="..." /></Link>
//             <div className="card-body">
//               <h5 className="card-title">{m1}</h5>
//             </div>
//           </div>
//         </div>
//         <div className="col mb-4">
//           <div className="card">
//           <Link to="/city" ><img src={flag} className="card-img-top" alt="..." /></Link>
//             <div className="card-body">
//             <h5 className="card-title">{m1}</h5>
//             </div>
//           </div>
//         </div>
//         <div className="col mb-4">
//           <div className="card">
//           <Link to="/city" ><img src={flag} className="card-img-top" alt="..." /></Link>
//             <div className="card-body">
//             <h5 className="card-title">{m1}</h5>
//             </div>
//           </div>
//         </div>
//         <div className="col mb-4">
//           <div className="card">
//           <Link to="/city" ><img src={flag} className="card-img-top" alt="..." /></Link>
//             <div className="card-body">
//             <h5 className="card-title">{m1}</h5>
//             </div>
//           </div>
//         </div>
//       </div> 
//       </nav>
//       <div>

//           <Route exact path="/city"  component={() => <City alphaCode={a2}/> }/>
//       </div>
//         </Router>
//     </div> 
//     );
    
// };

// }
// export default Country;

import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Country extends Component {
  constructor(props){
    
    super(props);
    this.state={ 
      el:"",     
    country:[],
   flag1:[],
   a2:[],
   fm1:[],
    }}
    


     displayID(el2)
      {
         alert(el2);
         this.setState({el: el2 })
          return this.state.el
      }       

    componentDidMount(){

      console.log("Component did mount")
    axios.get(`https://restcountries.eu/rest/v2`)
        .then(response=>{
        console.log(response.data) 
     for(let i=0;i<20;i++){
       this.setState({fm1: this.state.fm1.concat(response.data[i]) })
       this.setState({country: this.state.country.concat(response.data[i].name) })
       this.setState({flag1: this.state.flag1.concat(response.data[i].flag) })
       this.setState({a2: this.state.a2.concat(response.data[i].alpha2Code) })

     }});
     
    }
    
  render() { 
    console.log("el"+this.state.el)

    return (
      <div>   
         <Router> 
          <div className="row row-cols-1 row-cols-md-2">
          {/* <a href="#" id="flagLink">click</a> */}

          {this.state.fm1.map(item=>
            <div className="col mb-4">
              <div className="card" >
                <Link to="/City" ><img src={item.flag} id={item.alpha2Code} className="card-img-top" alt="..." onClick={()=>this.displayID(item.alpha2Code)}/></Link>
                <div className="card-body">
                <h5 className="card-title" >{item.name}</h5>
                <p className="card-text">{item.alpha2Code}</p>
                                
                </div>
              </div>
            </div>  
)}

          </div>
          <Route exact path="/City"  component={() => <City alphaCode={this.state.el}/> }/>

          </Router> 

      </div>
    );
  };
  
}
export default Country;