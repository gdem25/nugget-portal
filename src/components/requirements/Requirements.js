import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuBar from '../MenuBar'
import ClassList from './ClassList'
import requireAuth from '../authentication/requireAuth'
import '../../css/requirements.css'
class Requirements extends Component {

    render() {
        return(
            <div>
                <MenuBar />
                <div className="ui container" >
                    <ClassList requiredClasses={this.props.requiredClasses}  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requiredClasses: state.classes.requiredClasses
    }
}



export default connect(mapStateToProps)(requireAuth(Requirements))
