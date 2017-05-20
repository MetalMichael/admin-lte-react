import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './App.jsx'
import Index from './components/Index.jsx'

if (module.hot) module.hot.accept()



ReactDOM.render(
    <Router key={Math.random()} history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
        </Route>
    </Router>
, document.getElementById('app'));
