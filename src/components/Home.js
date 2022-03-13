import React from "react";
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, } from 'react-bootstrap';
import { Scrollchor, swing, } from 'react-scrollchor';
import videoJpg from "../assets/videos/landing-clip-poster-00001.jpg";
import videoMP4 from "../assets/videos/landing-clip-transcode.mp4";
import videoWebm from "../assets/videos/landing-clip-transcode.webm";
import chevron from "../assets/images/chevron-down.svg";
import logo from '../assets/images/logo-transparent.png';
import logoTagline from '../assets/images/logo-tagline.png';
import logoTagline500 from '../assets/images/logo-tagline-p-500.png';
import whatIsSwervoBackground from '../assets/images/Group-198.png';
import whatIsSwervoBackground500 from '../assets/images/Group-198-p-500.png';
import whatIsSwervoBackground800 from '../assets/images/Group-198-p-800.png';
import whatIsSwervoBackground1080 from '../assets/images/Group-198-p-1080.png';
import swervoDiagramGif from '../assets/images/Untitled_Artwork.gif';
import moeShapes from '../assets/images/moe-shapes.png';
import simonShapes from '../assets/images/simonshapes.png';
import marbleShapes from '../assets/images/marble-shapes.png';
import whySwervoBackground from '../assets/images/Group-199.png';
import whySwervoBackground500 from '../assets/images/Group-199-p-500.png';
import whySwervoBackground800 from '../assets/images/Group-199-p-800.png';
import whySwervoBackground1080 from '../assets/images/Group-199-p-1080.png';
import opportunitySpace from '../assets/images/Opportunity-Space.png';
import opportunitySpace500 from '../assets/images/Opportunity-Space-p-500.png';
import opportunitySpace800 from '../assets/images/Opportunity-Space-p-800.png';
import opportunitySpace1080 from '../assets/images/Opportunity-Space-p-1080.png';
import opportunitySpace1600 from '../assets/images/Opportunity-Space-p-1600.png';

export default function Home() {
    return (
      <div className="body no-progress-bar">
        {/* <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light w-nav">
          <div className="container w-container">
            <div className="div-block-11">
              <a href="/" aria-current="page" className="nav-link light w-nav-link w--current">99P Labs x MHCI</a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link to="/are-we-there-yet" className="nav-link light w-nav-link">Are We There Yet?</Link>
              <a href="/team" className="nav-link light w-nav-link">Team</a>
              <a href="https://medium.com/mhci-99p-labs-capstone" target="_blank" rel="noreferrer" className="nav-link light w-nav-link">Blog</a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="icon light w-icon-nav-menu"></div>
            </div>
          </div>
        </div> */}
        <Container style={{'z-index': '100000001'}}>
            <Navbar bg="transparent" variant="dark" expand="lg" style={{'background-color': 'transparent', 'z-index': '100000001', 'font-family': 'Raleway'}}>
              <Navbar.Brand href="/" style={{'color': 'whitesmoke'}}><img src={logo} alt="logo" height="50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{'border-color': 'transparent'}} />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                  <Nav.Link href="/research" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Research</Nav.Link>
                  <Nav.Link href="/design" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Design</Nav.Link>
                  <Nav.Link href="/team" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Team</Nav.Link>
                  <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank" style={{'color': 'whitesmoke'}}>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>

        <div data-poster-url={videoJpg} data-video-urls={videoMP4} data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom">
          <video muted={true} autoPlay="autoplay" loop={true} style={{'backgroundImage':{videoJpg}}} playsInline={true} data-wf-ignore="true" data-object-fit="cover">
            <source src={videoMP4} data-wf-ignore="true" />
            <source src={videoWebm} data-wf-ignore="true" />
          </video>
          <div class="div-block-12"></div>
        </div>

        <div class="section-5 intro wf-section">
          <div class="div-block-2"><img src={logoTagline} loading="lazy" sizes="(max-width: 991px) 90vw, 38vw" srcset={`${logoTagline500} 500w, ${logoTagline} 2084w`} alt="" class="logo-tagline" />
            <div class="div-block-13">
            <Scrollchor
                to="what-is-swervo" 
                className="w-inline-block"
                animate={{ duration: 1000, easing: swing}}
              >
                <img src={chevron} loading="lazy" alt="" className="image-4" />
              </Scrollchor>
            </div>
          </div>
        </div>

        <div id="what-is-swervo" class="section-5 what-is-swervo wf-section"><img src={whatIsSwervoBackground} loading="lazy" sizes="100vw" srcset={`${whatIsSwervoBackground500} 500w, ${whatIsSwervoBackground800} 800w, ${whatIsSwervoBackground1080} 1080w, ${whatIsSwervoBackground} 1440w`} alt="" class="image-10 what-is-swervo" />
          <div class="div-block-2 what-is-swervo-description">
            <h1 class="heading">What is Swervo?</h1>
            <h1 class="landing-page-body">Swervo is a product-service ecosystem our team of <a href="https://www.hcii.cmu.edu/academics/mhci" target="_blank" class="link" rel="noreferrer">Carnegie Mellon MHCI</a> students developed for our Capstone project client, <a href="https://www.99plabs.com/" target="_blank" class="link" rel="noreferrer">99P Labs</a>, a digital proving ground that helps further develop mobility and energy concepts through customer empathy, data science, and business innovation.<br /><br />Swervo reimagines the car as a game console with the goal of fostering connection for families through unique combinations of play, interaction modalities, and the affordances of the car.</h1><img src={swervoDiagramGif} loading="lazy" alt="" class="landing-page-background-image" />
            <h1 class="landing-page-body">To understand and validate the ideal combinations of play, interaction modalities, and affordances, we built three experiential prototypes - Moe, Simón, and Martin.</h1>
            <div class="div-block-42">
              <div class="landing-prototype-container">
                <h2 class="landing-prototype-title">Moe</h2><img src={moeShapes} loading="lazy" alt="" class="landing-prototype-image" />
                <h1 class="landing-prototype-description">Moe combines a visual and conversational interface with the changing exterior environment to facilitate self-disclosure between parents and kids.</h1>
              </div>
              <div class="landing-prototype-container">
                <h2 class="landing-prototype-title">Simón</h2><img src={simonShapes} loading="lazy" alt="" class="landing-prototype-image" />
                <h1 class="landing-prototype-description">Simón leverages the spatial arrangement of car seats and the physically confined space of a car through a haptic interface and cooperative play.</h1>
              </div>
              <div class="landing-prototype-container">
                <h2 class="landing-prototype-title">Martin</h2><img src={marbleShapes} loading="lazy" alt="" class="landing-prototype-image" />
                <h1 class="landing-prototype-description">Marty combines haptic and kinetic input, the movement of the car, and cooperative play into a maze-solving game where seats become controllers.</h1>
              </div>
            </div>
            <div class="div-block-2 case-study-link">
            <Link to="/design" class="button-2 w-button">Explore our design process</Link>
            </div>
            <div class="div-block-13">
              <Scrollchor
                to="why-swervo" 
                className="w-inline-block"
                animate={{ duration: 1000, easing: swing}}
              >
                <img src={chevron} loading="lazy" alt="" className="image-4" />
              </Scrollchor>
            </div>
          </div>
        </div>

        <div id="why-swervo" class="section-5 wf-section"><img src={whySwervoBackground} loading="lazy" sizes="100vw" srcset={`${whySwervoBackground500} 500w, ${whySwervoBackground800} 800w, ${whySwervoBackground1080} 1080w, ${whySwervoBackground} 1440w`} alt="" class="image-10 why-swervo" />
          <div class="div-block-2">
            <h1 class="heading">Why Swervo?</h1>
            <h1 class="landing-page-body final">Families feel time in the car is lost, but they also experience the car as a space conducive to connection. As cars become more autonomous, families don&#x27;t want another venue to be pulled into their devices and away from each other.</h1><img src={opportunitySpace} loading="lazy" sizes="(max-width: 991px) 90vw, 75vw" srcset={`${opportunitySpace500} 500w, ${opportunitySpace800} 800w, ${opportunitySpace1080} 1080w, ${opportunitySpace1600} 1600w, ${opportunitySpace} 1808w`} alt="" class="landing-page-background-image" />
            <div class="div-block-2 case-study-link">
              <Link to="/research" class="button-2 w-button">Explore our research</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }