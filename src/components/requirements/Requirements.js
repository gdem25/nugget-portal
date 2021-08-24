import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import MenuBar from '../MenuBar'
import ClassList from './ClassList'
import requireAuth from '../authentication/requireAuth'
import '../../css/requirements.css'
class Requirements extends Component {
    state={ requiredClasses: [] }

    componentDidMount() {
        const filtered = _.differenceBy(this.props.requiredClasses,this.props.transcript,'sectionid')
        this.setState({ requiredClasses: filtered })
    }



    render() {
        return(
            <div >
                <MenuBar />
                <div className="ui container" >
                    <ClassList requiredClasses={this.state.requiredClasses}  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requiredClasses: state.classes.requiredClasses,
        transcript: state.admin.transcript
    }
}



export default connect(mapStateToProps)(requireAuth(Requirements))
