import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <Link to="/propos" className="nav-links-link navLink">
        {props.Link}
      </Link>
      <Link to="/portfolio" className="nav-links-link1 navLink">
        {props.Link1}
      </Link>
      <Link to="/contact" className="nav-links-link2 navLink">
        {props.Link2}
      </Link>
    </div>
  )
}

NavLinks.defaultProps = {
  Link1: 'portfolio',
  Link: 'à propos',
  Link2: 'contact',
}

NavLinks.propTypes = {
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
}

export default NavLinks
