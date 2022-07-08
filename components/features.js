import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'

const Features = (props) => {
  return (
    <>
      <div className="features-features">
        <div className="features-banner">
          <h1 className="features-text">{props.heading}</h1>
        </div>
        <span className="features-text1">
          <span className="features-text2">I am a geek.</span>
          <span className="features-text3">
            {' '}
            That said, I am not an expert developer. My coding skills lean more
            towards novice than professional. This page is an experiment to see
            if I can make a site with tools provided online and publish it on
            the IC. If I am successful this page will be expanded to include
            guides, videos, and/or other experiences that I encounter while
            interacting with the IC&apos;s various platforms. I am already
            inspired by the community and look forward to digging in deeper.
            Thanks for visiting!
          </span>
        </span>
        <div className="features-features1">
          <FeatureCard title="Placeholder"></FeatureCard>
          <FeatureCard
            title="Placeholder"
            image_src="/playground_assets/02.svg"
          ></FeatureCard>
          <FeatureCard
            title="Placeholder"
            image_src="/playground_assets/03.svg"
          ></FeatureCard>
          <FeatureCard
            title="Placeholder"
            image_src="/playground_assets/04.svg"
          ></FeatureCard>
          <FeatureCard
            title="Placeholder"
            image_src="/playground_assets/05.svg"
          ></FeatureCard>
          <FeatureCard
            title="Placeholder"
            image_src="/playground_assets/06.svg"
          ></FeatureCard>
        </div>
      </div>
      <style jsx>
        {`
          .features-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .features-banner {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .features-text {
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 800;
          }
          .features-text1 {
            font-size: 18px;
            font-family: Merriweather;
          }
          .features-text2 {
            font-style: normal;
            text-align: left;
            font-weight: 800;
          }
          .features-text3 {
            font-style: normal;
            font-weight: 800;
          }
          .features-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .features-banner {
              padding: 32px;
            }
            .features-text {
              font-style: normal;
              font-family: Merriweather;
              font-weight: 800;
            }
            .features-text1 {
              font-size: 18px;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 800;
            }
          }
          @media (max-width: 767px) {
            .features-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .features-banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  heading: 'Welcome!',
}

Features.propTypes = {
  heading: PropTypes.string,
}

export default Features
