import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import GoogleAuth from './authentication/GoogleAuth'
import ScrollToTop from './ScrollToTop'
import LogIn from './loginPage/LogIn'
import Home from './homePage/Home'
//import Recourse from './recourse/Recourse'
import Requirements from './requirements/Requirements'
import ChatRoom from './chatRoom/ChatRoom'
import ClassEnrollment from './classEnrollment/ClassEnrollment'
import GpaCalculator from './gpaCalculator/GpaCalculator'
import Transcripts from './transcript/Transcripts'
import ClassSearch from './classSearch/ClassSearch'
class App extends Component {

  renderRouter = () => {
    return (
      <Router history={history}  >
        <GoogleAuth/>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={LogIn}  />
          <Route path='/Home'   component={Home}  />
          <Route path='/Requirements' component={Requirements}  />
          <Route path='/Chat' component={ChatRoom}   />
          <Route path='/ClassEnrollement' component={ClassEnrollment}   />
          <Route path='/GpaCalculator' component={GpaCalculator}   />
          <Route path='/Transcripts' component={Transcripts}   />
          <Route path='/ClassSearch' component={ClassSearch}  />
        </Switch>
      </Router>
    )
  }

  render() {
   return <div>{this.renderRouter()}</div>
 }
}

export default App
