import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPage from './pages/IndexPage.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
