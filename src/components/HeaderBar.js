import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
const HeaderBar = function (props) {
  return (
    <div>
      {/* Header */}
      <header className="header" >
        <div>
          <div className="row">
            <div className="col">
              <div className="header_container d-flex flex-row align-items-center justify-content-start">
                {/* Logo */}
                <div className="logo_container">
                  <div className="logo">
                    <div>Golden</div>
                    <div>Developers</div>
                    <div className="logo_image"><img src="images/logo.png" alt="" /></div>
                  </div>
                </div>
                {/* Main Navigation */}
                <nav className="main_nav ml-auto">
                  <ul className="main_nav_list">
                    <li className="main_nav_item"><Link to="/">Home</Link></li>
                    <li className="main_nav_item"><Link to="/Country">Countries</Link></li>
                    <li className="main_nav_item"><Link to="/Currency">Curency</Link></li>
                    <li className="main_nav_item"><Link to="/News">News</Link></li>
                    <li className="main_nav_item"><Link to="/About">About us</Link></li>
                    <li className="main_nav_item"><Link to="/ContactUs">Contact us</Link></li>
                  </ul>
                </nav>
                {/* Search */}
                <div className="search">
                  <form action="#" className="search_form">
                    <input type="search" name="search_input" className="search_input ctrl_class" required="required" placeholder="Keyword" />
                    <button type="submit" className="search_button ml-auto ctrl_class"><img src="images/search.png" alt="" /></button>
                  </form>
                </div>
                {/* Hamburger */}
                <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true" /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Menu */}
      <div className="menu_container menu_mm">
        {/* Menu Close Button */}
        <div className="menu_close_container">
          <div className="menu_close" />
        </div>
        {/* Menu Items */}
        <div className="menu_inner menu_mm">
          <div className="menu menu_mm">
            <div className="menu_search_form_container">
              <form action="#" id="menu_search_form">
                <input type="search" className="menu_search_input menu_mm" />
                <button id="menu_search_submit" className="menu_search_submit" type="submit"><img src="images/search_2.png" alt="" /></button>
              </form>
            </div>
            <ul className="menu_list menu_mm">
              <li className="menu_item menu_mm"><Link to="/">Home</Link></li>
              <li className="menu_item menu_mm"><Link to="/Country">Countries</Link></li>
              <li className="menu_item menu_mm"><Link to="/Currency">Curency</Link></li>
              <li className="menu_item menu_mm"><a href="/News">News</a></li>
              <li className="menu_item menu_mm"><Link to="/About">About us</Link></li>
              <li className="menu_item menu_mm"><a href="contact.html">Contact</a></li>
            </ul>
            {/* Menu Social */}
            <div className="menu_social_container menu_mm">
              <ul className="menu_social menu_mm">
                <li className="menu_social_item menu_mm"><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li className="menu_social_item menu_mm"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li className="menu_social_item menu_mm"><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                <li className="menu_social_item menu_mm"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li className="menu_social_item menu_mm"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="menu_copyright menu_mm">Colorlib All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderBar;