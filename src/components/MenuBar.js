import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActiveMenuItem } from '../actions/menuBarAction'
import '../css/menuBar.css'
class MenuBar extends Component {
    menuItems = ['Home', 'Requirements', 'Chat' ]
    handleItemClick = ((e,{name}) => this.props.setActiveMenuItem(name) )
    handleLogOutClick = () => {
      window.gapi.auth2.getAuthInstance().signOut()
  }
  
    renderMenuItems = (activeItem) => {
      const menuItems = this.menuItems.map(menuItem => {
        return(
          <Menu.Item
            name={menuItem}
            as={Link}
            to={`/${menuItem}`}
            className='main'
            key={menuItem}
            active={activeItem === `${menuItem}` }
            onClick={this.handleItemClick}
          >
            {menuItem}
          </Menu.Item>
        )
      })
      return menuItems
    }

    renderMenu = (activeItem) => {
      if(this.props.signInState) {
        return(
          <Menu inverted className='menuColor' >
            {this.renderMenuItems(activeItem)}
            <Menu.Menu position='right'>
              <Menu.Item
              name='log out'
              className='main'
              active={activeItem === 'log out'}
              onClick={this.handleLogOutClick}
              >
                Log Out
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
      } else {
        return <div></div>
      }
    }
  
    render() {
      return <div style={{ marginBottom: "14px" }} >{this.renderMenu(this.props.activeItem)}</div>
    }
}

const mapStateToProps = (state) => {
  return {
    signInState: state.auth.isSignedIn,
    activeItem: state.menuBar.activeMenuItem
  }
}

export default connect(mapStateToProps,{ setActiveMenuItem })(MenuBar)
