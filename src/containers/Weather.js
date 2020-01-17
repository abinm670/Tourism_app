import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: "",
            i1:this.props.match.params.id,
            i2:this.props.match.params.id2
        }

        // console.log(this.props.match.params.id);
        // console.log(this.props.match.params.id2);  
    }

    componentDidMount() {

        //weather 
        axios({
            "method": "GET",
            "url": "http://api.openweathermap.org/data/2.5/weather?q="+this.state.i1+","+this.state.i2+"&APPID=095b6d34454b3e541cafb9bc26c3e48f",
            
        })



            .then(response => {
                console.log(this.props.match.params.id);
                console.log(response.data.main.temp - 273.15);
                this.setState({
                    weather: response.data.main.temp - 273.15
                })
            }).catch(error => {
                console.log(error);
                this.setState({
                    weather:"city not found in this api"
                })
            })

    }

    render() {
        console.log(this.state.weather);

        return (
            <div>
                <h3>
                    {this.state.weather}</h3>
            </div>
        );
    }
}

export default Weather;
