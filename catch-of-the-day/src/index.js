import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.css'


if (module.hot) {
  module.hot.accept();
}
render(<Router />, document.querySelector('#main'));
