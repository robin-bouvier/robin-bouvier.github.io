import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className={`testimonial-testimonial ${props.rootClassName} `}>
      <div className="testimonial-content">
        <img alt="image" src="/apostrophe.svg" className="testimonial-icon" />
        <span className="testimonial-text">{props.Quote}</span>
      </div>
      <div className="testimonial-author">
        <img alt="image" src={props.Avatar} className="testimonial-author1" />
        <div className="testimonial-details">
          <span className="testimonial-name">{props.Name}</span>
          <span className="testimonial-origin">{props.Origin}</span>
        </div>
      </div>
      <div className="testimonial-divider"></div>
    </div>
  )
}

Testimonial.defaultProps = {
  Avatar:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NTY3NDE5&ixlib=rb-4.0.3&w=200',
  Name: 'Joanna Smith',
  Quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  Origin: '@zeng',
  rootClassName: '',
}

Testimonial.propTypes = {
  Avatar: PropTypes.string,
  Name: PropTypes.string,
  Quote: PropTypes.string,
  Origin: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Testimonial
