import React from 'react'

import PropTypes from 'prop-types'

import './header1.css'

const Header1 = (props) => {
  return (
    <header className="header1-header">
      <div className="header1-logo">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header1-image"
        />
        <span className="header1-text">
          <span>dreams.icp</span>
          <span className="header1-text2">&amp;#8203;</span>
        </span>
      </div>
      <div className="header1-menu">
        <span className="header1-text3">{props.text}</span>
        <span className="header1-text4">{props.text1}</span>
        <span className="header1-text5">{props.text2}</span>
        <span className="header1-text6">{props.text3}</span>
        <svg viewBox="0 0 1024 1024" className="header1-icon">
          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
      </div>
      <div data-type="BurgerMenu" className="header1-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header1-menu1">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
    </header>
  )
}

Header1.defaultProps = {
  image_src: '/playground_assets/dream-200w.png',
  text1: 'placeholder',
  image_alt: 'image',
  text: 'placeholder',
  text3: 'placeholder',
  text2: 'placeholder',
}

Header1.propTypes = {
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default Header1
