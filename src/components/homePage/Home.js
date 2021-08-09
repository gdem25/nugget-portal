import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from '../authentication/requireAuth'
import { getRequiredClasses } from '../../actions/classesAction'
import MenuBar from '../MenuBar'
class Home extends Component {

    componentDidUpdate() {
        if(!this.props.requiredClasses[0] && this.props.studentMajor )  {
            console.log(this.props.studentMajor)
            this.props.getRequiredClasses(this.props.studentMajor)
        }
    }

    render(){
        console.log(this.props.requiredClasses)
        return(
            <div>
                <MenuBar/>
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
