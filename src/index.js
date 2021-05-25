import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GridText from './components/gridText';
import PrintsButton from './components/PrintsButton'
import FAQ from './components/FAQ'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/prints">
          <PrintsButton />
          <GridText />
          <FAQ />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();