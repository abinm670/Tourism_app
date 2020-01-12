import React from 'react';



 const AboutUs = function(props)
    {
        return (
            
            <div>
        {/* About */}
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Hello</h2>
                  <div>We are an award winning Agency</div>
                </div>
              </div>
            </div>
            <div className="row about_row">
              <div className="col-lg-6 about_col order-lg-1 order-2">
                <div className="about_content">
                  <p></p>
                  <div className="button about_button"><a href="#">Read More</a></div>
                </div>
              </div>
              <div className="col-lg-6 about_col order-lg-2 order-1">
                <div className="about_image">
                  <img src="images/about.jpg" alt="https://unsplash.com/@sanfrancisco" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="milestones">
          <div className="milestones_background parallax-window" data-parallax="scroll" data-image-src="images/fact_background.jpg" data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Fun facts about our Agency</h2>
                  <div>take a look</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="milestones_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh</p>
                </div>
              </div>
            </div>
            <div className="row milestones_container">
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_1.svg" alt="" /></div>
                  <div className="milestone_counter" data-end-value={17}>0</div>
                  <div className="milestone_text">Mountains Climbed</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_2.svg" alt="" /></div>
                  <div className="milestone_counter" data-end-value={213}>0</div>
                  <div className="milestone_text">Islands Visited</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_3.svg" alt="" /></div>
                  <div className="milestone_counter" data-end-value={11923}>0</div>
                  <div className="milestone_text">Photos Taken</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon"><img src="images/milestone_4.svg" alt="" /></div>
                  <div className="milestone_counter" data-end-value={15}>0</div>
                  <div className="milestone_text">Cruises Organized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h2>Popular services that we offer</h2>
                  <div>take a look at these offers</div>
                </div>
              </div>
            </div>
            <div className="row icon_box_container">
              {/* Icon Box */}
              <div className="col-lg-4 icon_box_col">
                <div className="icon_box">
                  <div className="icon_box_image"><img src="images/service_1.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" /></div>
                  <div className="icon_box_title">Weekend trips</div>
                  <p className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.</p>
                  <a href="#" className="icon_box_more">Read More</a>
                </div>
              </div>
              {/* Icon Box */}
              <div className="col-lg-4 icon_box_col">
                <div className="icon_box">
                  <div className="icon_box_image"><img src="images/service_2.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" /></div>
                  <div className="icon_box_title">Fun leisure trips</div>
                  <p className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.</p>
                  <a href="#" className="icon_box_more">Read More</a>
                </div>
              </div>
              {/* Icon Box */}
              <div className="col-lg-4 icon_box_col">
                <div className="icon_box">
                  <div className="icon_box_image"><img src="images/service_3.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" /></div>
                  <div className="icon_box_title">Plane tickets</div>
                  <p className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.</p>
                  <a href="#" className="icon_box_more">Read More</a>
                </div>
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

export default AboutUs;