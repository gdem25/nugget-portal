/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { connect } from "react-redux";
import history from '../../history';

export default (ChildComponent) => {
  class requireAuth extends Component {
    componentDidMount() {
      this.navigation();
    }
    componentDidUpdate() {
      this.navigation();
    }
    navigation = () => {
      if (!this.props.auth) {
        history.push("/");
      }
    };

    render() {
      return (
        <div>
          <ChildComponent {...this.props} />
        </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
      auth: state.auth.isSignedIn,
    };
  };
  return connect(mapStateToProps)(requireAuth);
};
