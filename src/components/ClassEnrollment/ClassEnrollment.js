import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { setShoppingCartCB, setEnrolledCB } from '../../actions/tablesAction'
import { addClass, dropClass, swapClass } from '../../actions/classesAction'
import MenuBar from '../MenuBar'
import SideFunctions from './SideFunctions'
import ShoppingCart from './ShoppingCart'
import requireAuth from '../authentication/requireAuth'
import '../../css/classEnrollment.css'
class ClassEnrollment extends Component {

  render() {
    return (
      <div>
        <MenuBar />
        <Grid  className='ui container' >
          <Grid.Column width={4} >
            <SideFunctions 
              getShoppingCartCB={this.props.getShoppingCartCB}
              getEnrolledCB={this.props.getEnrolledCB}
              shoppingCart={this.props.shoppingCart}
              userid = {this.props.userid}
              addClass={this.props.addClass}
              error = {this.props.error}
              dropClass={this.props.dropClass}
              swapClass={this.props.swapClass}
            />
          </Grid.Column>
          <Grid.Column width={12} >
            <ShoppingCart  
              shoppingCart={this.props.shoppingCart}
              setShoppingCartCB={this.props.setShoppingCartCB}
              getShoppingCartCB={this.props.getShoppingCartCB}
              tableName = 'Shopping Cart'
            />
            {/* This Is The Enrollement List */}
            <ShoppingCart 
              shoppingCart={this.props.enrolledClasses}
              setShoppingCartCB={this.props.setEnrolledCB}
              getShoppingCartCB={this.props.getEnrolledCB}
              tableName = 'Enrolled Classes'
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.classes.shoppingCart,
    enrolledClasses: state.classes.enrolledClasses,
    error: state.classes.error,
    getShoppingCartCB: state.tables.getShoppingCartCB,
    userid : state.auth.studentLogInfo,
    getEnrolledCB: state.tables.getEnrolledCB
  }
}

export default connect(mapStateToProps,{ 
  setShoppingCartCB,
  addClass, 
  setEnrolledCB,
  dropClass,
  swapClass
})(requireAuth(ClassEnrollment))
