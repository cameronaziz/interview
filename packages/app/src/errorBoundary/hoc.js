import React, { Component } from 'react';
import DidCatch from './didCatch';

export function errorBoundary(OriginalReactComponent) {
  return class extends Component {
    render() {
      return (
        <DidCatch>
          <OriginalReactComponent {...this.props} />
        </DidCatch>
      );
    };
  };
};

export default errorBoundary;
