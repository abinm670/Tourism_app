import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: 0
        }
    }

    componentDidMount() {

        //weather 


        axios({
            "method": "GET",
            "url": "https://community-open-weather-map.p.rapidapi.com/weather",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "ace552dd9fmsha6ff55fdb781df9p18a94fjsna26d06dc2440"
            }, "params": {
                "callback": "test",
                "id": "2172797",
                "units": "%22metric%22 or %22imperial%22",
                "mode": "xml%2C html",
                "q": "Jeddah%2CSA"
            }
        })



            .then(response => {
                console.log("hello")
                console.log(this.props.match.params.id);
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
                <h3>
                    Hellloo hahah
                    {this.state.weather}</h3>
            </div>
        );
    }
}

export default Weather;
