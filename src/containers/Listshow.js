import React,{Component} from 'react';
import axios from 'axios';
class Listshow extends Component {   

constructor(props){

super(props);
this.state={       
data1:'',
country:[],
   name:'UK'
 
,countries:['saudi','US','UK']

, 
currentcountr:[] 
, flag1:[],fm1:[]
}

 

}

 


    

componentDidMount(){
     console.log("Component did mount")
   axios.get(`https://restcountries.eu/rest/v2`)
       .then(response=>{
       console.log(response.data) 
    
    for(let i=0;i<5;i++){
      this.setState({fm1: this.state.fm1.concat(response.data[i]) })
      this.setState({country: this.state.country.concat(response.data[i].name) })
      this.setState({flag1: this.state.flag1.concat(response.data[i].flag) })
 
    }

 


          
 

         }  );


  }






 
 


render( ){
    
 


  




 const m1 = this.state.country;

 const m2 = this.state.country.capital;
 let m3 =  this.state.country.region;
 const flag = this.state.country.flag;
 


var s1= this.state.country[0]

 for(let i of this.state.country ){
s1 = this.state.country[i]


 }

  console.log(this.state.country)
  console.log(this.state.flag1)
    return(
<div>
  {this.state.fm1.map(item=> (  
    <div>
    
   <div><img src={item.flag} style={{width: "100px"}} alt='sauid  flag'></img>  </div> 
    <div>     {item.name}                         </div>
    </div>
))}      
 
</div>

    );
 
    
 
}



}
export default Listshow;