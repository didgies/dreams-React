import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'
import './features.css'

const Features = (props) => {
  return (
    <div className="features-features">
      <div className="features-banner">
        <h1 className="features-text">{props.heading}</h1>
      </div>
      <span className="features-text1">
        <span className="features-text2">I am a geek.</span>
        <span className="features-text3">
          {' '}
          That said, I am not an expert developer. My coding skills lean more
          towards novice than professional. This page is an experiment to see if
          I can make a site with tools provided online and publish it on the IC.
          If I am successful this page will be expanded to include guides,
          videos, and/or other experiences that I encounter while interacting
          with the IC&apos;s various platforms. I am already inspired by the
          community and look forward to digging in deeper. Thanks for visiting!
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
  )
}

Features.defaultProps = {
  heading: 'Welcome!',
}

Features.propTypes = {
  heading: PropTypes.string,
}

export default Features
