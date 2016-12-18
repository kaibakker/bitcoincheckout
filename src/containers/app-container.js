import React, { Component, PropTypes } from "react";
import { browserHistory, Router } from "react-router";
import ReactGA from 'react-ga';


function fireTracking() {
    if (__PROD__) {
        ReactGA.pageview(window.location.pathname);
    }
}

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  };

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
        <div style={{ height: '100%' }}>
            <Router onUpdate={fireTracking} history={browserHistory} children={routes} />
        </div>
    )
  }
}

export default AppContainer;