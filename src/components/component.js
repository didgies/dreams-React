import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <footer className="component-container">
      <div className="component-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component-image"
        />
      </div>
      <div className="component-container2">
        <span className="component-text">{props.text}</span>
        <span className="component-text1">{props.text1}</span>
        <span className="component-text2">{props.text2}</span>
        <span className="component-text3">{props.text3}</span>
        <span className="component-text4">{props.text4}</span>
        <span className="component-text5">{props.text5}</span>
      </div>
      <div className="component-divider"></div>
    </footer>
  )
}

AppComponent.defaultProps = {
  text2: 'Placeholder',
  image_src: '/playground_assets/dream-200w.png',
  text4: 'Placeholder',
  text5: 'Placeholder',
  text3: 'Placeholder',
  image_alt: 'image',
  text: 'Placeholder',
  text1: 'Placeholder',
}

AppComponent.propTypes = {
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
