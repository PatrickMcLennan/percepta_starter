import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const ROOT = document.querySelector(`#ROOT`);

if (ROOT) ReactDOM.render(<App />, ROOT);
else console.error(`the ROOT element could not be found in the DOM`);