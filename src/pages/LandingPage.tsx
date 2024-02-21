import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import DnsIcon from '@mui/icons-material/Dns';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const LandingPage: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EcoSim - Education Is About Academic Excellence</title>

        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

        <link rel="stylesheet" href="./style.css" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Preload images */}
        <link rel="preload" as="image" href="./images/hero-banner.png" />
        <link
          rel="preload"
          as="image"
          href="./assets/images/hero-abs-1.png"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="./assets/images/hero-abs-2.png"
          media="(min-width: 768px)"
        />
      </head>
      <body id="top">
        {/* Header */}
        <header className="header" data-header>
          <div className="container">
            <h1>
              
              <span className="logo">
                EcoSim Tech
              </span>
            </h1>
            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <span className="logo">
                EcoSim Tech
                </span>
                <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
                  <ArrowUpwardIcon/>
                </button>
              </div>
            </nav>
            <div className="header-actions">
              <a href="/login" className="header-action-btn login-btn">
                <PersonIcon/>
                <span className="span">Login </span>
              </a>
              <button className="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
               <DnsIcon/>
              </button>
            </div>
            <div className="overlay" data-nav-toggler data-overlay></div>
          </div>
        </header>
      
        <div className="search-container" data-search-box>
          <div className="container">
            <button className="search-close-btn" aria-label="Close search" data-search-toggler>
            <AccessTimeFilledIcon/>
            </button>
            <div className="search-wrapper">
              <input type="search" name="search" placeholder="Search Here..." aria-label="Search" className="search-field" />
              <button className="search-submit" aria-label="Submit" data-search-toggler>
              <AccessTimeFilledIcon/>
              </button>
            </div>
          </div>
        </div>
        <main>
          <article>
            <section
              className="hero"
              id="home"
              aria-label="hero"
              style={{ backgroundImage: "url('./images/hero-bg.jpg')" }}
            >
              <div className="container">
                <div className="hero-content">
                  <p className="section-subtitle">Better Learning Future With Us</p>
                  <h2 className="h1 hero-title">Education Is About Academic Excellence</h2>
                  <p className="hero-text">
                    Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.
                  </p>
                  <a href="/login" className="btn btn-primary">
                    <span className="span">Get Started Today</span>
                    < ArrowRightAltIcon/>
                  </a>
                </div>
                <figure className="hero-banner">
                <img src="./images/hero-banner.png" width="500" height="500" loading="lazy" alt="hero banner" className="w-100" />
<img src="./images/hero-abs-1.png" width="318" height="352" loading="lazy" aria-hidden="true" alt="Hero banner" className="abs-img abs-img-1" />
<img src="./images/hero-abs-2.png" width="160" height="160" loading="lazy" aria-hidden="true" alt="Hero banner" className="abs-img abs-img-2" />

                </figure>
              </div>
            </section>
            <section className="section about" id="about" aria-label="about">
              <br /> <br /> <br /> <br />
              <div className="container">
                <figure className="about-banner">
                  <img src="./images/about-banner.jpg" width="450" height="590" loading="lazy" alt="about" className="w-100 about-img" />
                  <img src="./images/about-abs-1.jpg" width="188" height="242" loading="lazy" alt="Hero" aria-hidden="true" className="abs-img abs-img-1" />
                  <img src="./images/about-abs-2.jpg" width="150" height="200" loading="lazy" alt="Hero 1" aria-hidden="true" className="abs-img abs-img-2" />
                </figure>
                <div className="about-content">
                  <br /><br />
                  <p className="section-subtitle">Who We Are</p>
                  <h2 className="h2 section-title">We Offer The Best Carrier</h2>
                  <ul className="about-list">
                    <li className="about-item">
                      <div className="item-icon item-icon-1">
                        <img src="./images/about-icon-1.png" width="30" height="30" loading="lazy" aria-hidden="true" alt="Hero 2" />
                      </div>
                      <div>
                        <h3 className="h3 item-title">Industry Expert Instructor</h3>
                        <p className="item-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <span className="btn btn-primary">
                    <span className="span">Know About Us</span>
                    < ArrowRightAltIcon/>
                  </span>
                </div>
              </div>
            </section>
            {/* Newsletter Section */}
            <section className="section newsletter" aria-label="newsletter" style={{ backgroundImage: "url('./images/newsletter-bg.jpg')" }}>
              <div className="container">
                <h2 className="h2 section-title">Get Every Latest News</h2>
              </div>
            </section>
          </article>
        </main>
        {/* Footer Section */}
        
        <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              EduHome
            </span>
            <p className="section-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum.
            </p>
            
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Explore</p>
            </li>
            <li>
            <span className="footer-link">
              <ChevronRightIcon/>
  <span className="span">About Us</span>
</span>
       

            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Upcoming Events</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Blog & News</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">FAQ Question</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Testimonial</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Privacy Policy</span>
              </span>
            </li>
          </ul>
          {/* Other lists */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Useful Links</p>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
              <span className="span">Contact Us</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Pricing Plan</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Instructor Profile</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">FAQ</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Popular Courses</span>
              </span>
            </li>
            <li>
              <span className="footer-link">
              <ChevronRightIcon/>
                <span className="span">Terms & Conditions</span>
              </span>
            </li>
          </ul>
          {/* Other lists */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li className="footer-item">
            
            <LocationOnIcon/>
              <address className="footer-link">275 Quadra Street Victoria Road, New York</address>
            </li>
            <li className="footer-item">
              <SmartphoneIcon/>
              <a href="tel:+13647657839" className="footer-link">+ 1 (364) 765-7839</a>
            </li>
            <li className="footer-item">
             <LocalPhoneIcon/>
              <a href="tel:+13647657840" className="footer-link">+ 1 (364) 765-7840</a>
            </li>
            <li className="footer-item">
            <AlternateEmailIcon/>
            
              <a href="mailto:contact@eduhome.com" className="footer-link">contact@eduhome.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            Copyright 2022 EduHome. All Rights Reserved by{' '}
            <span className="copyright-link">
              codewithsadee
            </span>
          </p>
        </div>
      </div>
    </footer>
        <span className="back-top-btn" aria-label="Back to top" data-back-top-btn>
          <ArrowUpwardIcon/>
        </span>
        <script src="./js/script.ts" defer></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
};

export default LandingPage;
