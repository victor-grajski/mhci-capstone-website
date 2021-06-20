import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import videoJpg from "../assets/videos/Honda_Background-poster-00001.jpg";
import videoMP4 from "../assets/videos/Honda_Background-transcode.mp4";
import videoWebm from "../assets/videos/Honda_Background-transcode.webm";
import chevron from "../assets/images/chevron-down.svg";


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
              <Navbar.Brand href="/" style={{'color': 'whitesmoke'}}>99P Labs x MHCI</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{'border-color': 'transparent'}} />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                  <Nav.Link href="/are-we-there-yet" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Are We There Yet?</Nav.Link>
                  <Nav.Link href="/team" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Team</Nav.Link>
                  <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank" style={{'color': 'whitesmoke'}}>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        <div data-poster-url={videoJpg} data-video-urls={videoMP4} data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
          <video autoPlay="autoplay" loop={true} style={{'backgroundImage':{videoJpg}}} muted="" playsInline="" data-wf-ignore="true" data-object-fit="cover">
            <source src={videoMP4} data-wf-ignore="true" />
            <source src={videoWebm} data-wf-ignore="true" />
          </video>
          <div className="div-block-12"></div>
        </div>
        <div className="section-5">
          <div className="div-block-2">
            <h1 className="heading">Our relationship with cars has soured</h1>
            <div className="div-block-13">
              <a href="#Sunday-drive" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="Sunday-drive" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">How did the Sunday drive...</h1>
            <div className="div-block-13">
              <a href="#Sunday-jam" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="Sunday-jam" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">become the Sunday traffic jam?</h1>
            <div className="div-block-13">
              <a href="#drive-in" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="drive-in" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">When did the drive-in...</h1>
            <div className="div-block-13">
              <a href="#drive-thru" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="drive-thru" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">become the drive-thru?</h1>
            <div className="div-block-13">
              <a href="#family-time" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="family-time" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">When did family time...</h1>
            <div className="div-block-13">
              <a href="#screen-time" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="screen-time" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">become screen time?</h1>
            <div className="div-block-13">
              <a href="#this-way" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="this-way" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">It doesn&#x27;t have to be this way</h1>
            <div className="div-block-13">
              <a href="#reimagine" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="reimagine" className="section-5">
          <div className="div-block-2">
            <h1 className="heading">Let&#x27;s reimagine social interaction in cars</h1>
            <div className="div-block-13">
              <a href="#drive" className="w-inline-block"><img src={chevron} loading="lazy" alt="" className="image-4" /></a>
            </div>
          </div>
        </div>
        <div id="drive" className="section-5">
          <div className="div-block-2">
            <a href="/are-we-there-yet" className="button-2 w-button">Take a drive with us</a>
          </div>
        </div>
      </div>
    );
  }