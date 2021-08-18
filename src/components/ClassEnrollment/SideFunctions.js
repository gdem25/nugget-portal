import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import { Menu, Confirm } from 'semantic-ui-react'
import _ from 'lodash'

const items = ['Add Class', 'Drop Class', 'SwapClass']

class SideFunctions extends Component {
    state={ active: 'Search Class', show: false }

    showConfirm = () => this.setState({ show: true })

    handleConfirm = () => this.setState({ show: false })

    handleAddClick = (event,{ name }) => {
        this.setState({ active: name })
        if(name === 'Add Class' && this.props.getShoppingCartCB ) {
            const Eclass = _.find(this.props.shoppingCart, { classid: this.props.getShoppingCartCB })
            if(Eclass) {
                const classid = Eclass.classid
                const userid = this.props.userid.userid
                const sectionid = Eclass.sectionid
                const prereq = Eclass.prereq
                const term = Eclass.term
                this.props.addClass(classid, userid, sectionid, prereq, term)
                                    .then(() => {
                                        if(this.props.error) {
                                            this.setState({ show: true })
                                        }
                                    } )
            }
        }
        else if (name === 'Drop Class' ) {
            const userid = this.props.userid.userid
            this.props.dropClass(this.props.getEnrolledCB,userid)
        }
        else if (name === 'SwapClass' && this.props.getShoppingCartCB  ) {
            const Eclass = _.find(this.props.shoppingCart, { classid: this.props.getShoppingCartCB })
            if(Eclass) {
                const classid = Eclass.classid
                const userid = this.props.userid.userid
                const sectionid = Eclass.sectionid
                const term = Eclass.term
                this.props.swapClass(classid, userid, sectionid, term)
                    .then(() => {
                        if(this.props.error) {
                            this.setState({ show: true })
                        }
                    } )
            }
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
            <div>
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
                <Confirm
                        open={this.state.show}
                        header= {`${this.props.error}`}
                        content= {false} 
                        cancelButton={false}
                        onConfirm={this.handleConfirm}
                />
            </div>
        )
    }
}

export default SideFunctions
