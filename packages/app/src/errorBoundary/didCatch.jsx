import React, { Component } from 'react';
import './styles.css';
import ErrorUI from './ui';

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    const { error, errorInfo } = this.state;

    if (errorInfo) {
      return (
        <ErrorUI error={error} errorInfo={errorInfo} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
