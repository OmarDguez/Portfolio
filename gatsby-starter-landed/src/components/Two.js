import React from 'react'
import pic03 from '../assets/images/omar/iso2.png'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2 className="pretty_title">I want to travel</h2>
          <p>I love Luis Miguel's songs, but Iron Maiden, The Beattles and Rammstein's as well</p>
        </header>
        <p>
          <strong>That's why I want to know what's in Europe and have a different lifestyle. I can speak fluent English (B2 cert in progress) and I'm German A1 level.</strong>
        </p>

      </div>
    </Fade>
    <ScrollLink
      to="three"
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

export default Two
