import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
