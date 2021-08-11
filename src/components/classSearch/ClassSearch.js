import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuBar from '../MenuBar'
import SearchBox from '../classSearch/SearchBox'
import requireAuth from '../authentication/requireAuth'
import  '../../css/classSearch.css'
class ClassSearch extends Component {
    classOptions = this.props.requiredClasses.map(Eclass => {
        return {
            key: Eclass.id,
            text:Eclass.name,
            value: Eclass.name
        }
    })

    sectionOptions = this.props.requiredClasses.map(Eclass => {
        return {
            key: Eclass.id,
            text: Eclass.section,
            value: Eclass.sectionid

        }
    })

    
    render() {
        return (
            <div>
                <MenuBar/>
                <SearchBox  classOptions={this.classOptions} sectionOptions={this.sectionOptions}  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requiredClasses : state.classes.requiredClasses
    }
}

export default connect(mapStateToProps)(requireAuth(ClassSearch))
