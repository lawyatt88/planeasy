import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {css} from 'glamor'
import {Button, Carousel} from 'react-bootstrap'
import ProjectCard from './projectCard'
import {Col, Row} from '../StyledComponents/createCustomComponent'
import Photostack from './photostack'

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

const leftPara = css({
  fontSize: `18px;`,
  paddingTop: `1.75em`,
  marginBottom: '0',
  fontFamily: 'Assistant',
  lineHeight: `1.75`
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

const imagesWrapper = css({
  padding: '5%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
})

const imageStacks = [
  {
    imgUrl: '/images/porscha6.jpg',
    rotateImg: '3',
    margin: '20px',
    background: {rotate: '3'},
    width: '200px',
    height: '130px'
  },
  {
    imgUrl: '/images/porscha4.jpg',
    rotateImg: '-3',
    margin: '20px',
    background: {rotate: '3'},
    width: '150px',
    height: '170px'
  },
  {
    imgUrl: '/images/porscha3.jpg',
    rotateImg: '3',
    margin: '20px',
    background: {rotate: '3'},
    width: '150px',
    height: '150px'
  },
  {
    imgUrl: '/images/porscha2.jpg',
    rotateImg: '-3',
    margin: '20px',
    background: {rotate: '-3'},
    width: '200px',
    height: '130px'
  },
  {
    imgUrl: '/images/porscha.jpg',
    rotateImg: '3',
    margin: '20px',
    background: {rotate: '-3'},
    width: '150px',
    height: '180px'
  }
]
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
        <Row className="section contact row d-flex align-items-stretch">
          <Row
            style={{
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Col
              className="founder-img"
              md={4}
              mdOffset={1}
              sm={4}
              smOffset={1}
            >
              <img src="/images/porscha5.jpg" />
            </Col>
            <Col md={6} sm={6}>
              <h4 className="subheading">meet our founder</h4>
              <h1 className="heading">A Message From Porcsha Daniels</h1>
              <h4 className="subheading">
                attorney, travel aficionado, foodie
              </h4>
              <p className={leftPara}>
                <b>
                  Plan Easy was founded out of a passion for world travel and a
                  vision to provide travelers with a customized hassle free
                  travel experience.
                </b>
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure
                dolovelit esse molestie consequat, vel illum dolore eu feugiat.
              </p>
            </Col>
          </Row>
          <Col className={imagesWrapper} md={12}>
            {imageStacks.map(stackProps => <Photostack {...stackProps} />)}
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home
