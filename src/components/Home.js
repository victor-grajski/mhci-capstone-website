import React from "react";
import {Helmet} from "react-helmet";
import "../assets/styles/normalize.css";
import "../assets/styles/webflow.css";
import "../assets/styles/99p-labs-mhci-2021.webflow.css";
import videoJpg from "../assets/videos/Honda_Background-poster-00001.jpg";
import videoMP4 from "../assets/videos/Honda_Background-transcode.mp4";
import videoWebm from "../assets/videos/Honda_Background-transcode.webm";
import chevron from "../assets/images/chevron-down.svg";


export default function Home() {
    return (
      <div className="body no-progress-bar">
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light w-nav">
          <div className="container w-container">
            <div className="div-block-11">
              <a href="/" aria-current="page" className="nav-link light w-nav-link w--current">99P Labs x MHCI</a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/are-we-there-yet" className="nav-link light w-nav-link">Are We There Yet?</a>
              <a href="/team" className="nav-link light w-nav-link">Team</a>
              <a href="https://medium.com/mhci-99p-labs-capstone" target="_blank" rel="noreferrer" className="nav-link light w-nav-link">Blog</a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="icon light w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
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
        <Helmet>
          <meta charset="utf-8" />
          <title>99P Labs x MHCI 2021</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Webflow" name="generator" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
          <script type="text/javascript">{`WebFont.load({  google: {    families: ["Raleway:200,300,regular,500,600,700,800,900"]  }});`}</script>
          <script type="text/javascript">{`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}</script>
          <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="images/webclip.png" rel="apple-touch-icon" />
          <script url="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6077113bee93d72fca2a71cb" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" />
        </Helmet>
      </div>
    );
  }