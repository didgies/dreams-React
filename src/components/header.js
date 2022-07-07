import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <header className="header-header">
      <div className="header-logo">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
        <span className="header-text">
          <span>dreams.icp</span>
          <span className="header-text2">&amp;#8203;</span>
        </span>
      </div>
      <div className="header-menu">
        <span className="header-text3">{props.text}</span>
        <span className="header-text4">{props.text1}</span>
        <span className="header-text5">{props.text2}</span>
        <span className="header-text6">{props.text3}</span>
        <span className="header-text7">{props.text4}</span>
        <span className="header-text8">{props.text5}</span>
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
        </svg>
      </div>
      <div data-type="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-menu1">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text2: 'Pricing',
  text3: 'Blog',
  text: 'About',
  image_alt: 'image',
  image_src: '/playground_assets/dream-200w.png',
  text1: 'Products',
  text5: 'More',
  text4: 'Jobs',
}

Header.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
}

export default Header
