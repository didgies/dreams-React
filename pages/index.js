import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>dreams</title>
          <meta property="og:title" content="dreams" />
          <meta
            property="og:description"
            content="An experiment in publishing a Web3 website on the Internet Computer blockchain."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7c6f15fa-4a39-43df-bf64-1ec8ab327247/0bba146e-d50b-4c5f-87b0-4c34063f9f2a?org_if_sml=1"
          />
        </Head>
        <div data-role="Header" className="home-header-container">
          <header className="home-header">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/dream-200w.png"
                className="home-image"
              />
              <span className="home-text">
                <span>dreams</span>
              </span>
            </div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo1">
                <img
                  alt="image"
                  src="/playground_assets/logotype-dark.svg"
                  className="home-image1"
                />
              </div>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <span className="home-text02">About</span>
              <span className="home-text03">Products</span>
              <span className="home-text04">Pricing</span>
              <span className="home-text05">Blog</span>
              <span className="home-text06">Jobs</span>
              <span className="home-text07">More</span>
            </div>
            <div className="home-bot">
              <div className="home-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <div className="home-container2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-container3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon07"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <div className="home-container4">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <div className="home-container5">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="home-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="home-right"
          />
        </div>
        <div className="home-features">
          <div className="home-banner">
            <h1 className="home-text08">Welcome!</h1>
          </div>
          <span className="home-text09">
            <span className="home-text10">I&apos;m a geek but</span>
            <span className="home-text11">
              {' '}
              I&apos;m not an expert developer. My coding skills lean more
              toward novice than professional. This page is an experiment in
              making a site with tools provided online and publish it on the IC.
              If I am successful I will expand upon the page to include guides,
              videos, and/or other experiences that I encounter while
              interacting with the IC&apos;s various platforms. I am already
              inspired by the community and look forward to digging in deeper.
              Thanks for visiting!
            </span>
          </span>
          <div className="home-features1">
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
        <div className="home-testimonials">
          <div className="home-container6">
            <div className="home-container7">
              <img
                alt="image"
                src="/playground_assets/quote-mark.svg"
                className="home-image2"
              />
              <h1 className="home-text12 headline2">
                Inspiring posts from social media...
              </h1>
            </div>
          </div>
          <span className="home-text13">...COMING SOON</span>
        </div>
        <div className="home-footer">
          <footer className="home-container8">
            <div className="home-divider"></div>
            <a
              href="https://6hsbt-vqaaa-aaaaf-aaafq-cai.ic0.app/#/ybpbu-zqaaa-aaaaf-akrga-cai/?code=rjuplDAHJfc="
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <img
                alt="image"
                src="/playground_assets/open-200h.png"
                className="home-image3"
              />
            </a>
            <a
              href="https://6hsbt-vqaaa-aaaaf-aaafq-cai.ic0.app/#/ybpbu-zqaaa-aaaaf-akrga-cai/?code=rjuplDAHJfc="
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <span className="home-text14">dreams.icp</span>
              <br></br>
              <span className="home-text16">OpenChat</span>
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-text {
            color: #2ec5ce;
            font-size: 32px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon03 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text05 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text07 {
            transition: 0.3s;
          }
          .home-text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-container2 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon05 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon05:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link1 {
            display: contents;
          }
          .home-container3 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon07:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link2 {
            display: contents;
          }
          .home-container4 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon09:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link3 {
            display: contents;
          }
          .home-container5 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon11:hover {
            fill: var(--dl-color-orange-default);
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #f2f2f2;
          }
          .home-turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .home-purple-circle {
            top: -100px;
            left: auto;
            right: -26px;
            width: 400px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
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
          .home-banner {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text08 {
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 800;
          }
          .home-text09 {
            font-size: 18px;
            font-family: Merriweather;
          }
          .home-text10 {
            font-style: normal;
            text-align: left;
            font-weight: 800;
          }
          .home-text11 {
            font-style: normal;
            font-weight: 800;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
            background-color: var(--dl-color-turquoise-100);
          }
          .home-container6 {
            display: flex;
            flex-wrap: wrap;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container7 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image2 {
            top: -22px;
            left: -65px;
            right: auto;
            width: 100px;
            bottom: auto;
            z-index: 10;
            position: absolute;
            object-fit: cover;
          }
          .home-text12 {
            z-index: 100;
            max-width: 500px;
          }
          .home-text13 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            padding-top: 10rem;
          }
          .home-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container8 {
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
          .home-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .home-link4 {
            display: contents;
          }
          .home-image3 {
            width: 100px;
            object-fit: cover;
            padding-top: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link5 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-family: Exo 2;
            font-weight: 700;
            text-decoration: none;
          }
          .home-text14 {
            font-style: normal;
            font-family: Exo 2;
            font-weight: 700;
          }
          .home-text16 {
            font-style: normal;
            font-family: Exo 2;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .home-logo {
              width: auto;
            }
            .home-text {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
            }
            .home-banner {
              padding: 32px;
            }
            .home-text08 {
              font-style: normal;
              font-family: Merriweather;
              font-weight: 800;
            }
            .home-text09 {
              font-size: 18px;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 800;
            }
            .home-testimonials {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-text13 {
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              padding-top: 10rem;
            }
            .home-image3 {
              padding-top: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 991px) {
            .home-text {
              text-align: center;
            }
            .home-container6 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-text {
              text-align: center;
            }
            .home-burger-menu {
              display: block;
            }
            .home-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-container7 {
              align-items: center;
            }
            .home-image2 {
              top: -2px;
              left: 21px;
              right: auto;
              width: 50px;
              bottom: auto;
            }
            .home-text12 {
              font-size: 40px;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-text {
              text-align: center;
            }
            .home-bot {
              width: 100%;
            }
            .home-banner {
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

export default Home
