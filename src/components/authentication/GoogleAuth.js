import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut, ifMajorSelected } from '../../actions/authAction'
import { getEnrolledClasses, getRequiredClasses } from '../../actions/classesAction'
import { getAdminRequired,getTranscript } from '../../actions/adminAction'
import history from '../../history'
class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load("client: auth2", () => {
          window.gapi.client
            .init({
              clientId:
                "973741719108-hk5lffbftb77lek1trf76o7kfrvks31m.apps.googleusercontent.com",
              scope: "profile email",
            })
            .then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get());
              this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (status) => {
        if (status) {
          const basicProfile = this.auth.currentUser.get().getBasicProfile();
          const name = basicProfile.getName();
          const email = basicProfile.getEmail();
          const userid = basicProfile.getId();
          const image = basicProfile.getImageUrl();
          this.props.signIn(name, email, userid, image).then( () => {
            if( this.props.studentLogInfo  && this.props.studentLogInfo.major !== null) {
              const major = this.props.studentLogInfo.major
              this.props.ifMajorSelected(major)
              this.props.getRequiredClasses(major)
              console.log('hi')
              history.push('/Home')
            }
          })
          if(!this.props.enrolledClasses[0]) {
            this.props.getEnrolledClasses(userid)
            this.props.getAdminRequired(userid)
            this.props.getTranscript(userid)
          }
          
        } 
        else {
          this.props.signOut()
          
        }
    };


    render() {
      return <div></div>
    }
}

const mapStateToProps = (state) => {
  return {
    enrolledClasses: state.classes.enrolledClasses,
    studentLogInfo: state.auth.studentLogInfo
  }
}


export default connect(mapStateToProps,
   { 
     signIn, 
     signOut, 
     getEnrolledClasses, 
     ifMajorSelected,
     getRequiredClasses,
     getAdminRequired,
     getTranscript
    })(GoogleAuth)
