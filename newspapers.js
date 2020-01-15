import React,{Component} from 'react';
 
import Newsdata from './Newsdata.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';

class Newspapers  extends Component {   

   




    render( ){
      console.log(this.props.Neews.articles[0])  




  return(
         


<div>
  {this.props.Neews.articles.map(item=> (  
    <div className="body">
    <div>     {item.name}                         </div>  

    <div>     {item.title}                         </div>  
   <div><img src={item.urlToImage} style={{width: "500px"}} alt='sauid  flag'></img>  </div> 
   
   <dive>   {item.description} </dive> 
    <div>     {item.author}                         </div>

    <div>    <a href={item.url}>{item.author}</a>   </div>

    </div>
))}      
 
</div>
      

 

 



    

  );



    }

    
}

export default Newspapers;
     
    
