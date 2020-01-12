import React, { Component } from 'react';
import axios from 'axios';

class Currency extends Component {


    componentDidMount() {
        let countries = [];
        axios({
            "method":"GET",
            "url":"https://fixer-fixer-currency-v1.p.rapidapi.com/symbols",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"fixer-fixer-currency-v1.p.rapidapi.com",
            "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
            }
            })
            .then((response)=>{
             // console.log(response)
                  var symbols = response.data.symbols;
                  //console.log(symbols) 
            let key = 0; 
                  for( key in symbols)
            {
                symbols[key] = symbols[key];
                countries.push(key);
            }
            //console.log(countries)
            var sel1 = document.getElementById('options');
            for(var i = 0; i < countries.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = countries[i];
                opt.value = countries[i];
                sel1.appendChild(opt);  
            }
                var sel2 = document.getElementById('options2');
            for(var i = 0; i < countries.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = countries[i];
                opt.value = countries[i];
                sel2.appendChild(opt);  
            }
            })
            .catch((error)=>{
              console.log(error)
            })
        }
        // convert
        convert(num) { 
            console.log(document.getElementById("options").value);
            console.log(document.getElementById("options2").value);
            console.log(document.getElementById("numtocon").value);
                axios({
                    "method":"GET",
                    "url":"https://fixer-fixer-currency-v1.p.rapidapi.com/convert",
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"fixer-fixer-currency-v1.p.rapidapi.com",
                    "x-rapidapi-key":"62e41a0607mshcef95c3b6c98e0bp1e76d1jsnf4fcca6a5b6a"
                    },"params":{
                    "from":document.getElementById("options").value,
                    "to":document.getElementById("options2").value,
                    "amount":document.getElementById("numtocon").value
                    }
                    })
                    .then((response)=>{
                      console.log(response)
                      document.getElementById("output").value = response.data.result
                    })
                    .catch((error)=>{
                      console.log(error)
                    })
                }


    render()
  
    {
        return (
            <div>
                <div>

                    <br>
                    </br>
                </div>
                <div>
        <h2 className="text-center hed">Welcome To Our Currency Converter</h2>
        <div className="cent">
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlSelect1"> Select currency to convert ..</label>
              <select className="form-control" id="options">EUR</select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlSelect1"> Select currency convert to ..</label>
              <select className="form-control" id="options2" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlInput1">Enter number to convert ..</label>
              <input type="number" min={0} className="form-control" id="numtocon" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlInput1">Result ..</label>
              <input className="form-control" type="text" id="output" placeholder="Number after converting is." readOnly />
            </div>
            <div className="form-group col-md-6">
              <button type="button" id="submit" className="btn btn-warning" onClick= {(e) => this.convert(document.getElementById('numtocon').value)}>Convert</button>
            </div>
          </form>
        </div>
      </div>
                
            </div>
        );
    }
}

export default Currency;