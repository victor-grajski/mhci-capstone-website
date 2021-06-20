import React, { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import chevron from "../assets/images/chevron-down.svg";
import caseCarInterior from "../assets/images/Group-103.png";
import caseCarInterior500 from "../assets/images/Group-103-p-500.png";
import caseCarInterior800 from "../assets/images/Group-103-p-800.png";
import teslaNetflix from "../assets/images/Group-103_1.png";
import teslaNetflix500 from "../assets/images/Group-103_1-p-500.png";
import teslaNetflix800 from "../assets/images/Group-103_1-p-800.png";
import peopleOnPhones from "../assets/images/Group-104.png";
import peopleOnPhones500 from "../assets/images/Group-104-p-500.png";
import peopleOnPhones800 from "../assets/images/Group-104-p-800.png";
import kidsOnPhones from "../assets/images/Group-104_1.png";
import kidsOnPhones500 from "../assets/images/Group-104_1-p-500.png";
import kidsOnPhones800 from "../assets/images/Group-104_1-p-800.png";
import twoKidsOnPhones from "../assets/images/Group-104_2.png";
import twoKidsOnPhones500 from "../assets/images/Group-104_2-p-500.png";
import twoKidsOnPhones800 from "../assets/images/Group-104_2-p-800.png";
import classicCarOnOpenRoad from "../assets/images/Group-158.png";
import classicCarOnOpenRoad500 from "../assets/images/Group-158-p-500.png";
import classicCarOnOpenRoad800 from "../assets/images/Group-158-p-800.png";
import atTheDriveIn from "../assets/images/Group-158_1.png";
import atTheDriveIn500 from "../assets/images/Group-158_1-p-500.png";
import atTheDriveIn800 from "../assets/images/Group-158_1-p-800.png";
import driveThruGraduation from "../assets/images/Group-158_2.png";
import driveThruGraduation500 from "../assets/images/Group-158_2-p-500.png";
import driveThruGraduation800 from "../assets/images/Group-158_2-p-800.png";
import contextualInquiry from "../assets/images/Group-136.png";
import contextualInquiry500 from "../assets/images/Group-136-p-500.png";
import contextualInquiry800 from "../assets/images/Group-136-p-800.png";
import pretotype from "../assets/images/Group-136_1.png";
import pretotype500 from "../assets/images/Group-136_1-p-500.png";
import pretotype800 from "../assets/images/Group-136_1-p-800.png";
import speedDating from "../assets/images/Group-136_2.png";
import speedDating500 from "../assets/images/Group-136_2-p-500.png";
import speedDating800 from "../assets/images/Group-136_2-p-800.png";
import opportunitySpaceLeft from "../assets/images/Group-156.png";
import opportunitySpaceLeft500 from "../assets/images/Group-156-p-500.png";
import opportunitySpaceRight from "../assets/images/Group-156_1.png";
import slidingSeats from "../assets/images/Group-142.png";
import starryNight from "../assets/images/Group-144.png";
import aToB from "../assets/images/Insight-106.png";
import aToB500 from "../assets/images/Insight-106-p-500.png";
import aToB800 from "../assets/images/Insight-106-p-800.png";
import aToB1080 from "../assets/images/Insight-106-p-1080.png";
import ben from "../assets/images/Group-144_1.png";
import insight2 from "../assets/images/insight2.png";
import insight2500 from "../assets/images/insight2-p-500.png";
import insight2800 from "../assets/images/insight2-p-800.png";
import insight21080 from "../assets/images/insight2-p-1080.png";
import lookingOutWindow from "../assets/images/Group-146.png";
import insight3 from "../assets/images/insight3.png";
import insight3500 from "../assets/images/insight3-p-500.png";
import insight3800 from "../assets/images/insight3-p-800.png";
import insight31080 from "../assets/images/insight3-p-1080.png";
import kitchenTable from "../assets/images/Group-140_3.png";
import kitchenTable500 from "../assets/images/Group-140_3-p-500.png";
import kitchenTable800 from "../assets/images/Group-140_3-p-800.png";
import friendsTailgate from "../assets/images/Group-140_4.png";
import friendsTailgate500 from "../assets/images/Group-140_4-p-500.png";
import friendsTailgate800 from "../assets/images/Group-140_4-p-800.png";
import aquarium from "../assets/images/Group-140_6.png";
import aquarium500 from "../assets/images/Group-140_6-p-500.png";
import aquarium800 from "../assets/images/Group-140_6-p-800.png";
import picnic from "../assets/images/Group-140_5.png";
import picnic500 from "../assets/images/Group-140_5-p-500.png";
import picnic800 from "../assets/images/Group-140_5-p-800.png";
import insight4 from "../assets/images/insight4.png";
import insight4500 from "../assets/images/insight4-p-500.png";
import insight4800 from "../assets/images/insight4-p-800.png";
import blankWall from "../assets/images/Group-153.png";
import chalkDrawing from "../assets/images/Group-130.png";
import momInBackseat from "../assets/images/Group-140.png";
import momInBackseat500 from "../assets/images/Group-140-p-500.png";
import momInBackseat800 from "../assets/images/Group-140-p-800.png";
import childWithTablet from "../assets/images/Group-140_1.png";
import childWithTablet500 from "../assets/images/Group-140_1-p-500.png";
import childWithTablet800 from "../assets/images/Group-140_1-p-800.png";
import kidOutWindow from "../assets/images/Group-140_2.png";
import kidOutWindow500 from "../assets/images/Group-140_2-p-500.png";
import kidOutWindow800 from "../assets/images/Group-140_2-p-800.png";
import drawOnSeats from "../assets/images/Group-140_7.png";
import drawOnSeats500 from "../assets/images/Group-140_7-p-500.png";
import intercar from "../assets/images/Group-171.png";
import intercar500 from "../assets/images/Group-171-p-500.png";
import intercar800 from "../assets/images/Group-171-p-800.png";
import cui from "../assets/images/Group-172.png";
import cui500 from "../assets/images/Group-172-p-500.png";
import cui800 from "../assets/images/Group-172-p-800.png";

export default function AreWeThereYet() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Are We There Yet?`;
  });

    return (
      <div className="body">
        <div className="columns-6 w-row">
          <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5"></div>
          <div className="column-13 w-col w-col-2 w-col-small-2 w-col-tiny-2"></div>
          <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5"></div>
        </div>
        <div id="overview" className="above-the-fold">
        <Container style={{'z-index': '100001'}}>
            <Navbar bg="transparent" variant="dark" expand="lg" style={{'background-color': 'transparent'}}>
              <Navbar.Brand href="/" style={{'color': 'whitesmoke', 'font-family': 'Raleway'}}>99P Labs x MHCI</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{'border-color': 'transparent'}} />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto" defaultActiveKey="/are-we-there-yet">
                  {/* <Nav.Link href="/are-we-there-yet" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Are We There Yet?</Nav.Link> */}
                  <NavDropdown active={true} title="Are We There Yet?" id="basic-nav-dropdown" style={{'padding-right': '50px'}}>
                    <NavDropdown.Item href="#overview">Overview</NavDropdown.Item>
                    <NavDropdown.Item href="#domain-research">Domain Research</NavDropdown.Item>
                    <NavDropdown.Item href="#methods">Methods</NavDropdown.Item>
                    <NavDropdown.Item href="#insights">Insights</NavDropdown.Item>
                    <NavDropdown.Item href="#opportunity-space">Opportunity Space</NavDropdown.Item>
                    <NavDropdown.Item href="#target-user">Target User</NavDropdown.Item>
                    <NavDropdown.Item href="#next-steps">Next Steps</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/team" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Team</Nav.Link>
                  <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank" style={{'color': 'whitesmoke'}}>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
          <div className="div-block-33">
            <div className="div-block-30 hero"></div>
          </div>
          {/* <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light awty atf w-nav">
            <div className="container w-container">
              <div className="div-block-11">
                <a href="index.html" className="nav-link light awty atf w-nav-link">99P Labs x MHCI</a>
              </div>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a href="are-we-there-yet.html" aria-current="page" className="nav-link light w-nav-link w--current">Are We There Yet?</a>
                <a href="#overview" className="nav-link mobile-section w-nav-link">Overview</a>
                <a href="#domain-research" className="nav-link mobile-section w-nav-link">Domain Research</a>
                <a href="#methods" className="nav-link mobile-section w-nav-link">Methods</a>
                <a href="#insights" className="nav-link mobile-section w-nav-link">Insights</a>
                <a href="#opportunity-space" className="nav-link mobile-section w-nav-link">Opportunity Space</a>
                <a href="#target-user" className="nav-link mobile-section w-nav-link">Target User</a>
                <a href="#next-steps" className="nav-link mobile-section w-nav-link">Next Steps</a>
                <a href="team.html" className="nav-link light w-nav-link">Team</a>
                <a href="https://medium.com/mhci-99p-labs-capstone" target="_blank" rel="noreferrer" className="nav-link light w-nav-link">Blog</a>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="icon light awty atf w-icon-nav-menu"></div>
              </div>
            </div>
          </div> */}
          
          <div className="columns-5 w-row">
            <div className="w-col w-col-2 w-col-stack"></div>
            <div className="column-12 w-col w-col-8 w-col-stack">
              <div className="div-block-32">
                <h1 className="heading-6">Are We There Yet?</h1>
              </div>
              <div>
                <p className="paragraph-7">Our client, 99P Labs, tasked us with investigating a future in which automobiles promote spontaneous social interaction between drivers, passengers and pedestrians within the same human-driven vehicles and across human-driven vehicles.<br /><br />From the outset, we recognized our project had a big problem space. So where did we start given we had a destination but no map? We made our own! We first dove into domain research to understand what social and technological trends were emerging that might affect our work.<br /></p>
              </div>
              <div className="div-block-13 awty">
                <a href="#domain-research" className="w-inline-block">
                  <img src={chevron} loading="lazy" alt="" className="image-4" />
                </a>
              </div>
            </div>
            <div className="column-34 w-col w-col-2 w-col-stack"></div>
          </div>
        </div>
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light awty toc under w-nav">
          <div className="container toc w-container">
            <nav role="navigation" className="nav-menu toc w-nav-menu">
              <a href="#overview" className="nav-link mobile-section toc w-nav-link">Overview</a>
              <a href="#domain-research" className="nav-link mobile-section toc w-nav-link">Domain Research</a>
              <a href="#methods" className="nav-link mobile-section toc w-nav-link">Methods</a>
              <a href="#insights" className="nav-link mobile-section toc w-nav-link">Insights</a>
              <a href="#opportunity-space" className="nav-link mobile-section toc w-nav-link">Opportunity Space</a>
              <a href="#target-user" className="nav-link mobile-section toc w-nav-link">Target User</a>
              <a href="#next-steps" className="nav-link mobile-section toc w-nav-link">Next Steps</a>
            </nav>
          </div>
        </div>
        {/* <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar light awty btf w-nav">
          <div className="container w-container">
            <div className="div-block-11">
              <a href="index.html" className="nav-link light awty w-nav-link">99P Labs x MHCI</a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="are-we-there-yet.html" aria-current="page" className="nav-link light w-nav-link w--current">Are We There Yet?</a>
              <a href="#overview" className="nav-link mobile-section w-nav-link">Overview</a>
              <a href="#domain-research" className="nav-link mobile-section w-nav-link">Domain Research</a>
              <a href="#methods" className="nav-link mobile-section w-nav-link">Methods</a>
              <a href="#insights" className="nav-link mobile-section w-nav-link">Insights</a>
              <a href="#opportunity-space" className="nav-link mobile-section w-nav-link">Opportunity Space</a>
              <a href="#target-user" className="nav-link mobile-section w-nav-link">Target User</a>
              <a href="#next-steps" className="nav-link mobile-section w-nav-link">Next Steps</a>
              <a href="team.html" className="nav-link light w-nav-link">Team</a>
              <a href="https://medium.com/mhci-99p-labs-capstone" target="_blank" rel="noreferrer" className="nav-link light w-nav-link">Blog</a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="icon light awty w-icon-nav-menu"></div>
            </div>
          </div>
        </div> */}
        <Container className="fixed-top" style={{'z-index': '100', 'color': 'whitesmoke', 'margin-top': 0, 'padding': 0}}>
            <Navbar bg="light" variant="light" expand="lg" style={{'padding': '20px 10px 10px 10px'}}>
              <Navbar.Brand href="/" style={{'font-family': 'Raleway'}}>99P Labs x MHCI</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{'border-color': 'transparent'}} />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto" defaultActiveKey="/are-we-there-yet">
                  {/* <Nav.Link href="/are-we-there-yet" style={{'padding-right': '50px', 'color': 'whitesmoke'}}>Are We There Yet?</Nav.Link> */}
                  <NavDropdown active={true} title="Are We There Yet?" id="basic-nav-dropdown" style={{'padding-right': '50px'}}>
                    <NavDropdown.Item href="#overview">Overview</NavDropdown.Item>
                    <NavDropdown.Item href="#domain-research">Domain Research</NavDropdown.Item>
                    <NavDropdown.Item href="#methods">Methods</NavDropdown.Item>
                    <NavDropdown.Item href="#insights">Insights</NavDropdown.Item>
                    <NavDropdown.Item href="#opportunity-space">Opportunity Space</NavDropdown.Item>
                    <NavDropdown.Item href="#target-user">Target User</NavDropdown.Item>
                    <NavDropdown.Item href="#next-steps">Next Steps</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/team" style={{'padding-right': '50px'}}>Team</Nav.Link>
                  <Nav.Link href="https://medium.com/mhci-99p-labs-capstone" target="_blank">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        <div id="domain-research" className="article-content domain-research">
          <div className="div-block-30 domain-research">
            <div className="div-block-34">
              <h3 className="heading-7 light">Domain Research</h3>
              <h1 className="heading-8 light centered">Trends That Drove Us</h1>
            </div>
          </div>
          <div className="case">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block">
                  <h2 className="heading-9">CASE</h2>
                </div>
              </div>
              <div className="column-33 w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">
                  <a href="https://www.assurant.com/newsroom-detail/Features/2018/February/c.a.s.e.-the-acronym-taking-over-the-auto-industry" target="_blank" rel="noreferrer" className="article-link">CASE</a> represents the current megatrend unfolding in the automotive industry. That is, under current trends, the car of the future will be Connected, Autonomous Shared, and Electric.
                </p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">What we found interesting about the increase in connectivity and autonomy specificially is the potential impact on social interaction. Connectivity and autonomy point to a future where the car interior is a space more conducive to productivity, entertainment, and digital connection.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={caseCarInterior} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${caseCarInterior500} 500w, ${caseCarInterior800} 800w, ${caseCarInterior800} 908w"`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">However, we wanted to challenge this and ask: Is this a good thing? A <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3584200" target="_blank" rel="noreferrer" className="article-link">2019 study</a> on the impact of autonomous taxis showed that when the car is autonomous, people spend the entire ride on their phones. What is lost when there’s less friction around productivity and digital entertainment in the car, and how does this impact our project? We will be designing for the time between now and full autonomy, and we have not constrained the project to a CASE future, rather we’re using it as a guide.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={teslaNetflix} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${teslaNetflix500} 500w, ${teslaNetflix800} 800w, ${teslaNetflix} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
          <div className="attention-economy">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block attention-economy">
                  <h2 className="heading-9">The Attention Economy</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">When thinking about the implications of the connected car, we were confronted with the impact of the <a href="https://econreview.berkeley.edu/paying-attention-the-attention-economy/" target="_blank" rel="noreferrer" className="article-link">attention economy</a> on the in-car experience. In our hyper-connected world, our everyday experience is constrained by the attention economy. Human attention will always be finite but “Today we have access to information on a massive scale.” At every moment, our attention is competed for and commoditized. Given that mobile phones allow us to, at any moment, learn anything, connect with anyone, and stay occupied, people’s discomfort with the natural pace of life has decreased, leading to what some scholars call the <a href="https://www.tandfonline.com/doi/abs/10.1080/15205436.2016.1234165" target="_blank" rel="noreferrer" className="article-link">death of conversation</a>.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack">
                <img src={peopleOnPhones} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${peopleOnPhones500} 500w, ${peopleOnPhones800} 800w, ${peopleOnPhones} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-19 w-col w-col-4 w-col-stack">
                <p className="article-body-text">This pervasive and constant technology use has had an impact on how young people have social interactions. A <a href="https://journals.sagepub.com/doi/abs/10.1177/0265407519836170" target="_blank" rel="noreferrer" className="article-link">2019 study</a> found that the amount of time adolescents spend on digital media such as texting, gaming, and social media doubled between 2006 and 2016. Additionally Gen-Z adolescents spend significantly less time per week engaging in face-to-face social interaction with their peers than previous generations did. Further, loneliness among 8th, 10th, and 12th graders significantly increased during years when in-person social interaction was decreasing and digital media use was increasing.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack">
                <img src={kidsOnPhones} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${kidsOnPhones500} 500w, ${kidsOnPhones800} 800w, ${kidsOnPhones} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-19 w-col w-col-4 w-col-stack">
                <p className="article-body-text">It’s not only scholars noticing the impact the attention economy has had on people’s interactions. In a <a href="https://www.nngroup.com/articles/parental-anxiety" target="_blank" rel="noreferrer" className="article-link">Nielsen Norman study</a> involving more than 100 participants in 6 cities around the globe, they heard many parents expressing concerns about their children’s use of electronic devices. The authors distilled their findings down to  two main phenomena that parents worried about, The Vortex and Filling the Silence. The Vortex is the feeling of continuously succumbing to digital temptations and being pulled away from the physical world and into the online one, and Filling the Silence describes becoming reliant on devices to constantly to fill all of the empty moments in one’s life.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack">
                <img src={twoKidsOnPhones} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${twoKidsOnPhones500} 500w, ${twoKidsOnPhones800} 800w, ${twoKidsOnPhones} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
          <div className="shift-in-perception-of-car">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block shift">
                  <h2 className="heading-9">A Shift in the Perception of the Car</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">In a recent <a href="https://www.zipcar.com/press/releases/third-annual-millennial-study" target="_blank" rel="noreferrer" className="article-link">survey</a> by ZipCar, nearly half of Millennials said they sometimes choose to spend time with friends online instead of driving to see them in person. And nearly two out of three Millennials say losing their phone or computer would have a greater negative impact on their daily routine than losing their car. This may not be all that surprising, but it points to the trend of a decreased value placed on the car by younger generations.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-19 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">In the past, cars represented freedom. Now, they are a burden. Younger generations see the burden and responsibility of owning a car <a href="https://press.uchicago.edu/ucp/books/book/chicago/M/bo22805037.html" target="_blank" rel="noreferrer" className="article-link">outweighing</a> the value of transportation - especially given the prevalence of other easy transportation options such as Uber or bikesharing. We’ve even seen <a href="https://www.researchgate.net/publication/258953866_The_Reasons_for_the_Recent_Decline_in_Young_Driver_Licensing_in_the_United_States" target="_blank" rel="noreferrer" className="article-link">fewer and fewer</a> young people opting to get their driver&#x27;s license over the past 15 years.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-20 w-col w-col-4 w-col-stack">
                <img src={classicCarOnOpenRoad} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 31vw, 33vw" srcSet={`${classicCarOnOpenRoad500} 500w, ${classicCarOnOpenRoad800} 800w, ${classicCarOnOpenRoad} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-19 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">The status symbol of teens is no longer the car - it’s the smartphone. The American love affair with cars is <a href="https://www.pewresearch.org/social-trends/2006/08/01/americans-and-their-cars-is-the-romance-on-the-skids/" target="_blank" rel="noreferrer" className="article-link">dying</a>, and it&#x27;s being replaced an infatutation for our devices. We did, however, enter unprecedented times over a year ago when the world shut down due to COVID-19.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
          <div className="covid">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block covid">
                  <h2 className="heading-9">COVID</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">In 2020, domestic travel increased, and the car made a <a href="https://www.nny360.com/communitynews/business/cars-are-making-a-comeback-thanks-to-covid/article_73172663-6d85-5eb9-b2e1-a89077819e48.html" target="_blank" rel="noreferrer" className="article-link">comeback</a>. COVID made cars more <a href="https://www.theatlantic.com/health/archive/2020/08/millennials-are-buying-covid-cars/615325/" target="_blank" rel="noreferrer" className="article-link">attractive</a> as they once again symbolized <a href="https://www.cars.com/articles/americans-revive-the-sunday-drive-and-use-their-cars-as-much-needed-escape-during-the-covid-19-pandemic-according-to-new-research-by-cars-com-420899/" target="_blank" rel="noreferrer" className="article-link">freedom</a> and safety. Cars become one of the only ways to safely participate in the world during the pandemic. Whether it was the reemergence of drive-in movies, the rebirth of the American road trip, or the creation of new experiences like drive-by birthday parties and drive-through graduations, COVID gave us a renewed appreciation for our cars.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack">
                <img src={atTheDriveIn} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${atTheDriveIn500} 500w, ${atTheDriveIn800} 800w, ${atTheDriveIn} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-19 w-col w-col-4 w-col-stack">
                <p className="article-body-text">A world is emerging where people could spend even more time in cars as the pandemic forces a new reality. But even if this is true, the effects of technology use that have emerged over the past few years are still pervasive. Even though we’re taking more road trips, children are engrossed in iPads and teens are glued to their phones as everyone in the family escapes to their own bubbles. The nature of the car journey is shifting, and the only question is: how long will it last?<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-17 w-col w-col-4 w-col-stack">
                <img src={driveThruGraduation} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${driveThruGraduation500} 500w, ${driveThruGraduation800} 800w, ${driveThruGraduation} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
        </div>
        <div id="methods" className="article-content methods">
          <div className="div-block-30 methods">
            <div className="div-block-34">
              <h3 className="heading-7 light">Methods</h3>
              <h1 className="heading-8 light centered">How Did We Get Here?</h1>
            </div>
          </div>
          <div className="methods">
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">To begin defining the current state for our project, we asked: &quot;What is the range of people and behaviors involved in social interaction in cars?&quot; <br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 methods reverse w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-21 w-col w-col-4 w-col-stack">
                <img src={contextualInquiry} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${contextualInquiry500} 500w, ${contextualInquiry800} 800w, ${contextualInquiry} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">To investigate this, we conducted <strong>8</strong> Directed Storytelling sessions and <strong>6</strong> Guerilla Interviews. We intentionally broadened` our scope and spoke with car owners, ride sharers and public transport users, asking about memorable in-person and virtual interactions in transit. We also snuck in a few intercepts at the DC airport which proved a little challenging given the pandemic!<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 methods w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-22 w-col w-col-4 w-col-stack">
                <p className="article-body-text">To dig deeper, we also designed a virtual scavenger hunt activity to investigate<strong> to what extent the car is an emotional and mental extension of the home.</strong> We also wondered, What are the parallels between behavior in the car and home and where do they differ? We asked our <strong>11</strong> participants to take pictures of meaningful items from their car and their home, items that existed in both spaces, and items from their home they wish they had in their car. We followed up the activity with a semi-structured interview using the images as artifacts, and we probed for connections between the home and the car.<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <img src={pretotype} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${pretotype500} 500w, ${pretotype800} 800w, ${pretotype} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 methods reverse w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-23 w-col w-col-4 w-col-stack">
                <img src={speedDating} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${speedDating500} 500w, ${speedDating800} 800w, ${speedDating} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Because our project was about imagining the future of social interactions, we wanted to push our thinking into futures that didn’t yet exist, and we wanted have some fun with it! We used ideation as a means of gathering data, where we thought of as many social interactions as possible, and we used those ideas to stretch our imagination of what the car could do in the future. We based them around key themes we found in contextual inquiry and the car scavenger hunt activities. We then wrapped these ideas into future state storyboards to see how our <strong>8</strong> participants reacted to them.<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 methods reverse w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-24 w-col w-col-4 w-col-stack">
                <p className="article-body-text">After looking at findings from each individual study, we then synthesized our data holistically to derive our insights.<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
        </div>
        <div id="insights" className="article-content insight-one">
          <div className="div-block-30 opportunity-space">
            <div className="columns-10 w-row">
              <div className="column-30 w-col w-col-4 w-col-stack">
                <div className="div-block-38">
                  <h1 className="heading-8 light opportunity-space">People don’t see time spent in cars as valuable</h1>
                </div><img src={opportunitySpaceLeft} loading="lazy" sizes="100vw" srcSet={`${opportunitySpaceLeft500} 500w, ${opportunitySpaceLeft} 572w`} alt="" className="image-8" />
              </div>
              <div className="column-32 w-col w-col-4 w-col-stack">
                <div className="div-block-38">
                  <h1 className="heading-8 dark">Our Opportunity Space</h1>
                </div>
              </div>
              <div className="column-31 w-col w-col-4 w-col-stack">
                <div className="div-block-38">
                  <h1 className="heading-8 light opportunity-space">The constraints of the car are uniquely suited for reflection, creativity and connection.</h1>
                </div><img src={opportunitySpaceRight} loading="lazy" alt="" className="image-8 family" />
              </div>
            </div>
          </div>
          <div className="div-block-30 insights">
            <div className="div-block-34">
              <h3 className="heading-7 light">Insights</h3>
              <h1 className="heading-8 light centered">The Road Less Traveled</h1>
            </div>
          </div>
          <div className="insight-1">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block">
                  <h2 className="heading-9">Time spent in transit is overlooked and under-utilized</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">As we walked through the data, we saw a consistent underlying theme that people viewed the car as a utility. It could be more, but it’s primary goal and purpose was to help people get to their end destination. This focus on the functional element of the car reduced the perceived value of the time spent in transit. In other words, because people primarily viewed the car as a tool to get from Point A to Point B, it was difficult for them to see the car – and the time spent within it – holding any other additional value beyond its utility. The time spent commuting was just something you had to do to get to where you want to go.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-16 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We saw this in our <strong>speed dating study</strong> where we invited participants to imagine with us a world where the car could facilitate new ways to connect with each other. We introduced some neat socially supporting technologies like shape shifting seats and fully immersive visual experiences, expecting participants to be excited to explore these new potentially meaningful moments in the car.<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={slidingSeats} loading="lazy" alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={starryNight} loading="lazy" alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">However, we were met with uncertainty and hesitation. Participants faced difficulty imagining the car as this type of space. For them, the car’s role was not to be the destination of social interaction. Instead, they told us that the car was just a transportation tool to allow for that social context to happen elsewhere.<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote">
                  <p className="paragraph-8">“Cars are more of a means to an end, Point A to Point B. Not that you can’t enjoy people’s company, but people don’t go on a car ride to enjoy each other’s company.”</p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Speed Dating</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Taylor</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Compounding the undervaluation of this time in transit is the simultaneous focus on the destination. Although kids may be most explicit in this focus, with their repeated &#x27;are we there yet?&#x27;s, this sentiment was shared universally. People want to get to their destination as fast as possible; never mind the possibilities in the time spent to get there. But this focus on the destination isn’t all bad. Oftentimes it’s driven by positive emotions, such as happiness or excitement. For example, Alicia spoke about her kids and their excitement to be where they’re headed.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote">
                  <p className="paragraph-8">&quot;The kids get antsy on long trips because they&#x27;re excited about where we&#x27;re headed - they get impatient with the process of getting there.&quot;</p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Scavenger Hunt</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Alicia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">The commute is viewed as an inhibitor, something that needs to be gotten through and over with for the fun to begin. This perspective overlooks the time spent in this process and its potential for connection, play, and presence. We heard from our research this dominant view of the cars of today as primarily a functional utility, with the time spent commuting a necessary component of the process with little inherent value.  In fact, we even heard from some participants, like Alex who feels less guilty taking time to eat in the car. This time is valued so little that it’s like the time doesn&#x27;t exist.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-9 w-row">
              <div className="w-col w-col-1"></div>
              <div className="column-27 w-col w-col-10">
                <img src={aToB} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, (max-width: 1279px) 81vw, 83vw" srcSet={`${aToB500} 500w, ${aToB800} 800w, ${aToB1080} 1080w, ${aToB} 1537w`} alt="" className="image-7" />
              </div>
              <div className="w-col w-col-1"></div>
            </div>
          </div>
          <div className="insight-2">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block insight-2">
                  <h2 className="heading-9">Time in the car feels like lost time</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We heard over and over that time in the car was boring. But why? Why can’t you allievate boredom inside the car in the same way you alleviate it outside of the car? When we dug deeper into this we realized that the constraints of the car force people into a state between productivity and leisure making the time feel lost. Imagine you’re sitting in your living room, and you can’t do the things you know you need to get done, yet you can&#x27;t sit back and relax. This is what participants told us being in the car felt like.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={ben} loading="lazy" alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote insight-2">
                  <p className="paragraph-8">&quot;If I was just sitting in a chair I could do what ever I wanted...not in a car....When I’m in traffic I feel stuck in a box.&quot;<br /></p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Directed Storytelling</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Ben</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We heard similar sentiments across our research as we heard participants focusing on the constraints and what they weren’t able to do. Ross had a great way of describing it.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote insight-2">
                  <p className="paragraph-8">“When I think about what I do in the car, I think about what I don’t do. The car prevents me from doing other things.”</p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Directed Storytelling</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Ross</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Ross cares more about what he isn’t able to do in the car than what’s possible with the time. In other words, the constraints of the car impede Ross from focusing on what is possible with his time in it.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-28 w-col w-col-4 w-col-stack">
                <p className="article-body-text">All of this culminates in the idea that the time in the car feels like unintentional, “lost” time, caught between leisure and productivity. Participants felt bored because they can neither relax nor be productive, and the feeling of being physically stuck compounds this to the point that the time feels as though it has slipped away. Remembering how the automobile is becoming increasingly connected and autonomous, the less people are required to pay attention to the road, the more the time in the car will open up. But knowing that people are likely to spend that time glued to a screen at the expense of meaningful social interaction, is that a world we want to live in? There’s an opportunity here to reframe the car to a space for time well spent.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-9 w-row">
              <div className="w-col w-col-1"></div>
              <div className="column-27 w-col w-col-10">
                <img src={insight2} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, (max-width: 1279px) 81vw, 83vw" srcSet={`${insight2500} 500w, ${insight2800} 800w, ${insight21080} 1080w, ${insight2} 1585w`} alt="" className="image-7" />
              </div>
              <div className="w-col w-col-1"></div>
            </div>
          </div>
          <div className="insight-3">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block insight-3">
                  <h2 className="heading-9">The car is an under-explored escape from the demands of modern life</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">While participants felt like time spent in the car was lost time, the reality is that the time exists. There has to be something happening in this time. So what do people do in this “lost” time? We found that this perception of the car as a utility and the same constraints that make people feel like time is lost can also contribute to some pretty beautiful moments of relaxed attention, imagination, and reflection.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={lookingOutWindow} loading="lazy" alt="" className="article-image" />
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">As we heard in our domain research, attention is a limited resource, one that is increasingly demanded and commoditized in today’s attention economy. The pressures of modern life demand constant consumption, communication, and productivity. However, the unique constraints of the car demand a level of disconnection from the outside world. The act of driving limits the ability to multitask, and it encourages respite from the world around you, making the world inside the car uniquely designed to facilitate mindful moments. Because the car isn’t fully conducive to either productivity or relaxation, it creates an unintentional third space by eliminating the possibility of doing too many things at once as Laura described.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-29 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote insight-3">
                  <p className="paragraph-8">“The car eliminates the possibility of doing too many things at once so I can settle into enjoying something and not multitasking.”<br /></p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Directed Storytelling</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Laura</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We also saw the car used as a portable private space where people are able to be their true selves. For example, Nora told us how she escapes to her car during her workday to take a social and mental break from work, and Rebecca told us in the car scavenger hunt that her car is one of the only places she can scream and let it out, especially during COVID. It’s a space to be the “unfiltered you”. We also heard a consistent common thread of stories about moments where being in the car encouraged mindful reflection.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote insight-3">
                  <p className="paragraph-8">“I’m more present to the immediate stimuli around me while driving than at home. Focused on driving instead of anxieties.”</p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Scavenger Hunt</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Rebecca</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Hannah told us how the calm stimulation of the car allows her son to chill out and look out the window like she did as a kid rather than occupied by a screen. Thus, the constraints of the car lead to a beautiful moment of relaxed attention where drivers and passengers can simply let their minds wander.<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-28 w-col w-col-4 w-col-stack">
                <p className="article-body-text">As much as people say the car limits their freedom, they also use the car as an escape pod where they can be calm but attentive, reflective, and authentically themselves, whether that’s staring out the window or simply focusing on driving. People get to escape from the demands of modern life in a car. The constraints of the car allow freedom from the demands on their attention, leaving an open opportunity to just be themselves. This “escape pod” is a unique and rare space in life. Moments of presence and reflection are becoming increasingly rare in our modern world and the car’s constraints can be used to foster digital “disconnection” in our hyperconnected world.<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-9 w-row">
              <div className="w-col w-col-1"></div>
              <div className="column-27 w-col w-col-10">
                <img src={insight3} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, (max-width: 1279px) 81vw, 83vw" srcSet={`${insight3500} 500w, ${insight3800} 800w, ${insight31080} 1080w, ${insight3} 1170w`} alt="" className="image-7" />
              </div>
              <div className="w-col w-col-1"></div>
            </div>
          </div>
          <div className="insight-4">
            <div className="columns-7 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-14 w-col w-col-10 w-col-stack">
                <div className="header-block insight-4">
                  <h2 className="heading-9">The constraints of the car create a unique time and space for meanin<span>g</span>ful connection</h2>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Recalling our domain research, we found “death of conversation” as one major social trends brought on by social media and the attention economy. Yet when we dug deeper into primary research, we found that, in fact, the car is a place where meaningful conversations happen often. We heard stories about people’s admissions of love, breakups, future plans, coming out, retirement, deaths in the family, exciting life announcements and other intimate stories. You name it, it’s happened in the car. What makes the car ideal for these conversations?<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={kitchenTable} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${kitchenTable500} 500w, ${kitchenTable800} 800w, ${kitchenTable} 908w`} alt="" className="article-image" /></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Early in our project, as we heard more and more about important conversations happening in cars, we started calling the car The Kitchen Table on Wheels based on the assumption that it seemed to play the same role as the kitchen table in the home; a central place where people could unpack their day and relax.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-29 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack">
                <p className="article-body-text">We wanted to further dissect and validate this assumption, however. Is the car really The Kitchen Table on Wheels? And if so, why? During our scavenger hunt study, Alice shared an image of her kitchen bench as a meaningful thing that existed in both her car and her home. She shared stories about her kitchen bench and how it was a natural spot for conversations. She said the car played the same role for her and her parents growing up, and she still had important conversations there.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 quote w-col w-col-4 w-col-stack">
                <div className="header-block quote insight-4">
                  <p className="paragraph-8">“My car would be my kitchen, because there’s a bench in my kitchen where everybody gathers and talks about important things.”</p>
                  <div className="div-block-35">
                    <div className="div-block-36 method">
                      <div className="div-block-37"></div>
                      <div className="text-block">Scavenger Hunt</div>
                    </div>
                    <div className="div-block-36 participant">
                      <div className="div-block-37 participant"></div>
                      <div className="text-block">Alice</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-29 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Through our domain research, we learned there are evidence-based psychological reasons that make the car a great place for conversations. The physical constraints of the car limit distraction by not allowing people to do many other activities. It also removes a level of direct eye contact which creates a relaxed informality. Finally, being out and moving in the world while at the same being separate from it brings a level of comfort for people which promotes relaxed attention. So the unique combination of physical and mental constraints imposed by the car help foster an environment of comfort and shared purpose that allow for vulnerable conversations to happen.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={friendsTailgate} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${friendsTailgate500} 500w, ${friendsTailgate800} 800w, ${friendsTailgate} 908w`} alt="" className="article-image" /></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-41 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Yet, as our project unfolded, we discovered that The Kitchen Table on Wheels wasn’t the full story. With further exploration in primary research, we discovered that meaningful moments involved not just deep conversations but other activities like playing games or sharing music. During our storyboarding activity, when Sid saw a story about engaging kids in creative play in the back seat, he told us about  moments in the car when the whole family would make riddles together. He also spoke about the games he would play on longer rides like finding out-of-state license plates and counting cars of a certain color.<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <img src={aquarium} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${aquarium500} 500w, ${aquarium800} 800w, ${aquarium} 908w`} alt="" className="article-image" /></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-42 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Another participant, Bill lit up when he saw the storyboard about the car encouraging a spontaneous picnic. Although the scenario we illustrated was originally for romantic couples, Bill said he would love to use this feature with his grandkids. He spoke about the joy using it to surprise them would bring. He mentioned that being spontaneous and humorous in the car is a great way for him to relate with his grandkids who were ”always on their phones.”<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <img src={picnic} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${picnic500} 500w, ${picnic800} 800w, ${picnic} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-26 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-43 w-col w-col-4 w-col-stack">
                <p className="article-body-text">So the car really isn&#x27;t just the ‘kitchen table on wheels’. It is also a place for play and spontaneous moments of connection. The last of our 4 insights highlights the car as a unique space to foster meaningful connections and conversations. We plan to put this unique space to work to foster moments of connection between people.<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-9 w-row">
              <div className="w-col w-col-1"></div>
              <div className="column-27 w-col w-col-10">
                <img src={insight4} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, (max-width: 1279px) 81vw, 83vw" srcSet={`${insight4500} 500w, ${insight4800} 800w, ${insight4} 1011w`} alt="" className="image-7" />
              </div>
              <div className="w-col w-col-1"></div>
            </div>
          </div>
        </div>
        <div id="opportunity-space" className="article-content insight-one">
          <div className="div-block-30 next-steps">
            <div className="div-block-34">
              <h3 className="heading-7 light">Opportunity Space</h3>
              <h1 className="heading-8 light centered">Where Do We Go From Here?</h1>
            </div>
          </div>
          <div className="next-steps">
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Taking a step back from our insights, there appears to be a gap, and in that gap, there is a rich design opportunity. On one hand, valuable time is there for the taking, and there’s an opportunity to reframe the focus from what people can’t do to what they can do. On the other hand, we found the car offers a unique space to find respite from the demands of everyday life, and there’s an opportunity to put the unique constraints of the car to work for human connection.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-36 w-col w-col-4 w-col-stack">
                <p className="article-body-text">When we overlay our domain research, our opportunity space starts taking shape. As technology and demand for autonomous vehicles increases, passengers will have even more free time in the car. Add to that the increase in connectivity in an already hyperconnected world, and this time could be swallowed by the attention economy altogether. While the pandemic has created a comeback for the car and the family road trip, bored kids in the car is nothing new, and we’re at risk of adding more screens to distract them. So if time is there for the taking, and the car is well suited to make the most of that time, we intend to design experiences that capitalize on this undervalued time and use it to create valuable moments of human connection and creativity. Where do we take it from here? Let us show you…</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-9 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-27 w-col w-col-10 w-col-stack">
                <div style={{paddingTop: "56.27659574468085%"}} className="w-video w-embed">
                  <iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F547798818%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F547798818&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1134152435_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo" scrolling="no" title="Vimeo embed" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen={true}></iframe>
                </div>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Pretty exciting, right? Let’s get out of the car for the moment, stretch our legs and go for a stroll. Imagine you approach a concrete wall. What do you see? Is it the lack of something more? A lack of beauty; a lack of play; a lack of connection? With this perspective, what you may not see is that this concrete wall is an open space, an opportunity. It&#x27;s a space for beauty, play, and connection. All you need is chalk.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={blankWall} loading="lazy" alt="" className="article-image" /></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We saw that people perceive the time in the car much like this concrete wall. The time is available for the taking, but it is not being used to its full potential because people perceive the constraints of the car as too limiting to appreciate the value of the time spent in transit. We are reframing these limitations as creative constraints, and we are going to empower people to use the time they already have in transit to have meaningful interactions. That is, we are going to provide the chalk.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={chalkDrawing} loading="lazy" alt="" className="article-image" /></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">We intend to design experiences that capitalize on this undervalued time and use it to create valuable moments of human connection and creativity, specifically for our target users. But who are our target users?</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
        </div>
        <div id="target-user" className="article-content insight-one">
          <div className="div-block-30 next-steps target-user">
            <div className="div-block-34">
              <h3 className="heading-7 light">Target User</h3>
              <h1 className="heading-8 light centered">Who Is This For?</h1>
            </div>
          </div>
          <div className="next-steps">
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Unique to this project is that we were given free reign to choose the target user group for whom it would be most valuable and exciting to envision the future of social interactions in and around cars. As you may have gathered, the American Family has stood out as a fascinating target group to explore this opportunity space further.</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-37 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Throughout the interviews we conducted, participants kept coming back to joyful family memories made in the car. Sid recounted numerous fun games he played growing up with his family on road trips, Bill dreamt of surprising his grandchildren with spontaneous car picnics, and for Alice, the car carried the same symbolic significance as her kitchen bench. These were just a sampling of the stories we heard about the magic the car space could afford for meaningful family moments.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={momInBackseat} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${momInBackseat500} 500w, ${momInBackseat800} 800w, ${momInBackseat} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-38 w-col w-col-4 w-col-stack">
                <p className="article-body-text">Perhaps what is more interesting is that the more typical frustrations of a family commute haven’t gone away; they have simply evolved as mobile and digital technologies have introduced new alternatives to keep kids engaged. But how much of a good thing is too much? Nearly <a href="https://www.usatoday.com/story/tech/2020/07/31/kids-screen-time-concerns-mental-health-common-sense-pew-study/5504671002/" target="_blank" rel="noreferrer" className="article-link">3 out of 4 parents</a> today worry their kids are spending too much time on screens, and the car space is no different. Although kids are less restless, this tension in tech also leaves them less engaged in the present as each child escapes into their own silent digital bubble.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={childWithTablet} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${childWithTablet500} 500w, ${childWithTablet800} 800w, ${childWithTablet} 908w`} alt="" className="article-image" /></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-39 w-col w-col-4 w-col-stack">
                <p className="article-body-text">This tension in the car is particularly acute for families in the backdrop of a CASE and attention economy-dominated world. There is an alternative path, however, where technology can be used <strong>to break this isolation feedback loop and reclaim the car space for connection, play, and quality family time. </strong>This alternative path presents a rich opportunity for us and 99P Labs worth exploring further.</p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={kidOutWindow} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${kidOutWindow500} 500w, ${kidOutWindow800} 800w, ${kidOutWindow} 908w`} alt="" className="article-image" />
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
        </div>
        <div id="next-steps" className="article-content insight-one">
          <div className="div-block-30 next-steps next-step">
            <div className="div-block-34">
              <h3 className="heading-7 light">Next Steps</h3>
              <h1 className="heading-8 light centered">Are We There Yet?</h1>
            </div>
          </div>
          <div className="next-steps">
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">To realize this new value proposition, we are going into the next phase of our project with the mindset of building to learn. We are going to prototype experiences, leveraging the ideas from our storyboards that resonated the most and going beyond in order to learn how people really feel and behave in these scenarios and how potential solutions can foster new social interactions. To give you a taste of what’s to come, here are three ideas our team is excited about!</p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={drawOnSeats} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${drawOnSeats500} 500w, ${drawOnSeats} 908w`} alt="" className="article-image" />
                <p className="article-body-text caption">Fostering play using the physical surroundings of the car<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack">
                <img src={intercar} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${intercar500} 500w, ${intercar800} 800w, ${intercar} 1002w`} alt="" className="article-image" />
                <p className="article-body-text caption">Developing destination-based activities that create new in-car and cross-car connections<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-18 w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="column-25 w-col w-col-4 w-col-stack">
                <img src={cui} loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 32vw, 33vw" srcSet={`${cui500} 500w, ${cui800} 800w, ${cui} 824w`} alt="" className="article-image" />
                <p className="article-body-text caption">Exploring conversational agents and immersive sound systems to engage the whole car together<br /></p>
              </div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
            <div className="columns-8 w-row">
              <div className="w-col w-col-1 w-col-stack"></div>
              <div className="column-15 w-col w-col-4 w-col-stack">
                <p className="article-body-text">So...Are we there yet? Not yet, but we learned it’s not about the destination...it’s about the meaningful connections we make on the journey!<br /></p>
              </div>
              <div className="w-col w-col-2 w-col-stack"></div>
              <div className="w-col w-col-4 w-col-stack"></div>
              <div className="w-col w-col-1 w-col-stack"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }