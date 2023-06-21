import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hola template</title>
        <meta property="og:title" content="Hola template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link to="/" className="home-navlink">
            <div className="home-branding">
              <span className="home-text">rb.</span>
            </div>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <NavLinks></NavLinks>
                <div className="home-button">
                  <button className="home-work-with-us button">
                    <span className="home-text01">cv</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text02">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image1" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text03">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text04">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <h1 className="home-text05">
          <span>robin bouvier</span>
          <br></br>
          <span>ingénieur informatique</span>
          <br></br>
          <span>créatif compulsif</span>
        </h1>
        <div className="home-hero-image">
          <img alt="image" src="/computer.svg" className="home-image2" />
        </div>
      </div>
    </div>
  )
}

export default Home
