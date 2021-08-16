import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import requireAuth from '../authentication/requireAuth'
import { getRequiredClasses } from '../../actions/classesAction'
import MenuBar from '../MenuBar'
import SideNav from '../SideNav'
import EnrolledTable from './EnrolledTable'
import '../../css/home.css'
class Home extends Component {

    componentDidUpdate() {
        if(!this.props.requiredClasses[0] && this.props.studentMajor)  {
            console.log(this.props.studentMajor)
            this.props.getRequiredClasses(this.props.studentMajor)
        }
    }

    render(){
        return(
            <div>
                <MenuBar/>
                <Grid className='ui container' >
                    <Grid.Column width={4} >
                        <SideNav />
                    </Grid.Column>
                    <Grid.Column stretched width= {12} >
                        <EnrolledTable  enrolledClasses={this.props.enrolledClasses}  />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        studentMajor: state.auth.studentMajor,
        requiredClasses: state.classes.requiredClasses,
        enrolledClasses: state.classes.enrolledClasses
    }
}

export default connect(mapStateToProps,{ getRequiredClasses })(requireAuth(Home))
