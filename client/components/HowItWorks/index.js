import React from 'react'
import {css} from 'glamor'
import {Tabs, Tab, Nav, NavItem} from 'react-bootstrap'
import {Row, Col} from '../StyledComponents/createCustomComponent'

const divClassName = css({
  padding: '12px',
  textAlign: 'center'
})

const heading = css({
  fontWeight: 400,
  margin: '20px auto',
  textAlign: 'center'
})

const number = css({
  border: '2px solid white',
  textAlign: 'center',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  margin: '20px auto',
  lineHeight: '36px',
  fontSize: '1.25em'
})

const numberProgress = css({backgroundColor: 'white', color: '#337ab7'})

const sectionClassName = css({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  margin: 'auto',
  backgroundColor: '#99C5D1'
})

const title = css({
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '0px',
  marginTop: '0'
})

const steps = [
  {
    id: 'questionnaaire',
    caption: 'Tell us about your trip',
    details:
      'Questionnaire-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'plan',
    caption: 'We plan and book it!',
    details:
      'Plan-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'enjoy',
    caption: 'You show up and enjoy!',
    details:
      'Enjoy-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

class HowItWorks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: steps[0].id
    }
  }

  handleSelect = key => {
    this.setState({key})
  }

  getProgressStyle = i => {
    const idx = steps.findIndex(step => step.id === this.state.key)
    return i <= idx ? numberProgress.toString() : {}
  }

  render() {
    const container = css({
      background: `url('/images/female-leisure-parasol-1154638.jpg') no-repeat center`,
      backgroundSize: 'cover',
      height: `calc(100vh - ${this.props.navHeight}px)`,
      overflowY: 'scroll',
      display: 'flex',
      alignItems: 'center'
    })

    return (
      <Row className={container}>
        <Tab.Container
          id="how-it-works-tabs"
          activeKey={this.state.key}
          onSelect={this.handleSelect}
        >
          <Col
            className={sectionClassName}
            sm={10}
            smOffset={1}
            md={8}
            mdOffset={2}
          >
            <h1 className={title}>How It Works</h1>
            <h4 style={{paddingBottom: '20px', textAlign: 'center'}}>
              We do the hard stuff so you don't have to.
            </h4>
            <Col>
              <Nav bsStyle="pills">
                {steps.map((step, i) => (
                  <NavItem key={step.id} eventKey={step.id}>
                    <Col
                      sm={12}
                      md={4}
                      className={`${divClassName} card-wrapper`}
                    >
                      <span>
                        <div
                          className={`${number} ${this.getProgressStyle(i)}`}
                        >
                          {i + 1}
                        </div>
                      </span>
                    </Col>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col>
              <Tab.Content animation>
                {steps.map((step, i) => (
                  <Tab.Pane key={step.id} eventKey={step.id}>
                    <h3 className={heading}>{step.caption}</h3>
                    <h4 className="details">{step.details}</h4>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Col>
        </Tab.Container>
      </Row>
    )
  }
}

export default HowItWorks
