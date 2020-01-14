import React from 'react';

import axios from 'axios';

export default class City extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alpha: this.props.alphaCode,
      cities: [],
      citiesId: "",

    }
  }
  componentDidMount() {
    // const axios = require("axios");

    axios({
      "method": "GET",
      "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
      },
      // "params": {
      // "countryIds": `${this.props.alphaCode}`
    //  }
    })

      .then(res => {
        console.log(res)

        //    const linkCity=res.data.links;
        //    this.setState({ linkCity }); 

        // const cities = res.data.data;
        //  const cities = res.data.cities;
        // this.setState({ cities });
      })

      .catch((error) => {
        console.log(error)
      })


  }

  render() {

    console.log(this.props.m)

    return (
      <div>
        <br>

        </br>
        <ul>

         <strong> {this.props.m} </strong>
          {/* { this.state.cities.map(city => <li>{city.name}</li>)}
        { this.state.citiesId.map(city => <li>{city.name}</li>)}
        {this.state.id} */}
        </ul>
        {/* <ul>
        { this.state.linkCity.map(link => <li>{link.href}</li>)}
      </ul> */}
      </div>
    )
  }


}