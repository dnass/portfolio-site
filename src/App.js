import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import Header from './components/header'
import Footer from './components/footer'
import Links from './components/links'
import About from './components/about'
import NoMatch from './components/nomatch'

ReactGA.initialize('UA-101609250-1');

//Dummy router component to send pageviews to GA

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
  return null;
}

const App = () => (
  <Router>
    <div className='avenir mw8-l center-l mh5-m mh2'>
      <Route component={logPageView}/>
      <Header/>
      <Switch>
        <Route exact path="/" component={Links}/>
        <Route exact path="/about" component={About}/>
        <Route component={NoMatch}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App
