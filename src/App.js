import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import Header from './components/header'
import Footer from './components/footer'
import NoMatch from './components/nomatch'
import routes from './routes'
import './icons'

ReactGA.initialize('UA-101609250-1')

//Dummy router component to send pageviews to GA

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  return null
}

const App = () => (
  <Router>
    <>
      <Helmet titleTemplate={`Daniel Nass | %s`} />
      <Route component={logPageView} />
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </>
  </Router>
)

export default App
