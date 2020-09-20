import React from 'react'
import Fade from 'react-reveal/Fade'
import demo1 from '../assets/images/omar/demo1.png'
import demo2 from '../assets/images/omar/demo2.png'
import demo3 from '../assets/images/omar/demo3.png'
import demo4 from '../assets/images/omar/demo4.png'
import demo5 from '../assets/images/omar/demo5.png'
import iso1 from "../assets/images/omar/iso1.png";


const Four = props => (
    <Fade up>
        <section id="four" className="wrapper style1 special fade-up">
            <div className="container">
                <header className="major">
                    <h2 className="pretty_title">My Best Projects {'\u2728'}{'\u2728'}</h2>
                    <p>
                        Most of them are privated, but the public ones.... mmmmmm, delicius ones!
                    </p>
                </header>
                <div className="box alt">
                    <div className="row gtr-uniform">
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <img src={demo1} alt="demo1"/>
                            <h3>Insumos System
                                <sup>beta</sup>
                            </h3>
                            <p>
                                3 Components, 1 System.
                                Laravel powers the web application for isolated "super-users" administration, while
                                Kotlin/Android delivers to end-users donation/injuried petitions for supplies.
                            </p>
                            <br/>
                            <a target="_blank"
                               href="https://itescoinsumos.com/"
                               className="button">
                                Check it out
                            </a>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <img src={demo2} alt="demo2"/>
                            <h3>MasParaMujeresApp
                                <sup>concept</sup>
                            </h3>
                            <p>
                                Clustered "caution" points for
                                protecting woman against violence documented places
                                in newspapers and creating an optimal route.
                            </p>
                            <br/>
                            <a target="_blank"
                               href="https://mx.socialab.com/challenges/Hackaton_mujeres_ninas_post_COVID_19/idea/118373"
                               className="button">
                                Check it out
                            </a>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <img src={demo3} alt="demo3"/>
                            <h3>Repositorio Institucional
                                <sup>beta</sup>
                            </h3>
                            <p>
                                Using Google Drive API, we help teachers to create a institutional repository of
                                important documents.
                                Powered by Laravel and Nao FlySystem.
                            </p>
                            <br/>
                            <a target="_blank"
                               href="https://itesco.info/"
                               className="button">
                                Check it out
                            </a>


                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <img src={demo4} alt="demo4"/>
                            <h3>Navida
                                <sup>chatbot/design</sup>
                            </h3>
                            <p>
                                I support my team, a group of young and strong girls to develop the design/chatbot and
                                deliver logistic of natural products based in special plants of our local region called
                                Pajapan.
                                Winners of Regional ENEIT 2019 contest.
                            </p>
                            <br/>
                            <a target="_blank"
                               href="https://www.facebook.com/navida.mx"
                               className="button">
                                Check it out
                            </a>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <img src={demo5} alt="demo5"/>
                            <h3>Medicina Cultural
                                <sup>artwork</sup>
                            </h3>
                            <p>
                                Winner of Infomatrix Continental 2018, I use special artwork
                                embedded with my culture, hearth and imagination to display
                                awesome posters and pictures. <br/> I used Adobe CC, mostly Photoshop.
                            </p>
                            <br/>
                            <a target="_blank"
                               href="https://www.behance.net/gallery/51876413/Idea-Art-with-Patterns-Objective-knowledge"
                               className="button">
                                Check it out
                            </a>
                        </section>
                    </div>
                </div>
                <footer className="major">
                    <ul className="actions special">
                        <li>
                            <a target="_blank" href="https://www.behance.net/omar_dominguez" className="button">
                                Adobe Portfolio
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </section>
    </Fade>
)

export default Four
