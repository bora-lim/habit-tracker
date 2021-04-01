import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './app';

// import SimpleHabit from './components/simpleHabit';
import Example from './components/example'
import './app.css'
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);
