import React, { Component } from 'react'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'
class ClassEnrollment extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Hello</h1>
      </div>
    )
  }
}

export default requireAuth(ClassEnrollment)
