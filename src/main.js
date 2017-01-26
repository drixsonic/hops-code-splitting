import React, { createClass, PropTypes } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import App from './app';
import { render } from 'hops';

const routes = {
  path: '/',
  component: App,

  getIndexRoute(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, {
        component: require('./home')
      })
    })
  }
};

export default render({ routes });
