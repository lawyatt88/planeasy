import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {css} from 'glamor'
import ProjectCard from './projectCard'
import {Col, Row} from '../StyledComponents/createCustomComponent'
import {Button, Carousel} from 'react-bootstrap'

const arrow = css({
  paddingLeft: '0 !important'
})

const whyUs = css({
  background: `url('/images/planeasyArtboard 6.png') no-repeat center`,
  backgroundSize: `cover`,
  display: `flex`,
  alignItems: 'stretch'
})

const infoBox = css({
  border: '3px solid #728699',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  padding: '5vw;',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center'
})

const para = css({
  fontSize: `18px;`,
  padding: `1.75em`,
  fontFamily: 'Assistant-light',
  textAlign: `center`,
  lineHeight: `1.75;`
})

const testimonials = css({
  background: `url('/images/planeasyArtboard 8.png') no-repeat center`,
  backgroundSize: `cover`,
  display: `flex;`,
  alignItems: 'stretch',
  flexDirection: 'column',
  color: '#ffffff'
})

const carouselItem = css({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
})

const carItemWrapper = css({
  padding: '5% 8%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
})

const detailCard = css({
  background: `linear-gradient(
    rgba(255, 255, 255, 0.45), 
    rgba(255, 255, 255, 0.45)
  ), url('/images/free-vector-watercolor-paper-texture.jpg') no-repeat center`,
  backgroundSize: `cover`,
  width: '400px',
  color: '#728699',
  minHeight: '300px',
  padding: '10px',
  display: 'flex',
  alignItems: 'stretch',
  alignContent: 'space-between',
  margin: '20px',
  boxShadow: `5px 3px 10px rgba(0, 0, 0, .8)`
})

const detailCardInner = css({
  borderTop: '3px solid #728699',
  borderBottom: '3px solid #728699',
  flexGrow: 1
})

const quote = css({
  padding: '0 30px',
  fontFamily: 'Oswald-light',
  display: 'flex',
  alignItems: 'flex-start',
  fontSize: '20px'
})

const quotation = css({
  fontSize: '100px',
  fontFamily: 'Assistant-light',
  width: 'fit-content',
  marginTop: 0
})
/**
 * sections: hero, about, testimonies/trip pics, what you get>sample, meet Porscha,
 */

class Home extends Component {
  scrollToFeatured = evt => {
    this.refs.featured.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  render() {
    return (
      <div>
        <div
          id="banner"
          name="banner"
          className="banner row flex align-items-stretch"
        >
          <div className="banner-text col-12">
            <Col className={arrow.toString()} xs={12} sm={9} md={6}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 670.14 68.25"
                className="banner-arrow"
              >
                <defs>
                  {/* <style>
                    {`.cls-1 { fill:none;stroke:#99d6d7;stroke-miterlimit:10;stroke-width:2px;}`}
                    {`.cls-2{fill:#99d6d7;}`}
                  </style> */}
                </defs>
                <title>planeasyAsset 1sign-arrow</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Home_Screen" data-name="Home Screen">
                    <g id="Marquee">
                      <text
                        className="cls-3"
                        transform="translate(70.75 47.43)"
                      >
                        CURATED TRIP PLANNING TO MAKE TRAVEL EASY
                        <style
                          dangerouslySetInnerHTML={{
                            __html: `.cls-3{font-size:30px;fill:#146789;font-family:Oswald-Light, Oswald;`
                          }}
                        />
                      </text>
                      <polyline
                        className="cls-1"
                        points="0 67.25 642.45 67.25 666.13 34.13 642.45 1 0 1"
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
      .cls-1 { fill:none;stroke:#99d6d7;stroke-miterlimit:10;stroke-width:2px;
    `
                          }}
                        />
                      </polyline>
                      <rect
                        className="cls-2"
                        x="662.14"
                        y="29.62"
                        width="8"
                        height="8"
                        rx="3.56"
                        ry="3.56"
                      >
                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
      .cls-2{fill:#99d6d7;}
    `
                          }}
                        />
                      </rect>
                    </g>
                  </g>
                </g>
              </svg>
            </Col>
          </div>
          {/* <div
            id="arrow-wrapper"
            className="col-12 d-flex flex-column align-items-center mt-auto p-2"
          >
            <h4>Check out my work!</h4>
            <div className="arrow bounce" onClick={this.scrollToFeatured} />
          </div> */}
        </div>
        <Row
          id="why-choose-us"
          ref="why"
          className={`section ${whyUs} d-flex align-items-stretch`}
        >
          <Col
            className={infoBox}
            xs={12}
            sm={10}
            smOffset={1}
            md={6}
            mdOffset={3}
          >
            <h1 className="title">why choose us?</h1>
            <h3 className="subtitle">
              We handle as much or as little as you need
            </h3>
            <p className={para}>
              From booking your flights and accommodations, to setting up tours
              and excursions, or simply providing dinner recommendations, when
              it comes to planning your dream trip, there’s no task too big or
              small.
            </p>
            <div className="image-container">
              <img src="/images/why_1.svg" />
              <img src="/images/why_2.svg" />
              <img src="/images/why_3.svg" />
            </div>
            <Button href="/how-it-works">Learn How It Works</Button>
          </Col>
        </Row>
        <Row className={`section ${testimonials} testimonials`}>
          <h1 className="title">what our clients are saying</h1>
          <Carousel>
            <Carousel.Item className={carouselItem}>
              <Col className={carItemWrapper}>
                <Col className={detailCard} md={4}>
                  <Col className={detailCardInner}>
                    <h2 className="title">a week in maui</h2>
                    <div className={quote}>
                      <h1 className={quotation}>“</h1>
                      <p style={{marginTop: '35px'}}>
                        Stellar service! I’ll definitely be using this service
                        again and enthusiastically recommend it to anyone
                        considering it. Thanks for an amazing trip! - Jamie Lee
                      </p>
                    </div>
                  </Col>
                </Col>
                <div className="stackone">
                  {/* <img
                    style={{maxWidth: 450, height: 'auto'}}
                    alt="900x500"
                    src="/images/adventure-boy-camping-450441.jpg"
                  /> */}
                  <div
                    style={{
                      width: '450px',
                      height: '300px',
                      background: `url('/images/adventure-boy-camping-450441.jpg') no-repeat center`,
                      backgroundSize: `cover`
                    }}
                  />
                </div>
              </Col>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
          <Button href="/featured-trips">View Featured Trips</Button>
        </Row>
        <div className="section contact row d-flex align-items-stretch">
          <div className="col-12 col-md-5 contact-img" />
          <div className="col-12 col-md-5 col-md-offset-6 contact-content">
            <h5 />
            <ul className="list-inline social-icons">
              <li className="connect">Let's Connect!</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lemona-wyatt/"
                  target="_blank"
                >
                  <svg
                    className="svg-inline--fa fa-w-16"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="14 14 40 40"
                    enableBackground="new 14 14 40 40"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M45.225,43.425v-7.809c0-4.183-2.233-6.129-5.21-6.129c-2.403,0-3.48,1.322-4.08,2.249v-1.929h-4.527
                                    c0.061,1.278,0,13.618,0,13.618h4.527v-7.605c0-0.406,0.029-0.813,0.149-1.104c0.327-0.813,1.071-1.655,2.321-1.655
                                    c1.639,0,2.293,1.249,2.293,3.079v7.285H45.225L45.225,43.425z M26.639,27.948c1.578,0,2.562-1.046,2.562-2.354
                                    c-0.029-1.336-0.983-2.352-2.531-2.352s-2.561,1.016-2.561,2.352c0,1.307,0.982,2.354,2.502,2.354H26.639z M34,54
                                    c-11.045,0-20-8.954-20-20s8.955-20,20-20c11.046,0,20,8.954,20,20S45.046,54,34,54z M28.903,43.425V29.807h-4.526v13.618H28.903z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/lawyatt88" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/u/0/113298364825465357558"
                  target="_blank"
                >
                  <i className="fab fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
