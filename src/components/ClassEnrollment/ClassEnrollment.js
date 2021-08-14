import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { setShoppingCartCB } from '../../actions/tablesAction'
import MenuBar from '../MenuBar'
import SideFunctions from './SideFunctions'
import ShoppingCart from './ShoppingCart'
import requireAuth from '../authentication/requireAuth'
import '../../css/classEnrollment.css'
class ClassEnrollment extends Component {
  render() {
    console.log(this.props.shoppingCart)
    return (
      <div>
        <MenuBar />
        <Grid  className='ui container' >
          <Grid.Column width={4} >
            <SideFunctions />
          </Grid.Column>
          <Grid.Column width={12} >
            <ShoppingCart  
              shoppingCart={this.props.shoppingCart}
              setShoppingCartCB={this.props.setShoppingCartCB}
              getShoppingCartCB={this.props.getShoppingCartCB}
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
    getShoppingCartCB: state.tables.getShoppingCartCB
  }
}

export default connect(mapStateToProps,{ setShoppingCartCB })(requireAuth(ClassEnrollment))
