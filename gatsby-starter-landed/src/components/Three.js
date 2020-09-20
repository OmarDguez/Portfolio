import React from 'react'
import pic04 from '../assets/images/omar/backgroundd2.png'
import {Link as ScrollLink} from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
    <section
        id="three"
        className="spotlight style3 left inactive"
        style={{backgroundImage: `url(${pic04})`}}
    >
        <span className="image fit main bottom">
            <img src={pic04} alt=""/>
        </span>
        <Fade left big>
            <div className="content">
                <header>
                    <h2 className="pretty_title">Speaker and Competitions</h2>
                </header>
                <p>
                    <strong>
                        With my teams, we reach winner/qualifier places over innovation/hackathon contests like:
                        Infomatrix, ExpoCiencias, ENEIT, UNAM CANSAT and more.
                    </strong>
                </p>
                <p>Digital Publications to Check</p>
                <ul className="actions">
                    <li>
                        <a  target="_blank" href="https://www.tecnm.mx/?vista=noticia&id=560" className="button">
                            InsumosApp
                        </a>
                    </li>
                    <li>
                        <a  target="_blank" href="http://www.itmina.edu.mx/portal/?p=4730" className="button">
                            MoreForWomanApp
                        </a>
                    </li>
                </ul>

                <ul className="actions">
                    <li>
                        <a  target="_blank" href="http://dgest.gob.mx/ciencia-y-tecnologia/tecnm-fuerte-contendiente-con-satelites-enlatados-cansat-dp1" className="button">
                            Cansat Winners
                        </a>
                    </li>
                    <li>
                        <a  target="_blank" href="https://www.horizontedigital.com.mx/celebran-dia-del-internet-en-itesco-con-foro-la-sociedad-de-los-datos/" className="button">
                            InternetDay Talk
                        </a>
                    </li>
                </ul>

            </div>
        </Fade>
        <ScrollLink
            to="four"
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

export default Three
