import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, HowItWorks, Home} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest)
    return React.createElement(component, finalProps)
  }

  PropsRoute = ({component, ...rest}) => {
    return (
      <Route
        {...rest}
        render={routeProps => {
          return this.renderMergedProps(component, routeProps, rest)
        }}
      />
    )
  }

  render() {
    const {isLoggedIn} = this.props
    const PropsRoute = this.PropsRoute

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <PropsRoute path="/login" component={Login} />
        <PropsRoute path="/signup" component={Signup} />
        <PropsRoute
          path="/how-it-works"
          component={HowItWorks}
          navHeight={this.props.navHeight}
        />
        <PropsRoute path="/home" component={Home} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <PropsRoute path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <PropsRoute component={Home} navHeight={this.props.navHeight} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
