import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requireAuth from '../authentication/requireAuth'
class Home extends Component {

    handleClick = () => {
        window.gapi.auth2.getAuthInstance().signOut()
    }

    render(){
        return(
            <div className=" ui container " >
                <Link to="/" className=" ui white button "
                    onClick={this.handleClick}
                 >
                    <i className="google icon" />
                    Log Out
                </Link>
            </div>
        )
    }
}

export default requireAuth(Home)
