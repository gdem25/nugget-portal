import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/login.css';
class LogIn extends Component {

    handleLogIn = () => {
        window.gapi.auth2.getAuthInstance().signIn()
        
    }

    renderButton = () => {
        if(this.props.signInState) {
            return (
                <Link to='/home'  className="ui white button" style={{ marginTop: "13rem" }}  >
                    go to home page
                </Link>
            )
        }
        else {
            return (
                <button onClick={this.handleLogIn} className="ui white button"
                 style={{ marginTop: "13rem"   }}    >
                    <i className="google icon" />
                    Sign in with google
                </button>
            )
        }
    }




    render() {
        return (
            <div>
                <div className="  ui placeholder segment login" >
                <div className="ui segment" style={{ borderRadius: "1.28571429rem", paddingRight:"2rem"
                    , paddingLeft: "2rem" }}   >
                 <h1> Nugget Portal </h1>
                </div>
                    {this.renderButton()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      signInState : state.auth.isSignedIn,
    }
  }

export default connect(mapStateToProps)(LogIn)
