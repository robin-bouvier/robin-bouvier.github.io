import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import Check from './check'
import Line from './line'
import IconContainer from './icon-container'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <section className={styles['hero']}>
        <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className={styles['video']}
        ></video>
        <header data-thq="thq-navbar" className={styles['navbar']}>
          <img alt="image" src="/logo.svg" className={styles['branding']} />
          <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
            <div className={styles['hamburger']}>
              <img
                alt="image"
                src="/hamburger.svg"
                className={styles['icon']}
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className={styles['nav']}
            >
              <div className={styles['container1']}>
                <img alt="image" src="/logo.svg" className={styles['image']} />
                <div data-thq="thq-close-menu" className={styles['menu-close']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon01']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className={styles['nav1']}
              >
                <span className={styles['text']}>About</span>
                <span className={styles['text01']}>Features</span>
                <span className={styles['text02']}>Pricing</span>
                <span className={styles['text03']}>Team</span>
                <span className={styles['text04']}>Blog</span>
              </nav>
              <div className={styles['container2']}>
                <button
                  className={` ${styles['login']} ${projectStyles['button']} `}
                >
                  Login
                </button>
                <button className={projectStyles['button']}>Register</button>
              </div>
            </div>
            <div className={styles['icon-group']}>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={styles['icon03']}
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon05']}
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className={styles['icon07']}
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className={styles['hero-content']}>
          <div className={styles['header-container']}>
            <div className={styles['header']}>
              <h1 className={styles['heading']}>
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text06']}>imagination</span>
                <br></br>
              </h1>
            </div>
            <p className={styles['caption']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <button
            className={` ${projectStyles['button']} ${styles['button']} `}
          >
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className={styles['note']}>
        <h2 className={styles['caption01']}>
          The most comprehensive lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
        </h2>
      </section>
      <section className={styles['statistics']}>
        <div className={styles['content']}>
          <div className={styles['stat']}>
            <h3 className={styles['header01']}>$1.69M</h3>
            <span className={styles['caption02']}>
              Consectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className={styles['stat1']}>
            <h3 className={styles['header02']}>Multiverse</h3>
            <span className={styles['caption03']}>Unde omnis iste</span>
          </div>
          <div className={styles['stat2']}>
            <h3 className={styles['header03']}>500K</h3>
            <span className={styles['caption04']}>Accusantium doloremque</span>
          </div>
        </div>
      </section>
      <section className={styles['slider']}>
        <div className={styles['header04']}>
          <h2 className={styles['heading01']}>
            <span>The first all-in-one verse </span>
            <span className={styles['text12']}>o</span>
            <span className={styles['text13']}>
              ptimized for growth.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className={styles['selector']}>
          <p className={styles['caption05']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className={styles['slide-titles']}>
            <div className={projectStyles['slide-title']}>
              <span>Metaverse</span>
            </div>
            <div
              className={` ${projectStyles['slide-title']} ${projectStyles['slide-title-active']} `}
            >
              <span>Ecosystems</span>
            </div>
            <div className={projectStyles['slide-title']}>
              <span>Development</span>
            </div>
            <div className={projectStyles['slide-title']}>
              <span>Integration</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['slides']}>
        <div
          className={` ${styles['slider1']} ${projectStyles['slider']} ${projectStyles['blaze-slider']} `}
        >
          <div
            className={` ${styles['slider-container']} ${projectStyles['blaze-container']} `}
          >
            <div
              className={` ${styles['slider-track-container']} ${projectStyles['blaze-track-container']} `}
            >
              <div
                className={` ${styles['slider-track']} ${projectStyles['blaze-track']} `}
              >
                <div
                  data-role="current-banner"
                  className={projectStyles['banner']}
                >
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className={styles['image01']}
                  />
                  <div className={styles['content01']}>
                    <div className={styles['header05']}>
                      <h3 className={styles['heading02']}>Metaverse</h3>
                      <p className={styles['caption06']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className={styles['more']}>
                      <span className={styles['caption07']}>Read More</span>
                      <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-role="current-banner"
                  className={projectStyles['banner']}
                >
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className={styles['image02']}
                  />
                  <div className={styles['content02']}>
                    <div className={styles['header06']}>
                      <h3 className={styles['heading03']}>Ecosystems</h3>
                      <p className={styles['caption08']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className={styles['more1']}>
                      <span className={styles['caption09']}>Read More</span>
                      <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-role="current-banner"
                  className={projectStyles['banner']}
                >
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className={styles['image03']}
                  />
                  <div className={styles['content03']}>
                    <div className={styles['header07']}>
                      <h3 className={styles['heading04']}>Development</h3>
                      <p className={styles['caption10']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className={styles['more2']}>
                      <span className={styles['caption11']}>Read More</span>
                      <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-role="current-banner"
                  className={projectStyles['banner']}
                >
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className={styles['image04']}
                  />
                  <div className={styles['content04']}>
                    <div className={styles['header08']}>
                      <h3 className={styles['heading05']}>Integration</h3>
                      <p className={styles['caption12']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className={styles['more3']}>
                      <span className={styles['caption13']}>Read More</span>
                      <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['controls']}>
              <button
                data-role="previous-banner-button"
                className={` ${styles['previous']} ${projectStyles['blaze-prev']} ${projectStyles['button']} `}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon17']}>
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className={` ${styles['next']} ${projectStyles['blaze-next']} ${projectStyles['button']} `}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon19']}>
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></Script>
        </div>
      </section>
      <section className={styles['get-started']}>
        <div className={styles['header-container1']}>
          <div className={styles['header09']}>
            <h2 className={styles['heading06']}>
              Companies will dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore veniam and more opportunities.
            </h2>
            <p className={styles['caption14']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className={styles['button1']}>
            <button className={projectStyles['button']}>
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="/getstarted-800w.png"
          className={styles['image05']}
        />
      </section>
      <section className={styles['objectives']}>
        <div className={styles['content05']}>
          <span className={styles['text19']}>Objectives</span>
          <div className={styles['objectives-list']}>
            <div className={projectStyles['objective']}>
              <h3 className={styles['text20']}>Growth</h3>
              <p className={styles['text21']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              className={` ${projectStyles['objective']} ${styles['objective1']} `}
            >
              <h3 className={styles['text22']}>Develop</h3>
              <p className={styles['text23']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              className={` ${projectStyles['objective']} ${styles['objective2']} `}
            >
              <h3 className={styles['text24']}>Optimize</h3>
              <p className={styles['text25']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['growth']}>
        <div className={styles['content06']}>
          <div className={styles['header10']}>
            <div className={styles['header11']}>
              <h2 className={styles['heading07']}>
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text27']}>growth.</span>
                <br></br>
              </h2>
            </div>
            <p className={styles['caption15']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className={styles['caption16']}>
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className={styles['testimonial']}>
            <div className={styles['content07']}>
              <span className={styles['text29']}>Testimonial</span>
              <p className={styles['text30']}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className={styles['information']}>
              <div className={styles['author']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className={styles['icon21']}
                />
                <span className={styles['name']}>Andrew Gonzales</span>
              </div>
              <img
                alt="image"
                src="/logoipsum.svg"
                className={styles['from']}
              />
            </div>
          </div>
        </div>
        <div className={styles['images']}>
          <div className={styles['square']}></div>
          <img
            alt="image"
            src="/growth-1400w.png"
            className={styles['image06']}
          />
        </div>
      </section>
      <section className={styles['experience']}>
        <div className={styles['images1']}>
          <div className={styles['square1']}></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className={styles['image07']}
          />
        </div>
        <div className={styles['content08']}>
          <div className={styles['header12']}>
            <div className={styles['header-container2']}>
              <div className={styles['header13']}>
                <h2 className={styles['heading08']}>
                  <span>A worlds class </span>
                  <span className={styles['text32']}>experience</span>
                </h2>
              </div>
              <p className={styles['caption17']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className={styles['checkmarks']}>
              <div className={styles['check']}>
                <div className={styles['mark']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon22']}>
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className={styles['text33']}>
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className={styles['check1']}>
                <div className={styles['mark1']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon24']}>
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className={styles['text34']}>
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles['check2']}>
                <div className={styles['mark2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon26']}>
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className={styles['text35']}>
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className={styles['check3']}>
                <div className={styles['mark3']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon28']}>
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className={styles['text36']}>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className={styles['testimonial1']}>
            <div className={styles['content09']}>
              <span className={styles['text37']}>Testimonial</span>
              <p className={styles['text38']}>
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className={styles['information1']}>
              <div className={styles['author1']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className={styles['icon30']}
                />
                <span className={styles['name1']}>Cory Smith</span>
              </div>
              <img
                alt="image"
                src="/logoipsum-2.svg"
                className={styles['from1']}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles['create']}>
        <div className={styles['content10']}>
          <div className={styles['header14']}>
            <h2 className={styles['heading09']}>
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text40']}>environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button
            className={` ${styles['button3']} ${projectStyles['button']} `}
          >
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className={styles['comparision']}>
        <div className={styles['header-container3']}>
          <div className={styles['header15']}>
            <h2 className={styles['heading10']}>
              <span>Environment c</span>
              <span className={styles['text47']}>omparision</span>
              <br></br>
            </h2>
          </div>
          <p className={styles['caption18']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className={styles['table']}>
          <div className={styles['row']}>
            <div className={styles['headers']}>
              <span className={styles['text49']}>Placeholder</span>
            </div>
            <div className={styles['plans']}>
              <div className={styles['row01']}>
                <span className={styles['text50']}>TOGHTR</span>
                <span className={styles['text51']}>AGENCY</span>
                <span className={styles['text52']}>FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className={styles['row02']}>
            <div className={styles['headers1']}>
              <span className={styles['text53']}>
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className={styles['plans1']}>
              <div className={styles['row03']}>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row04']}>
            <div className={styles['headers2']}>
              <span className={styles['text54']}>
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className={styles['plans2']}>
              <div className={styles['row05']}>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row06']}>
            <div className={styles['headers3']}>
              <span className={styles['text55']}>
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className={styles['plans3']}>
              <div className={styles['row07']}>
                <div className={projectStyles['value']}>
                  <span className={styles['text56']}>Custom</span>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row08']}>
            <div className={styles['headers4']}>
              <span className={styles['text57']}>
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className={styles['plans4']}>
              <div className={styles['row09']}>
                <div className={projectStyles['value']}>
                  <span className={styles['text58']}>Unlimited</span>
                </div>
                <div className={projectStyles['value']}>
                  <span className={styles['text59']}>Limited</span>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row10']}>
            <div className={styles['headers5']}>
              <span className={styles['text60']}>
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className={styles['plans5']}>
              <div className={styles['row11']}>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
                <div className={projectStyles['value']}>
                  <span className={styles['text61']}>Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row12']}>
            <div className={styles['headers6']}>
              <span className={styles['text62']}>
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className={styles['plans6']}>
              <div className={styles['row13']}>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row14']}>
            <div className={styles['headers7']}>
              <span className={styles['text63']}>
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className={styles['plans7']}>
              <div className={styles['row15']}>
                <div className={projectStyles['value']}>
                  <Check></Check>
                </div>
                <div className={projectStyles['value']}>
                  <span className={styles['text64']}>Limited</span>
                </div>
                <div className={projectStyles['value']}>
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['data']}>
        <div className={styles['header-container4']}>
          <div className={styles['header16']}>
            <div className={styles['row16']}>
              <h2 className={styles['heading11']}>
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text66']}>platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className={styles['caption19']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className={styles['content11']}>
          <div className={styles['image08']}>
            <img
              alt="image"
              src="/data-1400w.png"
              className={styles['image09']}
            />
          </div>
          <div className={styles['accordion']}>
            <div
              data-role="accordion-container"
              className={projectStyles['accordion']}
            >
              <div>
                <h3 className={styles['header17']}>Management</h3>
                <p
                  data-role="accordion-content"
                  className={projectStyles['accordion-content']}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="root-class-name"></IconContainer>
            </div>
            <div
              data-role="accordion-container"
              className={projectStyles['accordion']}
            >
              <div>
                <h3 className={styles['header18']}>Integrations</h3>
                <p
                  data-role="accordion-content"
                  className={projectStyles['accordion-content']}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="root-class-name1"></IconContainer>
            </div>
            <div
              data-role="accordion-container"
              className={projectStyles['accordion']}
            >
              <div>
                <h3 className={styles['header19']}>Customer Solutions</h3>
                <p
                  data-role="accordion-content"
                  className={projectStyles['accordion-content']}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="root-class-name2"></IconContainer>
            </div>
            <div
              data-role="accordion-container"
              className={projectStyles['accordion']}
            >
              <div>
                <h3 className={styles['header20']}>Recruiting</h3>
                <p
                  data-role="accordion-content"
                  className={projectStyles['accordion-content']}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="root-class-name3"></IconContainer>
            </div>
            <div>
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['customer']}>
        <div className={styles['header21']}>
          <h2 className={styles['heading12']}>
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text69']}>
              product development process
            </span>
            <br></br>
          </h2>
        </div>
        <div className={styles['quotes']}>
          <div className={styles['quote']}>
            <p className={styles['quote1']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className={styles['author2']}>
              <span className={styles['name2']}>Joanna Smith</span>
              <span className={styles['location']}>Briville</span>
            </div>
          </div>
          <div className={styles['quote2']}>
            <p className={styles['quote3']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className={styles['author3']}>
              <span className={styles['name3']}>Joanna Smith</span>
              <span className={styles['location1']}>Briville</span>
            </div>
          </div>
          <div className={styles['quote4']}>
            <p className={styles['quote5']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className={styles['author4']}>
              <span className={styles['name4']}>Joanna Smith</span>
              <span className={styles['location2']}>Briville</span>
            </div>
          </div>
          <div className={styles['quote6']}>
            <p className={styles['quote7']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className={styles['author5']}>
              <span className={styles['name5']}>Joanna Smith</span>
              <span className={styles['location3']}>Briville</span>
            </div>
          </div>
        </div>
        <div className={styles['controls1']}>
          <button
            className={` ${styles['previous1']} ${projectStyles['button']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon31']}>
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className={` ${styles['next1']} ${projectStyles['button']} `}>
            <svg viewBox="0 0 1024 1024" className={styles['icon33']}>
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button
            className={` ${projectStyles['button']} ${styles['button4']} `}
          >
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className={styles['faq']}>
        <div className={styles['header22']}>
          <h2 className={styles['heading13']}>
            <span>Frequently asked </span>
            <span className={styles['text75']}>questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className={styles['content20']}>
          <div className={styles['column']}>
            <div className={styles['element04']}>
              <h3 className={styles['header23']}>
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className={styles['content21']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className={styles['element05']}>
              <h3 className={styles['header24']}>
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className={styles['content22']}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className={styles['element06']}>
              <h3 className={styles['header25']}>
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className={styles['content23']}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={styles['column1']}>
            <div className={styles['element07']}>
              <h3 className={styles['header26']}>
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className={styles['content24']}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles['element08']}>
              <h3 className={styles['header27']}>
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className={styles['content25']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className={styles['element09']}>
              <h3 className={styles['header28']}>
                Incididunt ut labore et dolore?
              </h3>
              <p className={styles['content26']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles['footer']}>
        <div className={styles['content27']}>
          <div className={styles['main']}>
            <div className={styles['branding1']}>
              <img alt="image" src="/logo.svg" className={styles['image10']} />
              <span className={styles['text77']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className={styles['links']}>
              <div className={styles['column2']}>
                <span className={styles['header29']}>Company</span>
                <div className={styles['list']}>
                  <Link to="/home" className={styles['navlink']}>
                    About
                  </Link>
                  <Link to="/home" className={styles['navlink01']}>
                    Services
                  </Link>
                  <Link to="/home" className={styles['navlink02']}>
                    How
                  </Link>
                  <Link to="/home" className={styles['navlink03']}>
                    <span className={styles['text78']}>Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className={styles['column3']}>
                <span className={styles['header30']}>Extern</span>
                <div className={styles['list1']}>
                  <Link to="/home" className={styles['navlink04']}>
                    News
                  </Link>
                  <Link to="/home" className={styles['navlink05']}>
                    Articles
                  </Link>
                  <Link to="/home" className={styles['navlink06']}>
                    Blog
                  </Link>
                  <Link to="/home" className={styles['navlink07']}>
                    Privacy
                  </Link>
                  <Link to="/home" className={styles['navlink08']}>
                    Terms
                  </Link>
                  <Link to="/home" className={styles['navlink09']}>
                    Legal
                  </Link>
                  <Link to="/home" className={styles['navlink10']}>
                    Press
                  </Link>
                </div>
              </div>
              <div className={styles['column4']}>
                <span className={styles['header31']}>Social</span>
                <div className={styles['list2']}>
                  <Link to="/home" className={styles['navlink11']}>
                    LinkedIn
                  </Link>
                  <Link to="/home" className={styles['navlink12']}>
                    Twitter
                  </Link>
                  <Link to="/home" className={styles['navlink13']}>
                    Instagram
                  </Link>
                  <Link to="/home" className={styles['navlink14']}>
                    Facebook
                  </Link>
                  <Link to="/home" className={styles['navlink15']}>
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['bottom']}>
            <span className={styles['text80']}>
              © 2022 togthr - All rights reserved
            </span>
            <button
              data-role="scroll-top"
              className={` ${styles['button5']} ${projectStyles['button']} `}
            >
              <img alt="image" src="/arrow.svg" className={styles['image11']} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home

