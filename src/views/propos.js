import React from 'react'

import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import './propos.css'

const Propos = (props) => {
  return (
    <div className="propos-container">
      <Helmet>
        <title>propos - Hola template</title>
        <meta property="og:title" content="propos - Hola template" />
      </Helmet>
      <div className="propos-navbar">
        <header data-thq="thq-navbar" className="propos-navbar-interactive">
          <div className="propos-branding">
            <span className="propos-text">rb.</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="propos-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="propos-nav"
            >
              <div className="propos-right">
                <NavLinks className="propos-nav-links"></NavLinks>
                <div className="propos-button">
                  <button className="propos-work-with-us button">
                    <span className="propos-text01">cv</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="propos-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="propos-burger-menu">
            <button className="propos-work-with-us1 button">
              <span className="propos-text02">work with us</span>
              <img alt="image" src="/hamburger.svg" className="propos-image1" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="propos-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="propos-nav1"
            >
              <div className="propos-top">
                <div className="propos-branding1">
                  <span className="propos-text03">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="propos-menu-close">
                  <svg viewBox="0 0 1024 1024" className="propos-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="propos-middle"
              >
                <div className="propos-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="propos-work-with-us2 button">
                  <span className="propos-text04">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="propos-section">
        <div className="propos-about-us">
          <div className="propos-header">
            <span className="propos-caption">à propos</span>
            <h2 className="propos-description">
              <span className="propos-text05">23 ans. </span>
              <br></br>
              <span>
                diplômé de l&apos;université de technologie de Compiègne.
              </span>
              <br></br>
              <span>photographe et vidéaste amateur</span>
              <br></br>
            </h2>
          </div>
          <div className="propos-dna">
            <span className="propos-description1">
              À 23 ans, je suis diplômé de l&apos;Université de Technologie de
              Compiègne (UTC), j&apos;ai étudié pendant 6 mois à Cracovie,
              j&apos;ai travaillé un an à Montréal.Cela fait 5 ans que je fais
              de la photo, numérique et argentique, 4 ans que je fais de la
              vidéo.
            </span>
            <span className="propos-description2">
              <span>
                En parallèle de mes études, je me suis engagé dans de nombreuses
                associations.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                J&apos;ai été caméraman et monteur pour
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://assos.utc.fr/ssp/accueil.php"
                target="_blank"
                rel="noreferrer noopener"
                className="propos-link3"
              >
                l&apos;association de vidéo de mon école
              </a>
              <span>.</span>
              <br></br>
              <span>
                J&apos;ai été photographe pour l&apos;association de
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://assos.utc.fr/picsart/"
                target="_blank"
                rel="noreferrer noopener"
                className="propos-link4"
              >
                photographie de mon école
              </a>
              <span>.</span>
              <br></br>
              <span>
                J&apos;ai été
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.scout-fee.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="propos-link5"
              >
                chef scout
              </a>
              <span>
                {' '}
                pendant 6 ans. J&apos;ai le BAFA et un équivalent du BAFD.
                J&apos;ai organisé des camps pour plus de 30 enfants avec sous
                ma responsabilité une équipe de 4 à 6 personnes.
              </span>
              <br></br>
              <span>
                J&apos;ai été acteur principal d&apos;une
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://assos.utc.fr/comedmus/2021/"
                target="_blank"
                rel="noreferrer noopener"
                className="propos-link6"
              >
                comédie musicale
              </a>
              <span> jouée devant 1700 personnes.</span>
              <br></br>
              <span>
                Je fais beaucoup de sport, notamment de l&apos;alpinisme, du
                trail, du VTT et de la voile.
              </span>
              <br></br>
            </span>
          </div>
          <div className="propos-gallery">
            <img
              alt="image"
              src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
              className="propos-image2"
            />
            <img
              alt="image"
              src="/austin-distel-800w.png"
              className="propos-image3"
            />
          </div>
          <div className="propos-recruit">
            <h2 className="propos-text27">
              “rester immobile ne sert à rien. Il faut choisir entre progresser
              ou régresser. Allons donc de l’avant et le sourire aux lèvres” -
              Baden Powell
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propos
