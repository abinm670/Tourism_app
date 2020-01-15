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
  {this.props.Neews.articles.map(item=> (  
    <div className="body">
    <div>     {item.name}                         </div>  

    <div>     {item.title}                         </div>  
   <div><img src={item.urlToImage} style={{width: "500px"}} alt='sauid  flag'></img>  </div> 
   
   <div>   {item.description} </div> 
    <div>     {item.author}                         </div>

    <div>    <a href={item.url}>{item.author}</a>   </div>

    </div>      
 
  ))}
  
</div>


  )}
}

    
export default Newspapers;
     
