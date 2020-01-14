import React, { Component } from 'react';
import axios from 'axios';
class City_info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: ""
        }
    }



    componentDidMount() {
        let data = [];
        console.log("Component did mount")
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-14&sortBy=publishedAt&apiKey=63232ca2eaac4d8880eb882a8e07c6e0')
            .then(res => {
                // this.setState({
                //     country: res.data
                // });

                // let x=[];

               
                //     res.data.articles.map((e,m) =>
                    
                //         x =data[m]
                //         x.push(e)

                    
                    // )
                

            });
            console.log(data)

    }
    render() {
        // const m = this.state.country.map((e) => e);
        // console.log(m)
        
        return (
            <div>


              





            </div>
        );
    }
}

export default City_info;