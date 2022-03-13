import React, { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Scrollchor, swing, } from 'react-scrollchor';

import chevron from "../assets/images/chevron-down.svg";
import logo from '../assets/images/logo-transparent.png';
import play1 from '../assets/images/Ellipse-54.png';
import play2 from '../assets/images/play.gif';
import play3 from '../assets/images/Group-268.png';
import play3_500 from '../assets/images/Group-268-p-500.png';
import play4 from '../assets/images/Group-267.png';
import play4_500 from '../assets/images/Group-267-p-500.png';
import checklist from '../assets/images/checklist.gif';
import fieldInterview from '../assets/images/draft1_5.png';
import fieldInterview_500 from '../assets/images/draft1_5-p-500.png';
import fieldInterview_800 from '../assets/images/draft1_5-p-800.png';
import affordances1 from '../assets/images/Rectangle-177.png';
import affordances1_500 from '../assets/images/Rectangle-177-p-500.png';
import modalities1 from '../assets/images/Polygon-13.png';
import modalities1_500 from '../assets/images/Polygon-13-p-500.png';
import framework from '../assets/images/Group-220.png';
import framework_500 from '../assets/images/Group-220-p-500.png';
import framework_800 from '../assets/images/Group-220-p-800.png';
import totals from '../assets/images/totals.png';
import totals_500 from '../assets/images/totals-p-500.png';
import totals_800 from '../assets/images/totals-p-800.png';
import totals_1080 from '../assets/images/totals-p-1080.png';
import moeShapes from '../assets/images/moe-shapes.png';
import moe from '../assets/images/draft1.png';
import moe_500 from '../assets/images/draft1-p-500.png';
import moe_800 from '../assets/images/draft1-p-800.png';
import moe_1080 from '../assets/images/draft1-p-1080.png';
import moe_1600 from '../assets/images/draft1-p-1600.png';
import moe1 from '../assets/images/draft1_1.png';
import moe1_500 from '../assets/images/draft1_1-p-500.png';
import moe1_800 from '../assets/images/draft1_1-p-800.png';
import moe1_1080 from '../assets/images/draft1_1-p-1080.png';
import moe1_1600 from '../assets/images/draft1_1-p-1600.png';
import simonShapes from '../assets/images/simonshapes.png';
import simon from '../assets/images/draft1_2.png';
import simon_500 from '../assets/images/draft1_2-p-500.png';
import simon_800 from '../assets/images/draft1_2-p-800.png';
import simon_1080 from '../assets/images/draft1_2-p-1080.png';
import simon_1600 from '../assets/images/draft1_2-p-1600.png';
import simon1 from '../assets/images/draft1_3.png';
import simon1_500 from '../assets/images/draft1_3-p-500.png';
import simon1_800 from '../assets/images/draft1_3-p-800.png';
import simon1_1080 from '../assets/images/draft1_3-p-1080.png';
import simon1_1600 from '../assets/images/draft1_3-p-1600.png';
import simon2 from '../assets/images/draft1_4.png';
import simon2_500 from '../assets/images/draft1_4-p-500.png';
import simon2_800 from '../assets/images/draft1_4-p-800.png';
import simon2_1080 from '../assets/images/draft1_4-p-1080.png';
import simon2_1600 from '../assets/images/draft1_4-p-1600.png';
import marbleShapes from '../assets/images/marble-shapes.png';
import marble from '../assets/images/Frame-2.png';
import marble_500 from '../assets/images/Frame-2-p-500.png';
import marble_800 from '../assets/images/Frame-2-p-800.png';
import marble_1080 from '../assets/images/Frame-2-p-1080.png';
import marble_1600 from '../assets/images/Frame-2-p-1600.png';
import marbleModel from '../assets/images/marblemodel.png';
import marbleModel_500 from '../assets/images/marblemodel-p-500.png';
import marbleModel_800 from '../assets/images/marblemodel-p-800.png';
import marbleModel_1080 from '../assets/images/marblemodel-p-1080.png';
import marbleModel_1600 from '../assets/images/marblemodel-p-1600.png';
import marbleModel_2000 from '../assets/images/marblemodel-p-2000.png';
import marbleModel_2600 from '../assets/images/marblemodel-p-2600.png';
import marble1 from '../assets/images/Frame-3.png';
import marble1_500 from '../assets/images/Frame-3-p-500.png';
import marble1_800 from '../assets/images/Frame-3-p-800.png';
import marble1_1080 from '../assets/images/Frame-3-p-1080.png';
import marble1_1600 from '../assets/images/Frame-3-p-1600.png';
import marble2 from '../assets/images/Frame-1.png';
import marble2_500 from '../assets/images/Frame-1-p-500.png';
import marble2_800 from '../assets/images/Frame-1-p-800.png';
import marble2_1080 from '../assets/images/Frame-1-p-1080.png';
import value from '../assets/images/Group-210.png';
import value_500 from '../assets/images/Group-210-p-500.png';
import value_800 from '../assets/images/Group-210-p-800.png';
import value1 from '../assets/images/Untitled_Artwork.gif';
import value2 from '../assets/images/5iluyz.gif';
import value3 from '../assets/images/Group-273.png';
import value4 from '../assets/images/Group-274.png';
import value5 from '../assets/images/Group-275.png';
import value6 from '../assets/images/Group-271.png';

export default function Design() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Design | Swervo`;
  });

    return (
      <div className="body">
        <div className="columns-6 w-row">
          <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5"></div>
          <div className="column-13 w-col w-col-2 w-col-small-2 w-col-tiny-2"></div>
          <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5"></div>
        </div>
        <div id="overview" className="above-the-fold wf-section">
            <div className="div-block-33">
                <div className="div-block-30 hero design"></div>
            </div>
            <Container style={{ zIndex: 10000001 }}>
                <Navbar bg="transparent" variant="dark" expand="lg" style={{ backgroundColor: 'transparent'}}>
                <Navbar.Brand href="/" style={{ color: 'whitesmoke', fontFamily: 'Raleway' }}><img src={logo} alt="logo" height="50px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'transparent' }} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto" defaultActiveKey="/design">
                    <Nav.Link href="/research" style={{ paddingRight: '50px', color: 'whitesmoke' }}>Research</Nav.Link>
                    <NavDropdown active={true} title="Design" id="basic-nav-dropdown" style={{ paddingRight: '50px' }}>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="overview"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Overview
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="design-methods"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Design Process
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="prototypes"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Prototypes
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="value-to-client"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Value to Client
                            </Scrollchor>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/team" style={{ paddingRight: '50px', color: 'whitesmoke' }}>Team</Nav.Link>
                    <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank" style={{ color: 'whitesmoke' }}>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>

            <div className="columns-5 w-row">
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-12 w-col w-col-8 w-col-stack">
                    <div className="div-block-32">
                    <h1 className="heading-6">Our Design Process</h1>
                    </div>
                    <div>
                    <p className="paragraph-7">To kick off our design phase, we had to <strong>determine what fostering connection for families in the car meant for our project and how we would measure and design for it</strong>. We defined connection as “shared presence” between people in the car. Shared presence means that people are actively enjoying time with each other, not engaged in separate, isolated activities. This could be talking, laughing, joking, or simply enjoying a song, the view, or silence together.<br /><br />Our explorations lead to a framework for experiential prototyping that combines play, interaction modalities, and the affordances of the car to create shared presence, and from that framework, we built our three experiential prototypes – Moe, Simón, and Martin.<br /></p>
                    </div>
                    <div className="div-block-13 awty">
                        <Scrollchor
                            to="design-methods" 
                            className="w-inline-block"
                            animate={{ duration: 2000, easing: swing}}
                        >
                            <img src={chevron} loading="lazy" alt="" className="image-4" />
                        </Scrollchor>
                    </div>
                </div>
                <div className="column-34 w-col w-col-2 w-col-stack"></div>
            </div>
        </div>

        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light awty toc under w-nav">
            <nav role="navigation" className="nav-menu toc w-nav-menu">
                <Scrollchor 
                    to="overview" 
                    className="nav-link mobile-section toc w-nav-link"
                    animate={{ duration: 2000, easing: swing}}
                >
                    Overview
                </Scrollchor>
                <Scrollchor
                    to="design-methods" 
                    className="nav-link mobile-section toc w-nav-link"
                    animate={{ duration: 2000, easing: swing}}
                >
                    Design Process
                </Scrollchor>
                <Scrollchor
                    to="prototypes" 
                    className="nav-link mobile-section toc w-nav-link"
                    animate={{ duration: 2000, easing: swing}}
                >
                    Prototypes
                </Scrollchor>
                <Scrollchor
                    to="value-to-client"
                    className="nav-link mobile-section toc w-nav-link"
                    animate={{ duration: 2000, easing: swing}}
                >
                    Value to Client
                </Scrollchor>
            </nav>
        </div>

        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar light awty btf w-nav">
            <Container fluid className="fixed-top container w-container" style={{ zIndex: '100', color: 'whitesmoke', marginTop: 0, padding: 0 }}>
                <Navbar bg="light" variant="light" expand="lg" style={{ padding: '20px 10px 10px 10px' }}>
                <Navbar.Brand href="/" style={{ fontFamily: 'Raleway'}}><img src={logo} alt="logo" height="50px" /></Navbar.Brand>
                <Nav.Link href="/research" style={{ paddingRight: '50px' }}>Research</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'transparent' }} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto" defaultActiveKey="/design">
                    <NavDropdown active={true} title="Design" id="basic-nav-dropdown" style={{ paddingRight: '50px' }}>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="overview"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Overview
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="design-methods"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Design Process
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="prototypes"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Prototypes
                            </Scrollchor>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Scrollchor
                                to="value-to-client"
                                animate={{ duration: 2000, easing: swing}}
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                Value to Client
                            </Scrollchor>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/team" style={{ paddingRight: '50px' }}>Team</Nav.Link>
                    <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>

        <div id="design-methods" className="article-content design-methods wf-section">
            <div className="case">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block start">
                    <h2 className="heading-9">The Power of Play</h2>
                </div>
                </div>
                <div className="column-33 w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="one-two w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">When considering families as our users, we realized that<strong> </strong>an effective way of fostering shared presence between family members was through <strong>play. </strong></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-44 w-col w-col-4 w-col-stack"><img src={play1} loading="lazy" alt="" className="article-image polygon" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={play2} loading="lazy" alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Not only is play an essential part of children’s development (<a href="https://repository.upenn.edu/gse_pubs/438/" target="_blank" rel="noreferrer" className="article-link">Fantuzzo et al., 2004</a>), it is also a medium through which children form social connections (Fantuzzo et al. 2004, Panksepp 2007). Play has a central role in children’s relationship development because engaging in play is joyful, and the experience of sharing positive feelings in play leads to strengthening friendships” (<a href="https://eric.ed.gov/?id=ED522537" target="_blank" rel="noreferrer" className="article-link">Lester and Russell, 2010</a>).</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={play3} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${play3_500} 500w, ${play3} 771w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">According to psychologists, when children feel that their experience and emotions are shared with others, there is a cycle of increasing communication and shared emotion - often expressed through laughter. This leads to an increased sense of attachment to the other players, or connection (Turner 2007).<br />‍<br />Play is joyful, vivacious, and fosters true shared presence between family members. Thus, play is the ideal mechanism through which to design for family connection in the car.</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={play4} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${play4_500} 500w, ${play4} 771w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Because we knew that play was the way to tap into connection, we were able to measure the success of our prototypes based on the play that they fostered among participants. We developed a system of observational checklists and interview questions through which to measure connection through play, keeping an eye out for shared laughter, collaboration, communication, active engagement, and excitement.</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={checklist} loading="lazy" alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">We also asked targeted questions in interviews after each test where we probed how our participants felt about their relationship to one another as a result of the game, how much they enjoyed it, and how it compared to their usual drives together. It was through iterations of these questions that we determined whether our prototypes were successful - that is, they were only successful if they fostered play, and therefore, connection.</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={fieldInterview} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${fieldInterview_500} 500w, ${fieldInterview_800} 800w, ${fieldInterview} 1033w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Given that we used play as the way to tap into shared presence (and therefore connection), play was a vital component of our design framework. As such, we devised a list of different types of “play dynamics” that we could explore:<br /><br /><strong>Communicative</strong> <br />Play designed to encourage revealing information about oneself in order to get closer to other players<br /><br /><strong>Cooperative</strong> <br />Play where players working together to achieve a common goal<br /><br /><strong>Competitive</strong> <br />Play requires players to work against one another<br /><br /><strong>Co-creative</strong> <br />Play designed to bring players together through collaborative creation<br /><br /><strong>Educational</strong> <br />Play fosters connection through an engaging and informative medium</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="shift-in-perception-of-car">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block shift affordances">
                    <h2 className="heading-9">The Car&#x27;s Affordances</h2>
                </div>
                </div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Next, we flipped the perceived limitations of being in a car into design opportunities. For example, instead of viewing the confined space as constricting, we reframed it as a space for meaningful conversations. </p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-46 w-col w-col-4 w-col-stack"><img src={affordances1} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${affordances1_500} 500w, ${affordances1} 585w`} alt="" className="article-image polygon" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text"><strong>Confined Space</strong><br />Small fixed interior car space where walls and ceilings are reachable<br /><br /><strong>Spatial Arrangement</strong><br />Short rows of forward-facing seats, each rider often has a “designated” seat<br /><br /><strong>Movement (People)</strong><br />Constrained movement in a seated position<br /><br /><strong>Movement (Car)</strong><br />Riders subject to the physics of car movement<br /><br /><strong>Exterior Environment</strong><br />Constantly-changing exterior environment provides unique contextual stimuli</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="attention-economy">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block interaction-modalities">
                    <h2 className="heading-9">Interaction Modalities</h2>
                </div>
                </div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Finally, we organized ways that users can interact with a digital and physical system into five categories of modality borrowing from Cheryl Platz’s <em>Design Beyond Devices</em>.</p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={modalities1} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${modalities1_500} 500w, ${modalities1} 688w`} alt="" className="article-image polygon" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text"><strong>Visual</strong> <br />Stimuli that is interpreted over optical channels<br /><br />‍<strong>Auditory</strong> <br />The use of music, sound effect or language to communicate meaning<br /><br />‍<strong>Haptic <br /></strong>The use of pressure, vibration, taps or clicks to communicate meaning<br /><br />‍<strong>Kinetic</strong>  <br />Communication based on movement or orientation in space<br /><br />‍<strong>Ambient</strong> <br />Inferred meaning driven by environmental or biometric conditions such as temperature, heart rate, lighting, etc.</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="covid">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block black-drop-shadow">
                    <h2 className="heading-9">Experiential Prototyping Framework</h2>
                </div>
                </div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Putting it all together, we mixed and matched elements from each category of the framework and rapidly prototyped ideas to answer the question: does this combination of interaction, and dynamic foster connection between family members in the car? </p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-46 w-col w-col-4 w-col-stack"><img src={framework} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${framework_500} 500w, ${framework_800} 800w, ${framework} 1056w`} alt="" className="article-image polygon multi" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">We started by picking an existing game convention – marble mazes, for example – to see how we might adapt them for a family drive scenario. Picking an existing game convention allowed us to focus on the interactions, affordances of the car, and play dynamic rather than focus on the game design.<br /><br />Once we decided on a game convention, we enacted a scenario as quickly and cheaply as possible. In this case, two of us sat next to each other holding a frisbee with a marble in it while another team member moved the chairs in order to simulate a cooperative marble game using the movement of the car.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <div style={{ paddingTop: "56.17021276595745%" }} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/izjyPxAvhfg?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style={{ position: "absolute", "left": 0, "top": 0, "width": "100%", "height": "100%", pointerEvents: "auto" }} allow="fullscreen; autoplay; encrypted-media" allowFullScreen={true} title="Enactment"></iframe></div>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Once we validated a basic concept, we increased the fidelity just enough to bring the idea to life in analog or Wizard of Oz form suited for a buck context. Using the marble maze example, we built and internally tested a cooperative, seat-controlled apparatus using foamcore, pool noodles, and Legos in the course of an afternoon. After further small iterations, we decided whether or not said idea was fit for testing with external participants in our portable buck.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <div style={{ paddingTop: "56.17021276595745%" }} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/ATodnH6PyDc?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style={{ position: "absolute", "left": 0, "top": 0, "width": "100%", "height": "100%", pointerEvents: "auto" }} allow="fullscreen; autoplay; encrypted-media" allowFullScreen={true} title="Rapid Testing"></iframe></div>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">To validate our static, early stage prototypes, we created our very own portable buck to meet families where they were, places like parks and playgrounds. The buck gave us enough simulated driving context to get actionable feedback from participants before dedicating resources toward building a particular prototype to high-fidelity and suited for a moving car.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <div style={{ paddingTop: "56.17021276595745%" }} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/3d4wxRFe5h8?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameBorder="0" style={{ position: "absolute", "left": 0, "top": 0, "width": "100%", "height": "100%", pointerEvents: "auto" }} allow="fullscreen; autoplay; encrypted-media" allowFullScreen={true} title="Buck Time Lapse"></iframe></div>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">In total, we built 7 experiential prototypes and tested them with 52 participants across 14 distinct families.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={totals} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${totals_500} 500w, ${totals_800} 800w, ${totals_1080} 1080w, ${totals} 1793w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
        </div>
        <div id="prototypes" className="article-content prototypes wf-section">
            <div className="div-block-30 domain-research prototypes">
            <div className="div-block-34">
                <h3 className="heading-7 light">Prototypes</h3>
                <h1 className="heading-8 light centered">What We Built</h1>
            </div>
            </div>
            <div className="narrow-full-width section-intro w-row">
            <div className="w-col w-col-3 w-col-stack"></div>
            <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="section-intro-text">Our design process culminated in 3 experience prototypes, each consisting of a unique combination of play dynamic, interaction modality and constraints of the car. These 3 experiences proved to be successful in fostering connection in our final round of playtesting where 7 families drove and played with our prototypes.</p>
            </div>
            <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="case">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block moe">
                    <h2 className="heading-9">Moe</h2>
                </div>
                </div>
                <div className="column-33 w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="one-two w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Moe facilitates conversations that promote self-disclosure between parents and kids by leveraging the psychological impact of the confined space of the car with the changing exterior environment through a visual and conversational interface.</p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-44 w-col w-col-4 w-col-stack"><img src={moeShapes} loading="lazy" alt="" className="article-image polygon multi" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Moe builds upon the traditional “I Spy” game that many families are familiar with, and it pushes it further by using contextual data of the exterior environment to generate prompts designed for parents and kids to learn more about each other. Here, a bridge can trigger conversations about where you most want to go. In the follow up interviews, both parents and kids told us that having Moe in the car is more fun than their typical drives, and parents from all 7 families said that they learned something new about their kids. With one family in particular, the father told us in the follow up interview that he is now considering hiring a coach for his son based on what he learned about him during the game!</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={moe} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${moe_500} 500w, ${moe_800} 800w, ${moe_1080} 1080w, ${moe_1600} 1600w, ${moe} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Furthermore, parents said that they loved how their kids are talking to each other and working together more than they would otherwise. One parent said, “my kids aren’t arguing or sitting on their individual devices.”</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={moe1} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${moe1_500} 500w, ${moe1_800} 800w, ${moe1_1080} 1080w, ${moe1_1600} 1600w, ${moe1} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">We simulated a “contextually aware” system by showing families recorded video of a drive with pre-written prompts. Even with the technical limitations of our prototype, kids were quick to tell us about how the questions were related to video of the journey. Parents of all 7 families said they would use this game in their car if it’s currently available. They even said that they would like the questions to be more personal and relevant to their individual interests. For example, Moe could ask questions about where they have been, and it could even cater questions to each individual’s personality.</p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">The key takeaway of this prototype is that <strong>contextual triggers are effective at getting parents and kids to share and learn about each other</strong>. Going forward, we would want to simulate more contextual data inputs for questions like user preferences and personal data. We would also expand Moe to other sensors – for example, seats that vibrate like a game buzzer – to make the experience even more immersive.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="attention-economy">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block simon">
                    <h2 className="heading-9">Simón</h2>
                </div>
                </div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Simón aims to foster connection among players by leveraging the specific spatial arrangement of car seats and the physically confined space of a car through a haptic interface and cooperative play.</p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={simonShapes} loading="lazy" alt="" className="article-image polygon multi" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Simón’s experience is based around colored buttons that are placed around the car in different locations depending on how many people are in the car and where they are sitting. This experience was designed to test haptic interaction with different parts of the car.<br /><br />To implement this, we were inspired by the classic game Simon, where you have to mimic the color pattern the system gives you. In our version of the game, players had to work together to hit the buttons around the car in the right order - what we called <strong>interdependent cooperative play</strong>.<br /><br />When testing Simón with real families, it quickly became clear that placing buttons in different locations in the cabin using a cooperative game dynamic fostered collaboration and connection. We even had one parent say she would use this on drives to make her kids stop fighting on the spot!<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={simon} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${simon_500} 500w, ${simon_800} 800w, ${simon_1080} 1080w, ${simon_1600} 1600w, ${simon} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Another parent shared that this game  allowed her to feel like a team member rather than a parent given the combination of the location of the buttons and the collaborative game dynamic.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={simon1} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${simon1_500} 500w, ${simon1_800} 800w, ${simon1_1080} 1080w, ${simon1_1600} 1600w, ${simon1} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">While we didn’t give the driver a button to avoid distracting them, parents shared how this didn’t keep them from engaging. Being able to hear what was going on successfully brought them into the game without distracting them from getting their kids where they were going safely.<br /><br />Unsurprisingly, kids loved pressing buttons. Moreover, they found ways to work together, and they tried out different strategies for collaboration and cooperation that added to the family’s enjoyment of the game. In this video, the game is over, but they actually start strategizing, something that the mother mentioned really enjoying in the post-interview.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={simon2} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${simon2_500} 500w, ${simon2_800} 800w, ${simon2_1080} 1080w, ${simon2_1600} 1600w, ${simon2} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">It’s clear that the key elements of Simón that made it effective at fostering connection in the car were cooperative play and haptic interaction with different portions of the car. This combination was effective because it required communication and collaboration toward a shared goal while utilizing the affordances of the car in a unique and fun way. In fact, all users said that their drive with Simón was more enjoyable and made them feel closer to each other than their average drive. <br />‍<br />Were we to continue iterating on Simón, we would simulate adaptive fabrics to more naturally embed haptic interaction in the car. Adaptive fabrics that can change color, respond to haptic input, and provide auditory feedback would allow for highly dynamic gameplay. These interactions would open up a world of possibilities using collaborative game dynamics. <br />‍<br />Additionally, utilizing the data from seats to determine the locations of the interactive spaces within the car would be essential for promoting effective gameplay. Further, data on the ages and abilities of different players would add a customizable element to the experience.<br /><br />Finally, our debriefs revealed opportunities to bring education into future iterations of Simón. While each of our buttons made a siren-like noise, parents envisioned the buttons could make animal sounds or notes on a scale in order to teach kids about animals, music, and other topics.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="shift-in-perception-of-car">
            <div className="columns-7 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block shift marble">
                    <h2 className="heading-9">Martin</h2>
                </div>
                </div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">Martin combines haptic and kinetic input, the movement of the car, and cooperative play to create shared presence for families.</p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-46 w-col w-col-4 w-col-stack"><img src={marbleShapes} loading="lazy" alt="" className="article-image polygon multi" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">What sets Martin apart most is that the seat itself becomes the controller and players have to physically move to use it. Reframing this affordance of the car points the way to numerous use cases for existing sensors and opportunities to introduce new sensors.<br />‍<br />To test the basic viability of this combination of interaction, movement, and cooperation, the first version of Martin used foamcore, pool noodles, and Legos. Our participants used the static car simulator seats as controllers to collaboratively navigate a maze using a marble, hence the codename. Even with this simple, analog prototype, players laughed together often, and they were highly motivated to complete the maze.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={marble} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${marble_500} 500w, ${marble_800} 800w, ${marble_1080} 1080w, ${marble_1600} 1600w, ${marble} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">This initial success didn’t come without its challenges, however. Even in a static car simulator, players often came away feeling dizzy after staring down at the game board for so long. With the basic concept validated, however, the next step was to build a functioning digital prototype in order to understand how players would react in a moving car – especially with respect to carsickness – and explore the technical side of how 99P Labs might implement a production version.<br /><br />To prevent carsickness, the next version of Martin was much taller to bring the game board closer to the horizon line, and it also incorporated auditory feedback so players wouldn’t have to consistently look down at the game board. This also meant the proof of concept game changed from a maze to one more like Simon Says in order to incorporate auditory feedback.<br /><br />To implement a version of Martin fit for a moving car as well as explore underlying technologies, this higher-fidelity version culminated in a cyber-physical system where players each sat on a phone enclosed in a specially-designed pillow that transmits its accelerometer data to a Raspberry Pi which correspondingly turns servo motors using Arduino, thus moving the game board.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={marbleModel} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${marbleModel_500} 500w, ${marbleModel_800} 800w, ${marbleModel_1080} 1080w, ${marbleModel_1600} 1600w, ${marbleModel_2000} 2000w, ${marbleModel_2600} 2600w, ${marbleModel} 2947w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">Testing with families confirmed that Martin successfully fostered cooperation and connection. Players loved how they had to physically move in order to control the game, and parents loved how their kids had to talk to each other and work together in order to play. To add an element of personalization to Martin, we allowed kids to create their own custom Lego game boards. Kids loved being able to express their creativity, and they wanted to keep playing with new boards and try ones that others created.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={marble1} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${marble1_500} 500w, ${marble1_800} 800w, ${marble1_1080} 1080w, ${marble1_1600} 1600w, ${marble1} 1920w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">One thing that became clear with Martin is that the ideal age range skews slightly older than some of our other prototypes. Kids older than 6 engaged immediately, however, younger kids, especially those in car seats, struggled to move the board with their seat, and they disengaged as a result. Older kids also found controlling Martin challenging, however, this challenge motivated them and deepened their engagement.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={marble2} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 48vw, 50vw" srcSet={`${marble2_500} 500w, ${marble2_800} 800w, ${marble2_1080} 1080w, ${marble2} 1796w`} alt="" className="article-image" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack">
                <p className="article-body-text">As a proof of concept for combining a seat controller, car movement, and cooperative play, Martin was a resounding success, and it points to a number of opportunities for further iteration. As mentioned, younger kids in car seats often disengaged because it was hard to use their seat as the controller, and even older kids faced difficulty with it, especially forward and backward movement. An easy way to alleviate this would be to use the bottom of the seat solely for left-to-right motion and place a sensor in the backrest that would control the forward-backward movement because using one’s upper body to control that axis is much easier in a car than using one’s lower body. Placing sensors in both parts of the seat would also keep players in a safe seating position because kids had to move all over the place to play our prototype!<br />‍<br />Another opportunity lies in customizing game boards. As mentioned earlier, kids loved being able to express themselves and share their creations, and this is exactly what Lego leverages with its Lego Life social media platform. In future iterations, we would want to emulate Lego to create a new venue for expression and play to open up opportunities for cross-car connection.<br /></p>
                </div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
        </div>
        <div id="value-to-client" className="article-content value-to-client wf-section">
            <div className="div-block-30 domain-research value-to-client">
            <div className="div-block-34">
                <h3 className="heading-7 light">Value to Client</h3>
                <h1 className="heading-8 light centered">Moving Forward</h1>
            </div>
            </div>
            <div className="case">
            <div className="one-two w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">While our prototypes individually explored combinations of play, affordances, and interaction modalities, they add up to a reframing of the car as a console we affectionately named Swervo.<br /></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-44 w-col w-col-4 w-col-stack"><img src={value} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${value_500} 500w, ${value_800} 800w, ${value} 1042w`} alt="" className="article-image logo" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="narrow-full-width w-row">
                <div className="w-col w-col-3 w-col-stack"></div>
                <div className="column-45 w-col w-col-6 w-col-stack"><img src={value1} loading="lazy" alt="" className="article-image model" /></div>
                <div className="w-col w-col-3 w-col-stack"></div>
            </div>
            </div>
            <div className="attention-economy">
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="section-intro-text">For families, Swervo leverages personal, contextual, and telematic data to create engaging gameplay, foster connection, and turn lost time into quality time.<br /><br />For 99P Labs, Swervo combines user input and contextual data to generate new and valuable data streams. This data will allow 99P Labs to continuously improve the user experience while generating proprietary data and new business opportunities.</p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={value2} loading="lazy" alt="" className="article-image polygon data" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text"><strong>In-Car Data</strong><br />Sensors like pressure sensors and GPS enable the basic interactions underlying each game like moving the Martin game board and generating location-based questions for Moe.<br /></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={value3} loading="lazy" alt="" className="article-image polygon data" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text"><strong>Connected Car Data</strong><br />In-car data being sent back to 99P will enable continuous gameplay improvement such as how to best calibrate the seat sensors for Martin.<br /></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={value4} loading="lazy" alt="" className="article-image polygon data" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text"><strong>Cross-Car Data</strong><br />Connecting cars to each other will enable cross-car gameplay like crowdsourced Moe questions.<br /></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={value5} loading="lazy" alt="" className="article-image polygon data" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
                <div className="w-col w-col-1 w-col-stack"></div>
                <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text"><strong>Vehicle-to-Everything (V2X) Data</strong><br />As they become more connected to the world and the people around them, cars will be able to derive semantic meaning which can augment gameplay. For example, Moe could integrate personal data to keep questions up-to-date with players&#x27; lives.<br /></p>
                </div>
                <div className="w-col w-col-2 w-col-stack"></div>
                <div className="column-53 w-col w-col-4 w-col-stack"><img src={value6} loading="lazy" alt="" className="article-image polygon last data" /></div>
                <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            </div>
        </div>
      </div>
    );
  }