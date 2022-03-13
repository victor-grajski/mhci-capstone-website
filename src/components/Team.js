import React, { useEffect } from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";
import { Scrollchor, swing, } from 'react-scrollchor';
import homeIcon from '../assets/images/home-alt.svg';
import chevron from '../assets/images/chevron-down_1.svg';
import linkedIn from '../assets/images/iconmonstr-linkedin-3.png';
import teamPhoto from '../assets/images/team-photo.png';
import teamPhoto500 from '../assets/images/team-photo-p-500.png';
import teamPhoto800 from '../assets/images/team-photo-p-800.png';
import teamPhoto1080 from '../assets/images/team-photo-p-1080.png';
import teamPhoto1600 from '../assets/images/team-photo-p-1600.png';
import logo from '../assets/images/logo-transparent.png'



export default function Team() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Team | Swervo`;
  });

    return (
      <div class="body-2">
        {/* <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
          <div class="container w-container">
            <div class="div-block-11">
              <a href="index.html" class="nav-link dark w-nav-link">99P Labs x MHCI</a>
            </div>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a href="are-we-there-yet.html" class="nav-link w-nav-link">are we there yet?</a>
              <a href="team.html" aria-current="page" class="nav-link w-nav-link w--current">Team</a>
              <a href="https://medium.com/mhci-99p-labs-capstone" target="_blank" rel="noreferrer" class="nav-link w-nav-link">Blog</a>
            </nav>
            <div class="menu-button w-nav-button">
              <div class="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div> */}
        <style type="text/css">
          {`
          .navbar-custom {




          }
          .navbar-custom a {

          }
          .nav-link-padding {
            padding-left: 50px;
          }
          `}
        </style>
        <Container>
          <Navbar expand="lg" style={{ fontFamily: 'Raleway' }}>
            <Navbar.Brand href="/"><img src={logo} alt="logo" height="50px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'transparent' }} />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="/research" style={{ paddingRight: '50px' }}>Research</Nav.Link>
                <Nav.Link href="/design" style={{ paddingRight: '50px' }}>Design</Nav.Link>
                <Nav.Link active={true} href="/team" style={{ paddingRight: '50px' }}>Team</Nav.Link>
                <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        

        <div class="section-2 wf-section">
          <div class="columns-3 w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
            <div class="column-9 w-col w-col-10 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
              <h1 class="heading-3">Meet the Team</h1>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
          </div>
          <div class="columns-2 w-row">
            <div class="w-col w-col-1 w-col-stack"></div>
            <div class="column-7 w-col w-col-6 w-col-stack">
              <div class="div-block-40">
                <div class="div-block-19">
                  <div class="div-block-18"><img src={teamPhoto} loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 47vw, 50vw" srcset={`${teamPhoto500} 500w, ${teamPhoto800} 800w, ${teamPhoto1080} 1080w, ${teamPhoto1600} 1600w, ${teamPhoto} 1800w`} alt="" class="image-12" /></div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack"></div>
            <div class="column-8 w-col w-col-3 w-col-stack">
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Our Road Trip Playlist</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/playlist/49m5J6XQbayAjiodsrVtTu" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="team-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack"></div>
          </div>
          <div class="narrow-full-width section-intro team w-row">
            <div class="w-col w-col-1 w-col-stack"></div>
            <div class="column-45 w-col w-col-10 w-col-stack">
              <p class="section-intro-text team">
                Hello! We&#x27;re a team of <a href="https://www.hcii.cmu.edu/academics/mhci" target="_blank" class="article-link" rel="noreferrer">MHCI</a> students at Carnegie Mellon University. The Master of Human-Computer Interaction (MHCI) program at Carnegie Mellon University is the first program in the world dedicated to preparing professionals for careers related to human-computer interaction, user experience design and user-centered research.
                 The program integrates service and design thinking into a rigorous HCI curriculum that prepares our students to design and guide the future of human and technology interactions.
                 <br /><br />
                 For our 7-month <a href="https://www.hcii.cmu.edu/academics/mhci/capstone-project" target="_blank" class="article-link" rel="noreferrer">Capstone</a> project, 
                 we were thrilled to have worked with a dream client in <a href="https://www.99plabs.com/" target="_blank" class="article-link" rel="noreferrer">99P Labs</a>
                 , a digital proving ground that helps further develop mobility and energy concepts through customer empathy, data science, and business innovation.
              </p>
            </div>
            <div class="w-col w-col-1 w-col-stack"></div>
          </div>
          <Scrollchor
            to="cam" 
            className="link-block-3 w-inline-block"
            animate={{ duration: 2000, easing: swing}}
          >
            <img src={chevron} loading="lazy" alt="" class="image-5" />
          </Scrollchor>
        </div>

        <div id="cam" class="section-3 wf-section">
          <div class="columns-4 w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-22">
                <div class="div-block-24">
                  <div class="div-block-26"></div>
                </div>
                <div class="div-block-25">
                  <h2 class="heading-4">Cam Davison</h2>
                  <h2 class="heading-5 hidden">Product Manager</h2>
                  <div class="div-block-27">
                    <a href="https://www.linkedin.com/in/cam-davison-8379573a/" target="_blank" class="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" class="image-3" /></a>
                    <a href="/#/" target="_blank" class="link-block-2 hidden w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" class="portfolio-icon" /></a>
                  </div>
                  <div class="div-block-28">
                    <p class="paragraph-5">I have 10 years of industry experience spanning advertising strategy, branding, product management and design. Most recently, I lived in Singapore for three years working on UX and product design with startups. I’m honored to have found new and meaningful ways to add value to families&#x27; lives via mobility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Cam&#x27;s Road Trip Anthem</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/6mw4IlMjJq52O8Qa48LuAW" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="cam-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div class="section-3 wf-section">
          <div class="columns-4 reverse w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-22">
                <div class="div-block-24">
                  <div class="div-block-26 jenny"></div>
                </div>
                <div class="div-block-25">
                  <h2 class="heading-4">Jenny Ong</h2>
                  <h2 class="heading-5 hidden">Lead UX Researcher</h2>
                  <div class="div-block-27">
                    <a href="https://www.linkedin.com/in/jong220/" target="_blank" class="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" class="image-3" /></a>
                    <a href="https://jennyongnotes.com/" target="_blank" class="link-block-2 w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" class="portfolio-icon" /></a>
                  </div>
                  <div class="div-block-28">
                    <p class="paragraph-5">Formerly an aspiring corporate lawyer who studied business at Georgetown, I pivoted into the digital innovation space to be a part of an innovation incubator within one of the largest global corporate finance firms. At Carnegie Mellon, I&#x27;m so excited to have played a role in designing the future of the mobile social experience with 99P Labs!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Jenny&#x27;s Road Trip Song</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/2PSeBKFabj27ud497FxQQy" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="jenny-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div class="section-3 wf-section">
          <div class="columns-4 w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-22">
                <div class="div-block-24">
                  <div class="div-block-26 lauren"></div>
                </div>
                <div class="div-block-25">
                  <h2 class="heading-4">Lauren Hung</h2>
                  <h2 class="heading-5 hidden">Lead Product Designer</h2>
                  <div class="div-block-27">
                    <a href="https://www.linkedin.com/in/lauren-hung-83a96aa4/" target="_blank" class="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" class="image-3" /></a>
                    <a href="http://laurenhung.com/" target="_blank" class="link-block-2 w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" class="portfolio-icon" /></a>
                  </div>
                  <div class="div-block-28">
                    <p class="paragraph-5">I am a research-driven product designer with a degree in Industrial Design from the Rhode Island School of Design. Before coming to MHCI, I worked as a UX designer in an IOT toy startup and UCLA’s HCI research lab. I’m driven by my curiosity about people’s needs and emerging technologies, and I am excited I got to build prototypes that explore the future of social interaction in automobiles!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Lauren&#x27;s Road Trip Song</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/0lkQOB949M2gLyut86aJ1b" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="lauren-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div class="section-3 wf-section">
          <div class="columns-4 reverse w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-22">
                <div class="div-block-24">
                  <div class="div-block-26 sarah"></div>
                </div>
                <div class="div-block-25">
                  <h2 class="heading-4">Sarah Hand</h2>
                  <h2 class="heading-5 hidden">Lead UX Researcher</h2>
                  <div class="div-block-27">
                    <a href="https://www.linkedin.com/in/sarahjessamynhand/" target="_blank" class="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" class="image-3" /></a>
                    <a href="https://sarahj930.github.io/sjh_portfolio/#/" target="_blank" class="link-block-2 w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" class="portfolio-icon" /></a>
                  </div>
                  <div class="div-block-28">
                    <p class="paragraph-5">As a recent graduate in Psychology and Computer Science from UNC, I am interested in how human-centered design can support human’s well-being and bring about positive societal change. I came to MHCI to build my UX research and design skills before beginning my career in industry. I&#x27;m excited to have explored technology-assisted social interaction from a novel perspective!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Sarah&#x27;s Road Trip Song</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/39q7xibBdRboeMKUbZEB6g" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="sarah-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>
        <div class="section-3 wf-section">
          <div class="columns-4 w-row">
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-22">
                <div class="div-block-24">
                  <div class="div-block-26 victor"></div>
                </div>
                <div class="div-block-25">
                  <h2 class="heading-4">Victor Grajski</h2>
                  <h2 class="heading-5">Design Technologist</h2>
                  <div class="div-block-27">
                    <a href="https://www.linkedin.com/in/victor-grajski/" target="_blank" class="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" class="image-3" /></a>
                    <a href="https://victor-grajski.github.io" target="_blank" class="link-block-2 w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" class="portfolio-icon" /></a>
                  </div>
                  <div class="div-block-28">
                    <p class="paragraph-5">Before coming to Carnegie Mellon to sharpen my UX skills, I worked in a variety of product development roles (Product Manager/Software Engineer) in companies of various sizes (startups/large companies), and I received a Master’s in Information Science from UC Berkeley. As an automotive enthusiast, I’m excited I got to work with 99P Labs designing the future of social interaction in automobiles!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div class="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div class="div-block-23"></div>
              <div class="div-block-21">
                <div>
                  <h3 class="heading-2">Victor&#x27;s Road Trip Song</h3>
                </div>
                <div class="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/0t6DAi9KEiaWOtgTTXGhD2" width="100%" height="423" frameborder="0" allowtransparency="true" allow="encrypted-media" title="victor-spotify"></iframe></div>
              </div>
            </div>
            <div class="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>
      </div>
    );
  }