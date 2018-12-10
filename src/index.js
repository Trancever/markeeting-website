import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './index.css';
import App from './App';

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
