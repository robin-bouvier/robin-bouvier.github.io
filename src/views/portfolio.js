import React from 'react'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>portfolio - Hola template</title>
        <meta property="og:title" content="portfolio - Hola template" />
      </Helmet>
      <div className="portfolio-navbar">
        <header data-thq="thq-navbar" className="portfolio-navbar-interactive">
          <div className="portfolio-branding">
            <span className="portfolio-text">rb.</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="portfolio-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="portfolio-nav"
            >
              <div className="portfolio-right">
                <NavLinks className="portfolio-nav-links"></NavLinks>
                <div className="portfolio-button">
                  <button className="portfolio-work-with-us button">
                    <span className="portfolio-text01">cv</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="portfolio-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="portfolio-burger-menu">
            <button className="portfolio-work-with-us1 button">
              <span className="portfolio-text02">work with us</span>
              <img
                alt="image"
                src="/hamburger.svg"
                className="portfolio-image1"
              />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="portfolio-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="portfolio-nav1"
            >
              <div className="portfolio-top">
                <div className="portfolio-branding1">
                  <span className="portfolio-text03">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="portfolio-menu-close">
                  <svg viewBox="0 0 1024 1024" className="portfolio-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="portfolio-middle"
              >
                <div className="portfolio-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="portfolio-work-with-us2 button">
                  <span className="portfolio-text04">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-case-studies">
          <div className="portfolio-caption">
            <span className="portfolio-text05">projets personnels</span>
            <div className="portfolio-date-range">
              <span className="portfolio-text06">2023</span>
              <span className="portfolio-text07">——</span>
              <span className="portfolio-text08">2019</span>
            </div>
          </div>
          <div className="portfolio-gallery">
            <div className="portfolio-row">
              <div className="portfolio-case">
                <img
                  alt="image"
                  src="/study%20%231-1300w.png"
                  className="portfolio-image2"
                />
                <div className="portfolio-heading">
                  <span className="portfolio-text09">Perspiciatis</span>
                  <span className="portfolio-text10">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="portfolio-case1">
                <img
                  alt="image"
                  src="/study%20%232-1400w.png"
                  className="portfolio-image3"
                />
                <div className="portfolio-heading1">
                  <span className="portfolio-text11">Nemo voluptatem</span>
                  <span className="portfolio-text12">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-row1">
              <div className="portfolio-case2">
                <img
                  alt="image"
                  src="/study%20%233-1400w.png"
                  className="portfolio-image4"
                />
                <div className="portfolio-heading2">
                  <span className="portfolio-text13">Dolore magnam</span>
                  <span className="portfolio-text14">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="portfolio-case3">
                <img
                  alt="image"
                  src="/study%20%234-1400w.png"
                  className="portfolio-image5"
                />
                <div className="portfolio-heading3">
                  <span className="portfolio-text15">Tempora</span>
                  <span className="portfolio-text16">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-row2">
              <div className="portfolio-case4">
                <img
                  alt="image"
                  src="/study%20%235-1300w.png"
                  className="portfolio-image6"
                />
                <div className="portfolio-heading4">
                  <span className="portfolio-text17">Reprehenderit qui</span>
                  <span className="portfolio-text18">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="portfolio-case5">
                <img
                  alt="image"
                  src="/study%20%236-1300w.png"
                  className="portfolio-image7"
                />
                <div className="portfolio-heading5">
                  <span className="portfolio-text19">Ullamco laboris</span>
                  <span className="portfolio-text20">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
