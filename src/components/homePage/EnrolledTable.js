import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
class EnrolledTable extends Component {

    renderTableItems = () => {
        return this.props.enrolledClasses.map((clas,index) => {
            return(
                <Table.Row key={index} >
                    <Table.Cell>{clas.name}</Table.Cell>
                    <Table.Cell>{clas.section}</Table.Cell>
                    <Table.Cell>{clas.teacher}</Table.Cell>
                    <Table.Cell>{clas.rate}</Table.Cell>
                    <Table.Cell>{clas.description}</Table.Cell>
                    <Table.Cell>{clas.term}</Table.Cell>
                </Table.Row>
            )
        })
    }



    render() {
        return (
            <div className='en-tb-flex'  >
                <h1>Enrolled Classes</h1>
                <Table striped color='teal' inverted  className='mteal'  >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Section</Table.HeaderCell>
                            <Table.HeaderCell>Teacher</Table.HeaderCell>
                            <Table.HeaderCell>Rate</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Term</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTableItems()}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default EnrolledTable
