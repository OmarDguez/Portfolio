import React from 'react'
import pic01 from '../assets/images/omar/profile.png'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <div className="typewriter row">
          <h2 className="pretty_title">Wilkommen,<br/>Welcome </h2>
        </div>
        <p>
          This is my {'\u2728'} <strong>little internet space</strong> {'\u2728'} so...
          <br />
          Enjoy discovering about me, work stuff and goals {'\u270b'} .
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
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

export default Banner
