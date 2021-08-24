import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Checkbox, Form, Button, Confirm, Message } from 'semantic-ui-react'
class ClassSearchedList extends Component {

    state={ show: false }


    handleChange = ((event, data) => {
        if(data.checked) {
            this.props.searchTableCheckboxValue(data.value)
        }
        else {
            this.props.searchTableCheckboxValue('')
        }
    } )

    showConfirm = () => this.setState({ show: true })

    handleConfirm = () => {
        this.setState({ show: false })
        this.props.searchTableCheckboxValue('')

    }

    handleSubmit = () => {
        if(this.props.searchTableCBValue) {
            this.props.setSearchTableCBDisabled(true)
            this.props.addToShoppingCart(this.props.searchTableCBValue)
            this.showConfirm()
        }
        
    }

    renderTableContent = () => {
        return this.props.classesSearched.map(EClass => {
            return(
                <Table.Row key={EClass.classid} >
                    <Table.Cell collapsing >
                        <Checkbox
                            slider
                            value={EClass.classid}
                            checked={ this.props.searchTableCBValue === EClass.classid }
                            onChange={this.handleChange}
                            disabled={this.props.searchTableCBDisabled}
                        />
                    </Table.Cell>
                    <Table.Cell>{EClass.name}</Table.Cell>
                    <Table.Cell>{EClass.classid}</Table.Cell>
                    <Table.Cell>{EClass.teacher}</Table.Cell>
                    <Table.Cell>{EClass.rate}</Table.Cell>
                    <Table.Cell>{EClass.description}</Table.Cell>
                </Table.Row>
            )
        })
    }



    render() {
        if( this.props.classesSearched[0] && this.props.classesSearched[0] !== 'error' ) {
            return(
                <div className='ui container'>
                    <Form onSubmit={this.handleSubmit} >
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
                                {this.renderTableContent()}
                            </Table.Body>
                        </Table>
                        <Button 
                            type="submit" 
                            basic 
                            color='teal' 
                            circular 
                            floated='right'  
                        >
                            Add To Shoping Cart
                        </Button>
                    </Form>
                    <Button 
                        basic 
                        color='teal' 
                        circular 
                        floated='left'
                        as={Link}
                        to='/ClassEnrollement'
                    >
                        Go To Shopping Cart
                    </Button>
                    <Confirm
                        open={this.state.show}
                        header= {`Class ${this.props.searchTableCBValue} Added To Shpping Cart`}
                        content= {false} 
                        cancelButton={false}
                        onConfirm={this.handleConfirm}
                    />
                </div>
            )
        }else if(this.props.classSearchError && this.props.classSearchError !== 'set' ) {
            return(
                <div className='ui container centered' >
                  <Message 
                    error
                    compact
                    header='Error Occured while searching Class.'
                    list={['One of the fields might have been empty', 'The class section might have not matched the class name']}
                    size='massive'
                    onDismiss={() => this.props.setClassSearchError(false) }
                  />
                </div>
            )
        }
        else {
            return(
                <div>
                    <Button 
                        basic 
                        color='teal' 
                        circular 
                        floated='left'
                        as={Link}
                        to='/ClassEnrollement'
                    >
                        Go To Shopping Cart
                    </Button>
                </div>
            )
        }
    }
}

export default ClassSearchedList
