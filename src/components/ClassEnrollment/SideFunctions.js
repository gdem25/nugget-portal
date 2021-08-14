import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const items = ['Add Class', 'Drop Class', 'SwapClass']

class SideFunctions extends Component {
    state={ active: 'Search Class' }

    handleAddClick = (event,{ name }) => {
        this.setState({ active: name })
        if(name === 'Add Class') {
            console.log('Add Class')
        }
        else if (name === 'Drop Class' ) {
            console.log('Drop Class')
        }
        else if (name === 'SwapClass' ) {
            console.log('Swap Class')
        }
    }

    renderMenuItems = () => {
        return items.map((item, index) => {
            return(
                <Menu.Item
                    key={index}
                    name={item}
                    className='bloom'
                    onClick={this.handleAddClick}
                    active={this.state.active === item }
                />
            )
        })
    }



    render() {
        return (
            <Menu fluid vertical inverted  color='brown'  tabular style={{ height: '100vh' }}  >
                <Menu.Item
                    name='Search Class'
                    className='bloom'
                    active={this.state.active === 'Search Class' }
                    as={Link}
                    to='/ClassSearch'
                />
                {this.renderMenuItems()}
            </Menu>
        )
    }
}

export default SideFunctions
