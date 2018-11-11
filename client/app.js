import React from 'react'

import {MainNav} from './components'
import Routes from './routes'

class App extends React.Component {
  state = {navSize: {}}

  componentDidMount() {
    this.doReportSize = true
  }

  componentDidUpdate() {
    if (this.doReportSize) {
      this.setNavSize(this.elementRef.getBoundingClientRect())
      console.log({
        ref: this.elementRef,
        size: this.elementRef.getBoundingClientRect()
      })
      this.doReportSize = false
    }
  }

  setNavSize = navSize => this.setState({navSize})

  refCallback = element => {
    if (element) {
      this.elementRef = element
      this.setNavSize(element.getBoundingClientRect())
    }
  }

  render() {
    const {navSize} = this.state
    return (
      <div>
        <MainNav refCallback={this.refCallback} />
        <div
          className="container-fluid"
          style={{paddingTop: this.state.navSize.height}}
        >
          <Routes navHeight={this.state.navSize.height} />
        </div>
      </div>
    )
  }
}

export default App
