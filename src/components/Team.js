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
    document.title = `Team | Swervo`;
    window.scrollTo(0, 0);
  });

    return (
      <div className="body-2">
        <Container className="w-container">
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
        

        <div className="section-2 wf-section">
          <div className="columns-3 w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
            <div className="column-9 w-col w-col-10 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
              <h1 className="heading-3">Meet the Team</h1>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
          </div>
          <div className="columns-2 w-row">
            <div className="w-col w-col-1 w-col-stack"></div>
            <div className="column-7 w-col w-col-6 w-col-stack">
              <div className="div-block-40">
                <div className="div-block-19">
                  <div className="div-block-18"><img src={teamPhoto} loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 47vw, 50vw" srcSet={`${teamPhoto500} 500w, ${teamPhoto800} 800w, ${teamPhoto1080} 1080w, ${teamPhoto1600} 1600w, ${teamPhoto} 1800w`} alt="" className="image-12" /></div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack"></div>
            <div className="column-8 w-col w-col-3 w-col-stack">
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Our Road Trip Playlist</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/playlist/49m5J6XQbayAjiodsrVtTu" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="team-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack"></div>
          </div>
          <div className="narrow-full-width section-intro team w-row">
            <div className="w-col w-col-1 w-col-stack"></div>
            <div className="column-45 w-col w-col-10 w-col-stack">
              <p className="section-intro-text team">
                Hello! We&#x27;re a team of <a href="https://www.hcii.cmu.edu/academics/mhci" target="_blank" className="article-link" rel="noreferrer">MHCI</a> students at Carnegie Mellon University. The Master of Human-Computer Interaction (MHCI) program at Carnegie Mellon University is the first program in the world dedicated to preparing professionals for careers related to human-computer interaction, user experience design and user-centered research.
                 The program integrates service and design thinking into a rigorous HCI curriculum that prepares our students to design and guide the future of human and technology interactions.
                 <br /><br />
                 For our 7-month <a href="https://www.hcii.cmu.edu/academics/mhci/capstone-project" target="_blank" className="article-link" rel="noreferrer">Capstone</a> project, 
                 we were thrilled to have worked with a dream client in <a href="https://www.99plabs.com/" target="_blank" className="article-link" rel="noreferrer">99P Labs</a>
                 , a digital proving ground that helps further develop mobility and energy concepts through customer empathy, data science, and business innovation.
              </p>
            </div>
            <div className="w-col w-col-1 w-col-stack"></div>
          </div>
          <Scrollchor
            to="cam" 
            className="link-block-3 w-inline-block"
            animate={{ duration: 2000, easing: swing}}
          >
            <img src={chevron} loading="lazy" alt="" className="image-5" />
          </Scrollchor>
        </div>

        <div id="cam" className="section-3 wf-section">
          <div className="columns-4 w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-22">
                <div className="div-block-24">
                  <div className="div-block-26"></div>
                </div>
                <div className="div-block-25">
                  <h2 className="heading-4">Cam Davison</h2>
                  <h2 className="heading-5 hidden">Product Manager</h2>
                  <div className="div-block-27">
                    <a href="https://www.linkedin.com/in/cam-davison-8379573a/" target="_blank" className="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" className="image-3" /></a>
                    <a href="/#/" target="_blank" className="link-block-2 hidden w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" className="portfolio-icon"/></a>
                  </div>
                  <div className="div-block-28">
                    <p className="paragraph-5">I have 10 years of industry experience spanning advertising strategy, branding, product management and design. Most recently, I lived in Singapore for three years working on UX and product design with startups. I???m honored to have found new and meaningful ways to add value to families&#x27; lives via mobility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Cam&#x27;s Road Trip Anthem</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/6mw4IlMjJq52O8Qa48LuAW" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="cam-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div className="section-3 wf-section">
          <div className="columns-4 reverse w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-22">
                <div className="div-block-24">
                  <div className="div-block-26 jenny"></div>
                </div>
                <div className="div-block-25">
                  <h2 className="heading-4">Jenny Ong</h2>
                  <h2 className="heading-5 hidden">Lead UX??Researcher</h2>
                  <div className="div-block-27">
                    <a href="https://www.linkedin.com/in/jong220/" target="_blank" className="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" className="image-3" /></a>
                    <a href="https://jennyongnotes.com/" target="_blank" className="link-block-2 hidden w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" className="portfolio-icon" /></a>
                  </div>
                  <div className="div-block-28">
                    <p className="paragraph-5">Formerly an aspiring corporate lawyer who studied business at Georgetown, I pivoted into the digital innovation space to be a part of an innovation incubator within one of the largest global corporate finance firms. At Carnegie Mellon, I&#x27;m so excited to have played a role in designing the future of the mobile social experience with 99P Labs!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Jenny&#x27;s Road Trip Song</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/2PSeBKFabj27ud497FxQQy" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="jenny-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div className="section-3 wf-section">
          <div className="columns-4 w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-22">
                <div className="div-block-24">
                  <div className="div-block-26 lauren"></div>
                </div>
                <div className="div-block-25">
                  <h2 className="heading-4">Lauren Hung</h2>
                  <h2 className="heading-5 hidden">Lead Product Designer</h2>
                  <div className="div-block-27">
                    <a href="https://www.linkedin.com/in/lauren-hung-83a96aa4/" target="_blank" className="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" className="image-3" /></a>
                    <a href="http://laurenhung.com/" target="_blank" className="link-block-2 hidden w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" className="portfolio-icon" /></a>
                  </div>
                  <div className="div-block-28">
                    <p className="paragraph-5">I am a research-driven product designer with a degree in Industrial Design from the Rhode Island School of Design. Before coming to MHCI, I worked as a UX designer in an IOT toy startup and UCLA???s HCI research lab. I???m driven by my curiosity about people???s needs and emerging technologies, and I am excited I??got to build prototypes that explore the future of social interaction in automobiles!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Lauren&#x27;s Road Trip Song</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/0lkQOB949M2gLyut86aJ1b" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="lauren-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>

        <div className="section-3 wf-section">
          <div className="columns-4 reverse w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-22">
                <div className="div-block-24">
                  <div className="div-block-26 sarah"></div>
                </div>
                <div className="div-block-25">
                  <h2 className="heading-4">Sarah Hand</h2>
                  <h2 className="heading-5 hidden">Lead UX??Researcher</h2>
                  <div className="div-block-27">
                    <a href="https://www.linkedin.com/in/sarahjessamynhand/" target="_blank" className="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" className="image-3" /></a>
                    <a href="https://sarahj930.github.io/sjh_portfolio/#/" target="_blank" className="link-block-2 hidden w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" className="portfolio-icon" /></a>
                  </div>
                  <div className="div-block-28">
                    <p className="paragraph-5">As a recent graduate in Psychology and Computer Science from UNC, I am interested in how human-centered design can support human???s well-being and bring about positive societal change. I came to MHCI to build my UX research and design skills before beginning my career in industry. I&#x27;m excited to have explored technology-assisted social interaction from a novel perspective!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Sarah&#x27;s Road Trip Song</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/39q7xibBdRboeMKUbZEB6g" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="sarah-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>
        <div className="section-3 wf-section">
          <div className="columns-4 w-row">
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-10 w-col w-col-6 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-22">
                <div className="div-block-24">
                  <div className="div-block-26 victor"></div>
                </div>
                <div className="div-block-25">
                  <h2 className="heading-4">Victor Grajski</h2>
                  <h2 className="heading-5">Design Technologist</h2>
                  <div className="div-block-27">
                    <a href="https://www.linkedin.com/in/victor-grajski/" target="_blank" className="link-block w-inline-block" rel="noreferrer"><img src={linkedIn} loading="lazy" width="24" height="24" alt="" className="image-3" /></a>
                    <a href="https://victor-grajski.github.io" target="_blank" className="link-block-2 w-inline-block" rel="noreferrer"><img src={homeIcon} loading="lazy" alt="" className="portfolio-icon" /></a>
                  </div>
                  <div className="div-block-28">
                    <p className="paragraph-5">Before coming to Carnegie Mellon to sharpen my UX skills, I worked in a variety of product development roles (Product Manager/Software Engineer) in companies of various sizes (startups/large companies), and I received a Master???s in Information Science from UC Berkeley. As an automotive enthusiast, I???m excited I??got to work with 99P Labs designing the future of social interaction in automobiles!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
            <div className="column-11 w-col w-col-3 w-col-stack w-col-small-small-stack">
              <div className="div-block-23"></div>
              <div className="div-block-21">
                <div>
                  <h3 className="heading-2">Victor&#x27;s Road Trip Song</h3>
                </div>
                <div className="w-embed w-iframe"><iframe src="https://open.spotify.com/embed/track/0t6DAi9KEiaWOtgTTXGhD2" width="100%" height="423" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="victor-spotify"></iframe></div>
              </div>
            </div>
            <div className="w-col w-col-1 w-col-stack w-col-small-small-stack"></div>
          </div>
        </div>
      </div>
    );
  }