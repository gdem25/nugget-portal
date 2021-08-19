import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdminRequired, postGradingList, postToTranscript } from '../../actions/adminAction'
import { dropClass } from '../../actions/classesAction'
import MenuBar from '../MenuBar'
import AdminControl from './AdminControl'
import requireAuth from '../authentication/requireAuth'
class Admin extends Component {

    componentDidMount() {
        if(this.props.studentLogInfo) {
            this.props.getAdminRequired(this.props.studentLogInfo.userid)
        }
    }


    render() {
        return (
            <div >
                <MenuBar />
                <AdminControl 
                    adminRequired={this.props.adminRequired}
                    studentLogInfo= {this.props.studentLogInfo}
                    postGradingList={this.props.postGradingList}
                    gradingList = {this.props.gradingList}
                    dropClass = {this.props.dropClass}
                    postToTranscript= {this.props.postToTranscript}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {

    return{
        studentLogInfo: state.auth.studentLogInfo,
        adminRequired: state.admin.adminRequired,
        gradingList:  state.admin.gradingList
    }
}

export default connect(mapStateToProps, {
     getAdminRequired,
      postGradingList,
      dropClass,
      postToTranscript
    } )(requireAuth(Admin))
