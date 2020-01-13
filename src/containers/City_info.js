import React, { Component } from 'react';
import axios from 'axios';

class City_info extends Component {

    constructor(props){
        super(props);
        this.state={
            weather: 0
        }
    }

componentDidMount(){

//weather 
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Jeddah,SA&APPID=544b1439e50b5d500d96cb18b849d3c2'
}).then(response => {
    console.log(response.data.main.temp - 273.15);
    this.setState({
        weather: response.data.main.temp - 273.15
    })
}).catch(error => {
    console.log(error);
})

    

}
 
   
    render() {
        return (
            <div>
            {this.state.weather}
            </div>
        );
    }
}

export default City_info;