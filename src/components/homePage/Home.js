import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from '../authentication/requireAuth'
import { getRequiredClasses } from '../../actions/classesAction'
import MenuBar from '../MenuBar'
import SideNav from '../SideNav'
class Home extends Component {

    componentDidUpdate() {
        if(!this.props.requiredClasses[0] && this.props.studentMajor )  {
            console.log(this.props.studentMajor)
            this.props.getRequiredClasses(this.props.studentMajor)
        }
    }

    render(){
        return(
            <div>
                <MenuBar/>
                <SideNav/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        studentLogInfo: state.auth,
        studentMajor: state.auth.studentMajor,
        requiredClasses: state.classes.requiredClasses
    }
}

export default connect(mapStateToProps,{ getRequiredClasses })(requireAuth(Home))
