import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../bootstrap/bootstrap.min.css';
import '../bootstrap/bootstrap.min.js';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app'));
});