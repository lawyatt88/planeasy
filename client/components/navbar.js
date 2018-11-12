import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {logout} from '../store'

class MainNav extends React.Component {
  render() {
    const {handleClick, isLoggedIn} = this.props
    return (
      <div
        ref={this.props.refCallback}
        style={{
          position: 'absolute',
          width: '100vw',
          backgroundColor: 'white',
          zIndex: 10
        }}
      >
        <Navbar fluid fixedTop className="navbar-light bg-light">
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="navbar-brand" to="/home">
                <img alt="PlanEasy" src="./images/planeasyAsset 1.png" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} href="/how-it-works">
                How It Works
              </NavItem>
              <NavItem eventKey={3} href="/featured-trips">
                Featured Trips
              </NavItem>
            </Nav>
            <Nav pullRight>
              {isLoggedIn && (
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              )}
              <NavItem eventKey={4} href="/contact">
                Contact
              </NavItem>
              <NavItem eventKey={5} href="/login">
                Sign In
              </NavItem>
              <NavItem eventKey={6} href="/">
                Plan My Trip
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(MainNav)

/**
 * PROP TYPES
 */
MainNav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
