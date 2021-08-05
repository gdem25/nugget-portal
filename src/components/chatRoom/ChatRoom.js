import React, { Component } from 'react'
import requireAuth from '../authentication/requireAuth'
import MenuBar from '../MenuBar'

class ChatRoom extends Component {
    render() {
        return(
            <div>
                <MenuBar/>
            </div>
        )
    }
}

export default requireAuth(ChatRoom)
