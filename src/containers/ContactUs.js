import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,

} from 'react-router-dom';
import axios from 'axios';

class ContactUs extends Component {


  // componentDidMount() {
  //   axios({
  //     "method":"GET",
  //     "url":"https://brianiswu-nflarrest-v1.p.rapidapi.com/crime",

  //     "headers":{
  //       "sources":"bbc-news&",
  //       "apiKey":"63232ca2eaac4d8880eb882a8e07c6e0"
  //       }
        
        
      
     
      
  //     })
  //     .then((response)=>{
  //       console.log(response.data)
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })


  // }

  render() {
    return (
      <div>
        {/* Home */}
        <div className="home">
          {/* Image by https://unsplash.com/@peecho */}
          <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/news.jpg" data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_content_inner">
                    <div className="home_title">Contact</div>
                    <div className="home_breadcrumbs">
                      <ul className="home_breadcrumbs_list">
                        <li className="home_breadcrumb"><Link to="/">Home</Link></li>
                        <li className="home_breadcrumb">Contact</li>
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
            <div className="find_background prlx" style={{ backgroundImage: 'url(images/find.jpg)' }} />
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
        {/* Contact */}
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact_title">Get in touch</div>
                <div className="contact_subtitle">say hello</div>
              </div>
            </div>
            <div className="row contact_content">
              <div className="col-lg-5">
                <div className="contact_text">
                  <p>.</p>
                </div>
                <div className="contact_info">
                  <div className="contact_info_box">i</div>
                  <div className="contact_info_container">
                    <div className="contact_info_content">
                      <ul>
                        <li>Address: Jeddah, Saudi Arabia</li>
                        <li>Phone: Only email</li>
                        <li>Email: contactUs@goldenDevelopers.com</li>
                      </ul>
                    </div>
                    <div className="contact_info_social">
                      <ul>
                        {/* <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact_form_container">
                  <form action="#" id="contact_form" className="clearfix">
                    <input id="contact_input_name" className="contact_input contact_input_name" type="text" placeholder="Name" required="required" data-error="Name is required." />
                    <input id="contact_input_email" className="contact_input contact_input_email" type="text" placeholder="E-mail" required="required" data-error="E-mail is required." />
                    <input id="contact_input_subject" className="contact_input contact_input_subject" type="text" placeholder="Subject" />
                    <textarea id="contact_input_message" className="contact_message_input contact_input_message" name="message" placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} />
                    <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row contact_map">
              {/* Google Map */}
              <div className="col">
                <div id="google_map">
                  <div className="map_container">
                    <div id="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="newsletter">
          {/* Image by https://unsplash.com/@garciasaldana_ */}
          <div className="newsletter_background" style={{ backgroundImage: 'url(images/newsletter.jpg)' }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="newsletter_content">
                  <div className="newsletter_title text-center">Subscribe to our Newsletter</div>
                  <div className="newsletter_form_container">
                    <form action="#" id="newsletter_form" className="newsletter_form">
                      <div className="d-flex flex-md-row flex-column align-content-center justify-content-between">
                        <input type="email" id="newsletter_input" className="newsletter_input" placeholder="Your E-mail Address" />
                        <button type="submit" id="newsletter_button" className="newsletter_button">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;