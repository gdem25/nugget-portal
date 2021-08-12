import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchClass, addToShoppingCart } from '../../actions/classesAction'
import { searchTableCheckboxValue, setSearchTableCBDisabled } from '../../actions/tablesAction'
import MenuBar from '../MenuBar'
import SearchBox from './SearchBox'
import ClassSearchedList from './ClassSearchedList'
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
        console.log(this.props.shoppingCart)
        return (
            <div>
                <MenuBar/>
                <SearchBox  
                    classOptions={this.classOptions} 
                    sectionOptions={this.sectionOptions}
                    searchClass={this.props.searchClass}
                    searchTableCheckboxValue={this.props.searchTableCheckboxValue}
                    setSearchTableCBDisabled = {this.props.setSearchTableCBDisabled}
                  />
                <ClassSearchedList 
                    classesSearched={this.props.classesSearched}
                    searchTableCBValue={this.props.searchTableCBValue}
                    searchTableCheckboxValue={this.props.searchTableCheckboxValue}
                    setSearchTableCBDisabled = {this.props.setSearchTableCBDisabled}
                    searchTableCBDisabled = {this.props.searchTableCBDisabled}
                    addToShoppingCart = {this.props.addToShoppingCart}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requiredClasses : state.classes.requiredClasses,
        classesSearched: state.classes.classesSearched,
        shoppingCart :  state.classes.shoppingCart,
        searchTableCBValue: state.tables.searchTableCBValue,
        searchTableCBDisabled: state.tables.searchTableCBDisabled
    }
}

export default connect(mapStateToProps,{ 
    searchClass, 
    searchTableCheckboxValue,
    setSearchTableCBDisabled,
    addToShoppingCart
     })(requireAuth(ClassSearch))
