import React, { Component } from 'react'
import ClassInfo from './ClassInfo'
class ClassList extends Component {

    renderClassInfo = () => {
        return this.props.requiredClasses.map((info,index) => {
            if(info.first) {
                return <ClassInfo  info={info} key={index} />
            }
            return <div key={index} ></div>
        })
    }

    render() {
        return (
            <div className="class-list " >
                {this.renderClassInfo()}
            </div>
        )
    }
}

export default ClassList
