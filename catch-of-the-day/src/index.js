import React from 'react';
import { render } from 'react-dom';
import StorePicker  from './components/StorePicker';
import App from './components/App';
import './css/style.css'


if (module.hot) {
  module.hot.accept();
}
render(<App />, document.querySelector('#main'));
