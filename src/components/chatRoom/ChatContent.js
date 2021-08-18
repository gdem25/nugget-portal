import React, { Component } from 'react'


class ChatContent extends Component {

    renderChatList = () => {
        return this.props.chatComments.map(each => {
            return(
                <div key={each.id} className="ui celled list" >
                    <div className="item" style={{ width: "fit-content" }}  >
                        <div className="content" style={{ marginLeft: "1em" }} >
                            <div
                                className="header"
                                style={{ color: "#00d6ff" }}
                            >
                                <img className="ui avatar image" src={each.image} alt="" />
                                <span>{each.name}</span>
                            </div>
                            <p style={{ marginLeft: "2em", marginRight: "0.8em" }} >
                                {each.comment}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }



    render() {
        return(
            <div style={{ marginBottom: '1em' }} >{this.renderChatList()}</div>
        )
    }
}

export default ChatContent
