import React, { Component } from 'react'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'
class Requirements extends Component {
    render() {
        return(
            <div>
                <MenuBar />
            </div>
        )
    }
}

export default requireAuth(Requirements)
