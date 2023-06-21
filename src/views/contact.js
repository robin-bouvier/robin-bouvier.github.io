import React from 'react'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>contact - Hola template</title>
        <meta property="og:title" content="contact - Hola template" />
      </Helmet>
      <div className="contact-navbar">
        <header data-thq="thq-navbar" className="contact-navbar-interactive">
          <div className="contact-branding">
            <span className="contact-text">rb.</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="contact-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="contact-nav"
            >
              <div className="contact-right">
                <NavLinks className="contact-nav-links"></NavLinks>
                <div className="contact-button">
                  <button className="contact-work-with-us button">
                    <span className="contact-text01">cv</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="contact-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <button className="contact-work-with-us1 button">
              <span className="contact-text02">work with us</span>
              <img
                alt="image"
                src="/hamburger.svg"
                className="contact-image1"
              />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="contact-nav1"
            >
              <div className="contact-top">
                <div className="contact-branding1">
                  <span className="contact-text03">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="contact-menu-close">
                  <svg viewBox="0 0 1024 1024" className="contact-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="contact-middle"
              >
                <div className="contact-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="contact-work-with-us2 button">
                  <span className="contact-text04">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="contact-book">
        <div className="contact-content">
          <div className="contact-left"></div>
          <h2 className="contact-text05">
            <span className="contact-text06">bouvier.robin@pm.me</span>
            <br></br>
            <br></br>
            <span>+33 6 60 33 17 42</span>
            <br></br>
            <br></br>
            <span>10 la Manufacture</span>
            <br></br>
            <br></br>
            <span>88240 La-Vôge-Les-Bains</span>
            <br></br>
          </h2>
          <img alt="image" src="/message.svg" className="contact-image2" />
        </div>
      </div>
    </div>
  )
}

export default Contact
