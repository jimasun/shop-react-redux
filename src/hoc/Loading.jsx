import React, { Component } from 'react'

import './Loading.css'

const defaultState = {
  loading: true,
  fullScreen: false,
  text: 'loading...',
  error: false
}

const withLoading = (WrappedComponent, options = defaultState) => {
  class WithLoading extends Component {
    constructor(props) {
      super(props)
      this.state = options
    }

    shouldComponentUpdate(nextProps, nextState) {
      // this.props.loading
      // ? startLoading()
      // : stopLoading()
      return true
    }

    componentDidUpdate(prevProps, prevState) {
      this.props.loading
      ? this.startLoading()
      : this.stopLoading()
    }

    startLoading() {
      document.querySelector('.Loading').classList.toggle('active', true)
    }

    stopLoading() {
      document.querySelector('.Loading').classList.toggle('active', false)
    }

    render() {
      return (
        <div>
          <div className="Loading">
            <div className="indicator" />
          </div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  WithLoading.displayName = `${getDisplayName(WrappedComponent)}WithLoading`;
  return WithLoading;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLoading