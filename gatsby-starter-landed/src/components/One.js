import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import iso1 from '../assets/images/omar/iso1.png'
import design1 from '../assets/images/omar/design1.png'
import design2 from '../assets/images/omar/design2.png'
import design3 from '../assets/images/omar/design3.png'

import {Link as ScrollLink} from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
    <section
        id="one"
        className="spotlight style1 bottom inactive"
        style={{backgroundImage: `url(${iso1})`}}
    >
        <span className="image fit main">
            <img src={iso1} alt=""/>
        </span>
        <Fade bottom big>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <header>
                                <h2 className="pretty_title">My Skills
                                    <sup style={{color: 'orange'}}>(soft and pro)</sup>
                                </h2>
                                <p>
                                    I worked as <strong>Projectionist</strong> at <sup><strong>Cinemex</strong></sup> and learned a bunch of  side-server Linux maintenance
                                    <br/>
                                    <br/>
                                    At <sup><strong>1devteam</strong></sup> I learned more <strong>Fullstack and Rest</strong> dev for customer projects. <br/><br/> Currently a GNU/Linux User {'\u2728'}
                                </p>
                            </header>
                        </div>
                        <div className="col-4 col-12-medium">
                                <p>
                                    <img src={design1} alt=""/><img src={design3} alt=""/>
                                    <strong>
                                        <li>I can develop Mobile Apps</li>
                                        <ul>
                                            <li>Kotlin and Java <sup>MVP / Navigation Drawer</sup></li>
                                            <li>Maps API, Directions API and Map Cluster</li>
                                        </ul>

                                        <li>I can design</li>
                                        <ul>
                                            <li>Promotional stuff with Inkscape</li>
                                            <li>Web/Mobile mock-ups with Figma</li>
                                        </ul>
                                    </strong>
                                </p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <img src={design2} alt=""/>
                            <strong>
                                <ul>
                                    <li>I can create/test RestApis</li>
                                    <ul>
                                        <li>Postman <sup>for test</sup>, Laravel <sup>for BackEnd</sup></li>
                                        <li>Apache and NodeJS (Firebase) deployment</li>
                                        <li>AWS PostgreSQL, MariaDB and FireStore</li>
                                    </ul>

                                    <li>I can develop Web Apps</li>
                                    <ul>
                                        <li>Laravel for Fullstack (MVC with LiveWire)</li>
                                        <li>ReactJS for Front-End</li>
                                    </ul>
                                </ul>
                            </strong>

                        </div>
                    </div>
                </div>
            </div>
        </Fade>
        <ScrollLink
            to="two"
            className="goto-next"
            activeClass="active"
            smooth={true}
            offset={50}
            duration={1500}
            spy={true}
        >
            Next
        </ScrollLink>
    </section>
)
export default One
