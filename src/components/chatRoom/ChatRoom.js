import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Form, TextArea } from 'semantic-ui-react'
import { getChatComments, postChatComment } from '../../actions/chatAction'
import requireAuth from '../authentication/requireAuth'
import ChatContent from './ChatContent'

class ChatRoom extends Component {

    state={ comment: '' }

    componentDidMount() {
        this.props.getChatComments(this.props.match.params.id)
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log('chat updated')
            this.props.getChatComments(this.props.match.params.id)
        },750)
    }

    handleChange = (event,{ value }) => {
        this.setState({ comment: value })
    }

    handleSubmit = () => {
        const { name, userid, image } = this.props.studentLogInfo
        const sectionid = this.props.match.params.id
        const comment = this.state.comment
        this.props.postChatComment(name,userid,image,sectionid,comment)
        this.setState({ comment: '' })
    }


    render() {
        return(
            <div className='ui container'  >
                <div style={{ marginTop: "1em", marginBottom: '24em' }} >
                    <Button
                        as={Link}
                        to='/Chat'
                        size='massive'
                        circular
                        inverted
                        color='blue'
                        
                    >
                        <Icon name='angle double left'  />
                        Back
                    </Button>
                    <h1 style={{ textAlign: 'center', marginTop: '1em'}} >
                        {`You Are In ChatRoom ${this.props.match.params.id}`}
                    </h1>
                </div>
                
                <div >
                    <ChatContent chatComments={this.props.chatComments} />
                    <div className="chat-room-position" >
                        <Form reply onSubmit={this.handleSubmit}  >
                            <TextArea maxLength='200' value={this.state.comment} onChange={this.handleChange} />
                            <Button content='submit' basic color='blue' circular  fluid /> 
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        studentLogInfo: state.auth.studentLogInfo,
        chatComments: state.chat.chatComments
    }
}

export default connect( mapStateToProps,
     { getChatComments, postChatComment }
      )( requireAuth(ChatRoom) )
