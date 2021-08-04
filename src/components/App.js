import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import GoogleAuth from './authentication/GoogleAuth'
import ScrollToTop from './ScrollToTop'
import LogIn from './loginPage/LogIn'
import Home from './homePage/Home'
class App extends Component {

  renderRouter = () => {
    return (
      <Router history={history}  >
        <GoogleAuth/>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={LogIn}  />
          <Route path='/home'   component={Home}  />
        </Switch>
      </Router>
    )
  }

  render() {
   return <div>{this.renderRouter()}</div>
 }
}

export default App
