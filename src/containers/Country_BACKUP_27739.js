import React, { Component } from 'react';
import axios from 'axios';
import City from './City';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Country extends Component {

  constructor(props) {
    super();
    this.state = {
      country: {}
    }

  }
  componentDidMount() {

    console.log("Component did mount")
    axios.get('https://restcountries.eu/rest/v2/name/saudi')
      .then(response => {
        this.setState({
          country: response.data[0]
        });
      });

  }
  render() {

    const m1 = this.state.country.name;
    const m2 = this.state.country.capital;
    const m3 = this.state.country.region;
    const flag = this.state.country.flag;
    const a2 = this.state.country.alpha2Code;

    return (
<<<<<<< HEAD
        <div>
       
        {/* Home */}
        <div className="home">
          {/* Image by https://unsplash.com/@peecho */}
          <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/offers.jpg" data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_content_inner">
                    <div className="home_title">Offers</div>
                    <div className="home_breadcrumbs">
                      <ul className="home_breadcrumbs_list">
                        <li className="home_breadcrumb"><a href="index.html">Home</a></li>
                        <li className="home_breadcrumb">Offers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>		
        </div>
        {/* Find Form */}
        <div className="find">
          {/* Image by https://unsplash.com/@garciasaldana_ */}
          <div className="find_background_container prlx_parent">
            <div className="find_background prlx" style={{backgroundImage: 'url(images/find.jpg)'}} />
          </div>
          {/* <div class="find_background parallax-window" data-parallax="scroll" data-image-src="images/find.jpg" data-speed="0.8"></div> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="find_title text-center">Find the Adventure of a lifetime</div>
              </div>
              <div className="col-12">
                <div className="find_form_container">
                  <form action="#" id="find_form" className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap">
                    <div className="find_item">
                      <div>Destination:</div>
                      <input type="text" className="destination find_input" required="required" placeholder="Keyword here" />
                    </div>
                    <div className="find_item">
                      <div>Adventure type:</div>
                      <select name="adventure" id="adventure" className="dropdown_item_select find_input">
                        <option>Categories</option>
                        <option>Categories</option>
                        <option>Categories</option>
                      </select>
                    </div>
                    <div className="find_item">
                      <div>Min price</div>
                      <select name="min_price" id="min_price" className="dropdown_item_select find_input">
                        <option>&nbsp;</option>
                        <option>Price</option>
                        <option>Price</option>
                      </select>
                    </div>
                    <div className="find_item">
                      <div>Max price</div>
                      <select name="max_price" id="max_price" className="dropdown_item_select find_input">
                        <option>&nbsp;</option>
                        <option>Price</option>
                        <option>Price</option>
                      </select>
                    </div>
                    <button className="button find_button">Find</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offers */}
        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Top destinations in Europe</h2>
                  <div>take a look at these offers</div>
                </div>
              </div>
            </div>
            <div className="row filtering_row">
              <div className="col">
                <div className="sorting_group_1">
                  <ul className="item_sorting">
                    <li>
                      <span className="sorting_text">Filter by</span>
                      <i className="fa fa-angle-down" />
                      <ul>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>Show All</span></li>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"><span>Price</span></li>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>Name</span></li>
                      </ul>
                    </li>
                    <li>
                      <span className="sorting_text">Stars</span>
                      <i className="fa fa-angle-down" />
                      <ul>
                        <li className="item_filter_btn" data-filter="*"><span>Show All</span></li>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;stars&quot; }"><span>Ascending</span></li>
                        <li className="item_filter_btn" data-filter=".rating_1"><span>1</span></li>
                        <li className="item_filter_btn" data-filter=".rating_2"><span>2</span></li>
                        <li className="item_filter_btn" data-filter=".rating_3"><span>3</span></li>
                        <li className="item_filter_btn" data-filter=".rating_4"><span>4</span></li>
                        <li className="item_filter_btn" data-filter=".rating_5"><span>5</span></li>
                      </ul>
                    </li>
                    <li>
                      <span className="sorting_text">Price</span>
                      <i className="fa fa-angle-down" />
                      <ul>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>Default</span></li>
                        <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"><span>Price</span></li>
                      </ul>
                    </li>
                    <li>
                      <span className="sorting_text">Facility</span>
                      <i className="fa fa-angle-down" />
                      <ul>
                        <li><span>Facility</span></li>
                        <li><span>Facility</span></li>
                        <li><span>Facility</span></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="sorting_group_2 clearfix">
                  <ul>
                    <li>Airplane X</li>
                    <li>5 stars X</li>
                    <li>Romantic X</li>
                  </ul>
                  <div className="sorting_icons clearfix">
                    <div className="detail_view"><i className="fa fa-bars" aria-hidden="true" /></div>
                    <div className="box_view"><i className="fa fa-th-large" aria-hidden="true" /></div>
                  </div>
=======

      <div>
        {/* <Router> */}
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
>>>>>>> master
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <Link to="/City" ><img src={flag} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{m1}</h5>
                </div>
              </div>
            </div>
          </div>
          {/* <Route path="/City" component={() => <City alphaCode={a2} />} /> */}
        {/* </Router> */}

      </div>

    );

  };

}
export default Country;