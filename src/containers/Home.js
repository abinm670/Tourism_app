import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
        {/* Home */}
        <div className="home">
          <div className="home_background" style={{backgroundImage: 'url(images/home.jpg)'}} />
          <div className="home_content">
            <div className="home_content_inner">
              <div className="home_text_large">discover</div>
              <div className="home_text_small"></div>
            </div>
          </div>
        </div>
        {/* Find Form */}
        
        {/* Top Destinations */}
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Top destinations in Europe</h2>
                  <div>take a look at these offers</div>
                </div>
              </div>
            </div>
            <div className="row top_content">
              <div className="col-lg-3 col-md-6 top_col">
                {/* Top Destination Item */}
                <div className="top_item">
                  <a href="#">
                    <div className="top_item_image"><img src="images/top_1.jpg" alt="https://unsplash.com/@sgabriel" /></div>
                    <div className="top_item_content">
                      <div className="top_item_price">From $890</div>
                      <div className="top_item_text">Paris, France</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 top_col">
                {/* Top Destination Item */}
                <div className="top_item">
                  <a href="#">
                    <div className="top_item_image"><img src="images/top_2.jpg" alt="https://unsplash.com/@jenspeter" /></div>
                    <div className="top_item_content">
                      <div className="top_item_price">From $890</div>
                      <div className="top_item_text">Italian Riviera</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 top_col">
                {/* Top Destination Item */}
                <div className="top_item">
                  <a href="#">
                    <div className="top_item_image"><img src="images/top_3.jpg" alt="https://unsplash.com/@anikindimitry" /></div>
                    <div className="top_item_content">
                      <div className="top_item_price">From $890</div>
                      <div className="top_item_text">Cinque Terre</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 top_col">
                {/* Top Destination Item */}
                <div className="top_item">
                  <a href="#">
                    <div className="top_item_image"><img src="images/top_4.jpg" alt="https://unsplash.com/@hellolightbulb" /></div>
                    <div className="top_item_content">
                      <div className="top_item_price">From $890</div>
                      <div className="top_item_text">Santorini, Greece</div>
                    </div>
                  </a>	
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Last */}
        <div className="last">
          {/* Image by https://unsplash.com/@thanni */}
          <div className="last_background parallax-window" data-parallax="scroll" data-image-src="images/last.jpg" data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="last_logo"><img src="images/last_logo.png" alt="" /></div>
              <div className="col-lg-6 last_col">
                <div className="last_item">
                  <div className="last_item_content">
                    <div className="last_subtitle">maldive</div>
                    <div className="last_percent">50%</div>
                    <div className="last_title">Last Minute Offer</div>
                    <div className="last_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel.</div>
                    <div className="button last_button"><a href="offers.html">See Offer</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 last_col">
                <div className="last_item">
                  <div className="last_item_content">
                    <div className="last_subtitle">bali</div>
                    <div className="last_percent">38%</div>
                    <div className="last_title">Last Minute Offer</div>
                    <div className="last_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel.</div>
                    <div className="button last_button"><a href="offers.html">See Offer</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Popular */}
        <div className="popular">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Popular destinations in 2018</h2>
                  <div>take a look at these offers</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="popular_content d-flex flex-md-row flex-column flex-wrap align-items-md-center align-items-start justify-content-md-between justify-content-start">
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_1.jpg" alt="image by Egzon Bytyqi" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Turkey</div>
                      </div>
                    </a>	
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_2.jpg" alt="https://unsplash.com/@michael75" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Hawai</div>
                      </div>
                    </a>	
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_3.jpg" alt="https://unsplash.com/@sapegin" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Ireland</div>
                      </div>
                    </a>	
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_4.jpg" alt="https://unsplash.com/@kensuarez" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Thailand</div>
                      </div>
                    </a>
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_5.jpg" alt="https://unsplash.com/@noahbasle" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Croatia</div>
                      </div>
                    </a>
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_6.jpg" alt="https://unsplash.com/@seb" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Bali</div>
                      </div>
                    </a>
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_7.jpg" alt="https://unsplash.com/@nevenkrcmarek" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">France</div>
                      </div>
                    </a>	
                  </div>
                  {/* Popular Item */}
                  <div className="popular_item">
                    <a href="offers.html">
                      <img src="images/popular_8.jpg" alt="https://unsplash.com/@bergeryap87" />
                      <div className="popular_item_content">
                        <div className="popular_item_price">From $890</div>
                        <div className="popular_item_title">Vietnam</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Special */}
        <div className="special">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Special offers</h2>
                  <div>take a look at these offers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="special_content">
            <div className="special_slider_container">
              <div className="owl-carousel owl-theme special_slider">
                {/* Special Offers Item */}
                <div className="owl-item">
                  <div className="special_item">
                    <div className="special_item_background"><img src="images/special_1.jpg" alt="https://unsplash.com/@garciasaldana_" /></div>
                    <div className="special_item_content text-center">
                      <div className="special_category">Visiting</div>
                      <div className="special_title"><a href="offers.html">Indonesia</a></div>
                    </div>
                  </div>
                </div>
                {/* Special Offers Item */}
                <div className="owl-item">
                  <div className="special_item d-flex flex-column align-items-center justify-content-center">
                    <div className="special_item_background"><img src="images/special_2.jpg" alt="https://unsplash.com/@varshesh" /></div>
                    <div className="special_item_content text-center">
                      <div className="special_category">Culture</div>
                      <div className="special_title"><a href="offers.html">India</a></div>
                    </div>
                  </div>
                </div>
                {/* Special Offers Item */}
                <div className="owl-item">
                  <div className="special_item d-flex flex-column align-items-center justify-content-center">
                    <div className="special_item_background"><img src="images/special_3.jpg" alt="https://unsplash.com/@paulgilmore_" /></div>
                    <div className="special_item_content text-center">
                      <div className="special_category">Sunbathing</div>
                      <div className="special_title"><a href="offers.html">Thailand</a></div>
                    </div>
                  </div>
                </div>
                {/* Special Offers Item */}
                <div className="owl-item">
                  <div className="special_item d-flex flex-column align-items-center justify-content-center">
                    <div className="special_item_background"><img src="images/special_4.jpg" alt="https://unsplash.com/@hellolightbulb" /></div>
                    <div className="special_item_content text-center">
                      <div className="special_category">Visiting</div>
                      <div className="special_title"><a href="offers.html">Bali</a></div>
                    </div>
                  </div>
                </div>
                {/* Special Offers Item */}
                <div className="owl-item">
                  <div className="special_item d-flex flex-column align-items-center justify-content-center">
                    <div className="special_item_background"><img src="images/special_5.jpg" alt="https://unsplash.com/@dnevozhai" /></div>
                    <div className="special_item_content text-center">
                      <div className="special_category">Visiting</div>
                      <div className="special_title"><a href="offers.html">France</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="special_slider_nav d-flex flex-column align-items-center justify-content-center">
                <img src="images/special_slider.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="newsletter">
          {/* Image by https://unsplash.com/@garciasaldana_ */}
          <div className="newsletter_background" style={{backgroundImage: 'url(images/newsletter.jpg)'}} />
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
        )
    }
}
