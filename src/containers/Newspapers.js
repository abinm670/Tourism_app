import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';

class Newspapers  extends Component {   

    render( ){
      console.log(this.props.Neews.articles)  

  return(
    <div>
    <div>
    <br></br>
    <br></br>
    <br></br>
  </div>
  <h2 className="text-center">  News </h2>
  <div>
    <br></br>
    <br></br>
    <br></br>
  </div>   
<div className="card mb-3 mr-2 ml-4 row">
  {this.props.Neews.articles.map(item=> (  
 <div className="card mr-2">   
  <img src={item.urlToImage} className="card-img-top" style={{width: "320px"}} height= "320px" alt='...' ></img>
      
  <div className="card-body">
<h5 className="card-title">  {item.title} </h5>  
<p className="card-text">  {item.name}  </p>   
{/* <p className="card-text"> {item.description} </p>  */}
<p > <a href={item.url}>{item.author}</a> </p>
</div>
</div>        
 
  ))}
  
</div>
<div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
</div>
  )}
}

    
export default Newspapers;
     