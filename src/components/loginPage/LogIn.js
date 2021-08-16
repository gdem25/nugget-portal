import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react'
import { setSelectedMajor } from '../../actions/authAction'
import SelectMajor from './SelectMajor';
import '../../css/login.css';
class LogIn extends Component {

    state= { selectedMajor: '' }



    handleLogIn = () => {
        window.gapi.auth2.getAuthInstance().signIn()
        
    }

    onMajorSelect = (major) => {
        this.setState({ selectedMajor: major })
    }

    handleSelectMajorButton = () => {
        this.props.setSelectedMajor(this.state.selectedMajor,this.props.studentLogInfo.userid)
    }

    renderButton = () => {
        if(this.props.signInState) {
            return (
                <div style={{ marginTop: '13rem' }}  >
                    <Grid columns={2} >
                        <Grid.Row>
                            <Grid.Column>
                                <SelectMajor onMajorSelect={this.onMajorSelect} />
                            </Grid.Column>
                            <Grid.Column>
                                <Button as={Link} className="ui white button" to='/Home'
                                    style={{ marginLeft: "11px" }}
                                    onClick={this.handleSelectMajorButton}
                                    
                                  >
                                    Select Major
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
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
                <div className="ui segment nugget" style={{ borderRadius: "1.28571429rem", paddingRight:"2rem"
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
      studentLogInfo : state.auth.studentLogInfo,
      studentMajor : state.auth.studentMajor
    }
  }

export default connect(mapStateToProps,{ setSelectedMajor })(LogIn)
