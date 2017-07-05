import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import Header from './components/header'
import Footer from './components/footer'
import NoMatch from './components/nomatch'
import routes from './routes'

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
      <Helmet titleTemplate={`Daniel Nass | %s`}>
      </Helmet>
      <Route component={logPageView}/>
      <Header/>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Route component={NoMatch}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App
