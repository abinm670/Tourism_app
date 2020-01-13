import React from 'react';


const Country = props => {
    return (
        <div>
       
       <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1082,h_608/cities/cities-overview-hero.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1082,h_608/cities/cities-overview-hero.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1082,h_608/cities/cities-overview-hero.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="http://cdn.cnn.com/cnnnext/dam/assets/190910120101-04-shopping-cities-photos.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
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
    );
};


    

export default Country;