import React from 'react';


const Country = props => {
    return (
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="items item_grid clearfix">
                  {/* Item */}
                  <div className="item clearfix rating_5">
                    <div className="item_image"><img src="images/top_1.jpg" alt="" /></div>
                    <div className="item_content">
                      <div className="item_price">From $890</div>
                      <div className="item_title">Paris, France</div>
                      <ul>
                        <li>1 person</li>
                        <li>4 nights</li>
                        <li>3 star hotel</li>
                      </ul>
                      <div className="rating rating_5" data-rating={5}>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus.</div>
                      <div className="item_more_link"><a href="#">Read More</a></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item clearfix rating_3">
                    <div className="item_image"><img src="images/top_2.jpg" alt="" /></div>
                    <div className="item_content">
                      <div className="item_price">From $290</div>
                      <div className="item_title">Cinque Terre</div>
                      <ul>
                        <li>1 person</li>
                        <li>4 nights</li>
                        <li>3 star hotel</li>
                      </ul>
                      <div className="rating rating_3" data-rating={3}>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus.</div>
                      <div className="item_more_link"><a href="#">Read More</a></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item clearfix rating_4">
                    <div className="item_image"><img src="images/top_3.jpg" alt="" /></div>
                    <div className="item_content">
                      <div className="item_price">From $590</div>
                      <div className="item_title">Italian Riviera</div>
                      <ul>
                        <li>1 person</li>
                        <li>4 nights</li>
                        <li>3 star hotel</li>
                      </ul>
                      <div className="rating rating_4" data-rating={4}>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus.</div>
                      <div className="item_more_link"><a href="#">Read More</a></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item clearfix rating_5">
                    <div className="item_image"><img src="images/top_4.jpg" alt="" /></div>
                    <div className="item_content">
                      <div className="item_price">From $490</div>
                      <div className="item_title">Santorini, Greece</div>
                      <ul>
                        <li>1 person</li>
                        <li>4 nights</li>
                        <li>3 star hotel</li>
                      </ul>
                      <div className="rating rating_5" data-rating={5}>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="item_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus.</div>
                      <div className="item_more_link"><a href="#">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="pages">
                  <ul className="pages_list">
                    <li className="page active"><a href="#">01.</a></li>
                    <li className="page"><a href="#">02.</a></li>
                    <li className="page"><a href="#">03.</a></li>
                    <li className="page"><a href="#">04.</a></li>
                  </ul>
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
    );
};


    

export default Country;