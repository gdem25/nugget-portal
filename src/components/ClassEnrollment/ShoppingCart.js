import React, { Component } from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
class ShoppingCart extends Component {

    handleCheckBoxValue = (event,{ checked, value }) => {
        const { setShoppingCartCB } = this.props
        if(checked) {
            setShoppingCartCB(value)
            
        }
        else {
            setShoppingCartCB('')
        }
    }

    renderTableItems = () => {
        const { getShoppingCartCB } = this.props
        return this.props.shoppingCart.map(EClass => {
            return(
                <Table.Row key={EClass.classid} >
                    <Table.Cell collapsing >
                        <Checkbox
                            slider
                            value={EClass.classid}
                            onChange={this.handleCheckBoxValue}
                            checked={ getShoppingCartCB === EClass.classid }
                            
                        />
                    </Table.Cell>
                    <Table.Cell>{EClass.name}</Table.Cell>
                    <Table.Cell>{EClass.classid}</Table.Cell>
                    <Table.Cell>{EClass.teacher}</Table.Cell>
                    <Table.Cell>{EClass.rate}</Table.Cell>
                    <Table.Cell>{EClass.description}</Table.Cell>
                </Table.Row>
            )
        } )
    }

    render() {
        if(this.props.shoppingCart[0]) {
            return(
                <div>
                    <h1 style={{ textAlign: 'center' }} >{this.props.tableName}</h1>
                    <Table striped color='teal' inverted  className='mteal'  >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Class</Table.HeaderCell>
                                <Table.HeaderCell>Teacher</Table.HeaderCell>
                                <Table.HeaderCell>Rate</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.renderTableItems()}
                        </Table.Body>
                    </Table>
                </div>
            )
        }
        else {
            return(
                <div>
                </div>
            )
        }
    }
}

export default ShoppingCart
