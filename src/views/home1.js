import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import Testimonial from '../components/testimonial'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Hola template</title>
        <meta property="og:title" content="Home1 - Hola template" />
      </Helmet>
      <div className="home1-navbar">
        <header data-thq="thq-navbar" className="home1-navbar-interactive">
          <div className="home1-branding">
            <span className="home1-text">rb.</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home1-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home1-nav"
            >
              <div className="home1-right">
                <NavLinks className="home1-nav-links"></NavLinks>
                <div className="home1-button">
                  <button className="home1-work-with-us button">
                    <span className="home1-text001">cv</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home1-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <button className="home1-work-with-us1 button">
              <span className="home1-text002">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home1-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home1-nav1"
            >
              <div className="home1-top">
                <div className="home1-branding1">
                  <span className="home1-text003">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home1-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home1-middle"
              >
                <div className="home1-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home1-work-with-us2 button">
                  <span className="home1-text004">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home1-hero">
        <div className="home1-header">
          <h1 className="home1-text005">
            <span>robin bouvier</span>
            <br></br>
            <span>ingénieur informatique</span>
            <br></br>
            <span>créatif compulsif</span>
          </h1>
        </div>
        <div className="home1-hero-image">
          <img alt="image" src="/computer.svg" className="home1-image02" />
        </div>
      </div>
      <div className="home1-who">
        <div className="home1-header1">
          <div className="home1-heading">
            <h2 className="home1-text011">
              We are a technology-driven design studio.
            </h2>
            <span className="home1-text012">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <button className="home1-button1 button">let’s chat</button>
        </div>
        <div className="home1-preview">
          <div className="home1-image03">
            <img alt="image" src="/preview.svg" className="home1-image04" />
          </div>
          <div className="home1-video">
            <video src poster="/video.svg" className="home1-video1"></video>
          </div>
        </div>
      </div>
      <div className="home1-information">
        <div className="home1-purpose">
          <span className="home1-caption">What we do</span>
          <span className="home1-description">
            We arrive at business-reflective design decisions by integrating
            strategic thinking with mature design and transferrable
            functionality. From helping transform the image of a legacy brand to
            creating an ultra-modern identity for a space tech startup - we’re
            always up for a fresh challenge.
          </span>
        </div>
        <div className="home1-industries">
          <span className="home1-caption1">INDUSTRIES</span>
          <div className="home1-list">
            <div data-role="accordion-container" className="home1-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home1-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text013">Perspiciatis</span>
                <span className="home1-text014">Nemo voluptatem</span>
                <span className="home1-text015">Dolore magnam</span>
                <span className="home1-text016">Tempora</span>
                <span className="home1-text017">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home1-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text018">Perspiciatis</span>
                <span className="home1-text019">Nemo voluptatem</span>
                <span className="home1-text020">Dolore magnam</span>
                <span className="home1-text021">Tempora</span>
                <span className="home1-text022">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item1">
              <div
                data-role="accordion-trigger"
                className="home1-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="home1-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="home1-text023">Perspiciatis</span>
                <span className="home1-text024">Nemo voluptatem</span>
                <span className="home1-text025">Dolore magnam</span>
                <span className="home1-text026">Tempora</span>
                <span className="home1-text027">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item2">
              <div
                data-role="accordion-trigger"
                className="home1-trigger3 accordion-trigger"
              >
                <span className="home1-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text028">Perspiciatis</span>
                <span className="home1-text029">Nemo voluptatem</span>
                <span className="home1-text030">Dolore magnam</span>
                <span className="home1-text031">Tempora</span>
                <span className="home1-text032">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item3">
              <div
                data-role="accordion-trigger"
                className="home1-trigger4 accordion-trigger"
              >
                <span className="home1-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text033">Perspiciatis</span>
                <span className="home1-text034">Nemo voluptatem</span>
                <span className="home1-text035">Dolore magnam</span>
                <span className="home1-text036">Tempora</span>
                <span className="home1-text037">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item4">
              <div
                data-role="accordion-trigger"
                className="home1-trigger5 accordion-trigger"
              >
                <span className="home1-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text038">Perspiciatis</span>
                <span className="home1-text039">Nemo voluptatem</span>
                <span className="home1-text040">Dolore magnam</span>
                <span className="home1-text041">Tempora</span>
                <span className="home1-text042">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item5">
              <div
                data-role="accordion-trigger"
                className="home1-trigger6 accordion-trigger"
              >
                <span className="home1-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text043">Perspiciatis</span>
                <span className="home1-text044">Nemo voluptatem</span>
                <span className="home1-text045">Dolore magnam</span>
                <span className="home1-text046">Tempora</span>
                <span className="home1-text047">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home1-item6">
              <div
                data-role="accordion-trigger"
                className="home1-trigger7 accordion-trigger"
              >
                <span className="home1-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home1-text048">Perspiciatis</span>
                <span className="home1-text049">Nemo voluptatem</span>
                <span className="home1-text050">Dolore magnam</span>
                <span className="home1-text051">Tempora</span>
                <span className="home1-text052">Reprehenderit qui</span>
              </div>
            </div>
          </div>
          <div>
            <Script
              html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="home1-section">
        <div className="home1-case-studies">
          <div className="home1-caption2">
            <span className="home1-text053">Case Studies</span>
            <div className="home1-date-range">
              <span className="home1-text054">2022</span>
              <span className="home1-text055">——</span>
              <span className="home1-text056">2019</span>
            </div>
          </div>
          <div className="home1-gallery">
            <div className="home1-row">
              <div className="home1-case">
                <img
                  alt="image"
                  src="/study%20%231-1300w.png"
                  className="home1-image05"
                />
                <div className="home1-heading1">
                  <span className="home1-text057">Perspiciatis</span>
                  <span className="home1-text058">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home1-case1">
                <img
                  alt="image"
                  src="/study%20%232-1400w.png"
                  className="home1-image06"
                />
                <div className="home1-heading2">
                  <span className="home1-text059">Nemo voluptatem</span>
                  <span className="home1-text060">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="home1-row1">
              <div className="home1-case2">
                <img
                  alt="image"
                  src="/study%20%233-1400w.png"
                  className="home1-image07"
                />
                <div className="home1-heading3">
                  <span className="home1-text061">Dolore magnam</span>
                  <span className="home1-text062">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home1-case3">
                <img
                  alt="image"
                  src="/study%20%234-1400w.png"
                  className="home1-image08"
                />
                <div className="home1-heading4">
                  <span className="home1-text063">Tempora</span>
                  <span className="home1-text064">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="home1-row2">
              <div className="home1-case4">
                <img
                  alt="image"
                  src="/study%20%235-1300w.png"
                  className="home1-image09"
                />
                <div className="home1-heading5">
                  <span className="home1-text065">Reprehenderit qui</span>
                  <span className="home1-text066">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home1-case5">
                <img
                  alt="image"
                  src="/study%20%236-1300w.png"
                  className="home1-image10"
                />
                <div className="home1-heading6">
                  <span className="home1-text067">Ullamco laboris</span>
                  <span className="home1-text068">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-testimonials">
          <div className="home1-header2">
            <span className="home1-caption3">What our clients say</span>
            <div className="home1-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="home1-icon2"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home1-text069">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="home1-icon4"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="home1-row3">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name12"></Testimonial>
            </div>
            <div className="home1-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name13"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name14"
              ></Testimonial>
            </div>
            <div className="home1-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="home1-book">
        <div className="home1-content1">
          <div className="home1-left">
            <h2 className="home1-text070">
              Book a 15 minutes consultation to check how can we help you
            </h2>
            <button className="home1-button2 button">
              <span className="home1-text071">book a call</span>
            </button>
          </div>
          <img alt="image" src="/message.svg" className="home1-image11" />
        </div>
      </div>
      <div className="home1-section1">
        <div className="home1-about-us">
          <div className="home1-header3">
            <span className="home1-caption4">à propos</span>
            <h2 className="home1-description1">
              <span className="home1-text072">23 ans. </span>
              <br></br>
              <span>
                diplômé de l&apos;université de technologie de Compiègne.
              </span>
              <br></br>
              <br></br>
            </h2>
          </div>
          <div className="home1-statistics">
            <div className="home1-statistic">
              <span className="home1-text077">25</span>
              <span className="home1-text078">Years of experience</span>
            </div>
            <div className="home1-statistic1">
              <span className="home1-text079">40+</span>
              <span className="home1-text080">Years of Experts on board</span>
            </div>
            <div className="home1-statistic2">
              <span className="home1-text081">300+</span>
              <span className="home1-text082">Finished projects</span>
            </div>
            <div className="home1-statistic3">
              <span className="home1-text083">3</span>
              <span className="home1-text084">Offices worldwide</span>
            </div>
          </div>
          <div className="home1-dna">
            <span className="home1-caption5">Our DNA</span>
            <span className="home1-description2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <span className="home1-description3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="home1-gallery1">
            <img
              alt="image"
              src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
              className="home1-image12"
            />
            <img
              alt="image"
              src="/austin-distel-800w.png"
              className="home1-image13"
            />
          </div>
          <div className="home1-recruit">
            <h2 className="home1-text085">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <div className="home1-sections">
              <div className="home1-section2">
                <span className="home1-text086">lumenco laboris</span>
                <span className="home1-text087">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home1-section3">
                <span className="home1-text088">Adipiscing elit</span>
                <span className="home1-text089">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home1-section4">
                <span className="home1-text090">Dolor sit</span>
                <span className="home1-text091">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home1-section5">
                <span className="home1-text092">Huiposcing</span>
                <span className="home1-text093">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
            </div>
            <button className="home1-button3 button">
              <span className="home1-text094">
                <span>be part of our team</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="home1-footer">
        <div className="home1-header4">
          <span className="home1-branding2">hola studio</span>
          <div className="home1-socials">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link03"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link04"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link05"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link06"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link07"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link08"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link09"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home1-link10"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="home1-content2">
          <div className="home1-contact">
            <span className="home1-email">hola@hola.studio</span>
            <span className="home1-number">+4 222.345.987</span>
          </div>
          <div className="home1-links-row">
            <div className="home1-links-column">
              <span className="home1-link11">Responsive Web Design</span>
              <span className="home1-link12">Design to Code</span>
              <span className="home1-link13">Static Website Designer</span>
              <span className="home1-link14">Static Website Generator</span>
            </div>
            <div className="home1-links-column1">
              <span className="home1-link15">About</span>
              <span className="home1-link16">Team</span>
              <span className="home1-link17">News</span>
              <span className="home1-link18">Partners</span>
              <span className="home1-link19">Careers</span>
              <span className="home1-link20">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="home1-locations">
          <div className="home1-location">
            <span className="home1-title08">United States</span>
            <span className="home1-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="home1-location1">
            <span className="home1-title09">Romania</span>
            <span className="home1-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="home1-location2">
            <span className="home1-title10">United Kingdom</span>
            <span className="home1-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="home1-location3">
            <span className="home1-title11">Spain</span>
            <span className="home1-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="home1-socials1">
          <div className="home1-row4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home1-row5">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home1
