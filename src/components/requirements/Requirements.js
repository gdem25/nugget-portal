import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuBar from '../MenuBar'
import ClassList from './ClassList'
import requireAuth from '../authentication/requireAuth'
import '../../css/requirements.css'
class Requirements extends Component {
    state={ requiredClasses: [] }

    // componentDidMount() {
    //     const filtered = _.differenceBy(this.props.requiredClasses,this.props.transcript,'sectionid')
    //     this.setState({ requiredClasses: filtered })
    // }

    componentDidMount() {
        const { requiredClasses, transcript } = this.props
        let temp =[]
        for( let i =0; i<requiredClasses.length; i++ ){
            temp[requiredClasses[i].sectionid] = true
        }
        for(let i =0; i<transcript.length;i++) {
            // checking in case the class has been taken more than once
            if(temp[transcript[i].sectionid]) {
                temp[transcript[i].sectionid] = false
            }
        }
        const check = requiredClasses.map( eClass => {
            if(!temp[eClass.sectionid]) {
                return {...eClass, added: true}
            }
            else {
                return {...eClass, added:false}
            }
        })

        const filtered = check.filter(eClass => {
            return eClass.first
        })

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
