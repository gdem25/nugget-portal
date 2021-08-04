import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions/authAction'
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
          this.props.signIn(name, email, userid, image)
          
        } 
        else {
          this.props.signOut()
          
        }
    };


    render() {
      return <div></div>
    }
}


export default connect(null, { signIn, signOut })(GoogleAuth)
