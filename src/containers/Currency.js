import React, { Component } from 'react';

class Currency extends Component {



    // let rate = {};
    // let countries = [];
    // function convert(num) { 
    //     console.log(document.getElementById("options").value);
    //     console.log(document.getElementById("options2").value);
    //     console.log(document.getElementById("numtocon").value);
        
    //     for(key in rate)
    //     {
    //         if (key === document.getElementById("options2").value){
    //             console.log(rate[key] * document.getElementById("numtocon").value);
    //             document.getElementById("output").value = rate[key] * document.getElementById("numtocon").value
    //         }    
    //     }
    // ​
    //    }

    render() 
    {
        return (
            <div>
                <div>

                    <br>
                    </br>
                </div>
                <div>
        <h2 className="text-center">Welcome To Our Currency Converter</h2>
        <div className="cent">
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlSelect1"> Select currency to convert ..</label>
              <select className="form-control" id="options"><option>EUR</option></select>
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
              <button type="button" id="submit" className="btn btn-warning" onclick="convert(document.getElementById('numtocon').value)">Convert</button>
            </div>
          </form>
        </div>
      </div>
                
            </div>
        );
    }
}

export default Currency;