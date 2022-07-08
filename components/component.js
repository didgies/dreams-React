import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .component-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .component-image {
            width: 100px;
            object-fit: cover;
          }
          .component-container2 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .component-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .component-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-text1 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .component-text1:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-text2 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .component-text2:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-text3 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .component-text3:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-text4 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .component-text4:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-text5 {
            transition: 0.3s;
            white-space: nowrap;
          }
          .component-text5:hover {
            color: var(--dl-color-turquoise-default);
          }
          .component-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 1200px) {
            .component-text {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .component-text1 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .component-text2 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .component-text3 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .component-text4 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .component-text5 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 767px) {
            .component-container2 {
              flex-wrap: wrap;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
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
