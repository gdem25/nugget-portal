import React, { Component } from 'react'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'
class Recourse extends Component {
    render() {
        return(
            <div>
                <MenuBar />
            </div>
        )
    }
}

export default requireAuth(Recourse)
