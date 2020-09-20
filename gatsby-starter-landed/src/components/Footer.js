import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/omardguez/" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/smgstm/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/OmarDguez" className="icon brands alt fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Omar Dominguez. All rights reserved.</li>

    </ul>
  </footer>
)

export default Footer
