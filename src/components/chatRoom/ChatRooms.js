import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { getChatRooms } from '../../actions/chatAction'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'
import '../../css/chatRoom.css'

class ChatRooms extends Component {

    componentDidMount() {
        if(!this.props.chatRooms[0]) {
            this.props.getChatRooms(this.props.studentMajor)
            console.log('promise complete')
        }
    }

    renderRoomButton = () => {
        return this.props.chatRooms.map((room,index) => {
            return(
                 <Button
                    as={Link}
                    to={`/ChatRoom/${room.sectionid}`}
                    className='my-room-button' 
                    size='massive'  
                    content={room.sectionid} 
                    key={index}
                    circular
                    inverted 
                    color='blue'
                 />
            )
        } )
    }

    render() {
        return(
            <div>
                <MenuBar/>
                <div className="chat-button-flex ui container" >{this.renderRoomButton()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        studentMajor: state.auth.studentMajor,
        chatRooms: state.chat.chatRooms
    }
}

export default connect( mapStateToProps, { getChatRooms } )( requireAuth(ChatRooms) )
