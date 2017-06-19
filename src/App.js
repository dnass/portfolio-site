import React, {Component} from 'react'
import Header from './components/header'
import Links from './components/links'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className='avenir'>
        <Header/>
        <Links/>
        <Footer/>
      </div>
    )
  }
}

export default App
