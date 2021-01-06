import React, { useState, Fragment } from 'react';
import partner from '../assets/partn.png';
import workers from '../assets/workers.jpg';
import cardImg1 from '../assets/blog1.jpg';
import cardImg12 from '../assets/blog2.jpg';
import cardImg3 from '../assets/blog3.jpg';
import surv from '../assets/land-verification.jpg';
import iconShape from '../assets/icon-shape.png';

import LorR from './LorR';

import { SliderData as slides } from './sliderData';

import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Con2 from './Con2';

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 10000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      <div className='newP'>
        <div className='beginning'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
            data-interval='6500'
          >
            <div className='carousel-inner'>
              <div className='auto-container'>
                <div className='carousel-item active'>
                  <div>
                    <HeadShake>
                      <h3>We are</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2>FloraHomes GC,</h2>
                      <p>
                        Foremost Online Property Verification & Real Estate
                        Investment Company.
                      </p>
                      <button type='button' className='custom-btn btn btn-lg'>
                        Our Services
                      </button>
                    </Fade>
                  </div>
                </div>

                <div className='carousel-item'>
                  <div>
                    <HeadShake>
                      <h3>Welcome to the world of</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2>SECURE, STERLING &amp; SEAMLESS</h2>
                      <p>Services In Real Estate & Property Development</p>
                      <button type='button' className='custom-btn btn btn-lg'>
                        Our Services
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev control'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next control'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>

        <div className='img'>
          <h4 className='text-center'>Our partner</h4>
          <img id='firstP' src={partner} alt='partners' />
        </div>

        <div className='container con1'>
          <div className='row'>
            <div className='col-sm'>
              <span className='icon-dots'></span>

              <div className='image-box'>
                <figure className='image'>
                  <img id='bmw' src={surv} alt='' />
                  <img src={iconShape} alt='' className='bmw2' />
                </figure>
              </div>
            </div>

            <div className='col-sm'>
              <h4>Why we get</h4>
              <h2>Our hands dirty for you</h2>
              <p>
                To prevent real estate losses and give investors futuristic
                landed property investment; in terms of verifying the property,
                acquiring it, documenting it, designing, building and managing
                the property.
              </p>
            </div>
          </div>
        </div>

        <Con2 />

        {/* first cards */}
        <div className='con3'>
          <div className='text-center'>
            <h4>Products</h4>
            <h2>Services we render</h2>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <div className='svg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='46'
                    height='46'
                    fill='currentColor'
                    className='bi bi-house-door'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z'
                    />
                    <path
                      fillRule='evenodd'
                      d='M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                    />
                  </svg>
                </div>

                <div className='word'>
                  <h4>Verification Service</h4>
                  <p>
                    Save yourself from demolition, 3rd party claimant, and Scams
                    by availing yourself of our verification service which
                    brings together our field expert to help you know the status
                    of the landed property you want to buy.
                  </p>
                </div>

                <div className='chevron'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    />
                  </svg>
                </div>
              </div>

              <div className='col-sm'>
                <div className='svg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='46'
                    height='46'
                    fill='currentColor'
                    className='bi bi-search'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
                    />
                    <path
                      fillRule='evenodd'
                      d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
                    />
                  </svg>
                </div>

                <div className='word'>
                  <h4>Complete Property Buyer Services</h4>
                  <p>
                    Do you need to buy your choice property at your choice
                    location, or you just need property services like Survey,
                    Valuation, Documentation, Sourcing, Negotiation, Payment . .
                    . then engage this Service at 100% done for you. This
                    service caters for both individuals, corporate
                    organizations, within Nigeria and in Diaspora.
                  </p>
                </div>

                <div className='chevron'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button type='button' className='custom-btn btn btn-lg'>
              Access Now
            </button>
          </div>
        </div>

        <div className='sec2'>
          <h2 className='text-center'>WHAT WE STAND FOR</h2>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              id='inlineFrameExample'
              title='FloraHomeGC Intro Video'
              loading='lazy'
              className='embed-responsive-item'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1'
              allowFullScreen
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div>

        <div className='sec3'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h4>PURPOSE</h4>
                <h2>our promise to you</h2>
                <ul>
                  <li className='noB'>
                    Providing 100% done-for-you real estate services to existing
                    and aspiring property investors.
                  </li>
                  <li className='noB'>
                    Delivering simplified quality information to the mobile
                    phones of every property investor using technology.
                  </li>
                  <li className='noB'>
                    Engaging green architecture that revitalizes every soul
                    occupying the space.
                  </li>
                </ul>
                <button type='button' className='custom-btn btn btn-lg'>
                  Learn More...
                </button>
              </div>
              <div className='col-sm'>
                <div className='clipBorder'>
                  <img src={workers} alt='workers' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sec4'>
          <div className='testTile text-center'>
            <h4>TESTIMONIAL</h4>
            <h2>What Clients Say</h2>
          </div>

          <section className='slider'>
            <i className='fa fa-chevron-left' onClick={prevSlide} />
            <i className='fa fa-chevron-right' onClick={nextSlide} />
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <div className='slid'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='46'
                        height='46'
                        fill='currentColor'
                        className='bi bi-chat-left-quote'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
                        />
                        <path
                          fillRule='evenodd'
                          d='M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z'
                        />
                      </svg>
                      <p className='statement'>{slide.p}</p>
                      <div className='slidFooter'>
                        <p className='text-center' id='name'>
                          {slide.name}
                        </p>
                        <p className='text-center'>
                          {slide.rating.map((r, index) => {
                            return (
                              <i
                                key={index}
                                className='fa fa-star'
                                aria-hidden='true'
                              ></i>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        </div>

        <div className='sec5'>
          <div className='text-center'>
            <h4>BLOGS</h4>
            <h2>Eye-Opening Content</h2>
          </div>
          <div className='card-deck'>
            <div className='card'>
              <div className='secImg'>
                <img
                  id='sec5Img'
                  className='card-img-top'
                  src={cardImg1}
                  alt='Card cap'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>
                  <p>
                    <i
                      className='fas fa-user-alt'
                      style={{ marginRight: '10px' }}
                    ></i>
                    FLORAHOMES ADMIN
                    <span className='calender' style={{ float: 'right' }}>
                      <i className='fas fa-calendar-check'></i>{' '}
                      <span className='text-muted'>2020-12-14</span>
                    </span>
                  </p>
                  <span>
                    <i
                      className='fas fa-tags'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small className='text-muted'>Property Documentation</small>
                  </span>
                </h5>
                <p className='card-text'>
                  Lagos Set To Go Digital in Land Related Services Come 2021
                </p>
              </div>
              <div className='card-footer'>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <button type='button' className='custom-btn btn btn-lg'>
                  Read More...
                </button>
              </div>
            </div>
            <div className='card'>
              <div className='secImg'>
                <img
                  id='sec5Img'
                  className='card-img-top'
                  src={cardImg12}
                  alt='Card cap'
                />
              </div>

              <div className='card-body'>
                <h5 className='card-title'>
                  <p>
                    <i
                      className='fas fa-user-alt'
                      style={{ marginRight: '10px' }}
                    ></i>
                    FLORAHOMESGC
                    <span className='calender' style={{ float: 'right' }}>
                      <i className='fas fa-calendar-check'></i>{' '}
                      <span className='text-muted'>2020-10-07</span>
                    </span>
                  </p>
                  <span>
                    <i
                      className='fas fa-tags'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small className='text-muted'>Real Estate Investment</small>
                  </span>
                </h5>
                <p className='card-text'>Know Your Land Size</p>
              </div>
              <div className='card-footer'>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <button type='button' className='custom-btn btn btn-lg'>
                  Read More...
                </button>
              </div>
            </div>
            <div className='card'>
              <div className='secImg'>
                <img
                  id='sec5Img'
                  className='card-img-top'
                  src={cardImg3}
                  alt='Card cap'
                />
              </div>

              <div className='card-body'>
                <h5 className='card-title'>
                  <p>
                    <i
                      className='fas fa-user-alt'
                      style={{ marginRight: '10px' }}
                    ></i>
                    FLORAHOMESGC
                    <span className='calender' style={{ float: 'right' }}>
                      <i className='fas fa-calendar-check'></i>{' '}
                      <span className='text-muted'>2020-05-07</span>
                    </span>
                  </p>
                  <span>
                    <i
                      className='fas fa-tags'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small className='text-muted'>
                      Property Authentication & Verification
                    </small>
                  </span>
                </h5>
                <p className='card-text'>Know Your Property Title</p>
              </div>
              <div className='card-footer'>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <button type='button' className='custom-btn btn btn-lg'>
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='sec6'></div>
      </div>

      <LorR />
    </Fragment>
  );
};

export default Home;
