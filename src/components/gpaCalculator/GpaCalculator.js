import React from "react"
import MenuBar from '../MenuBar'
import { connect } from 'react-redux'
import { Grid, GridColumn, Header, Segment, Message, MessageList } from 'semantic-ui-react'
import { calculateGPA } from '../../actions/gpaAction'
import requireAuth from '../authentication/requireAuth'
import GpaInput from "./GpaInput"

class GpaCalculator extends React.Component {

    render() {
        console.log(this.props.semesterGpa)
        return (
            <div >
                 <MenuBar/>
    
                 <Segment as ='h1' textAlign ='center'> 
                    <Header>GPA Calculator</Header>
                </Segment>
    
                <Segment>
                    <Grid columns = {2} relaxed ='very'>
                        <GridColumn width = {11}>
                            <Segment as ='h2' textAlign ='center' > 
                                <GpaInput  calculateGPA={this.props.calculateGPA} />
                            </Segment>
                
                        </GridColumn>
    
                        <GridColumn  textAlign = 'center' width = {5}>
                            <Message color = "blue" >
                                <Message.Header>How is the GPA Calculate.</Message.Header>
                                   The Semester GPA is Calculate as Follows:
                                   <MessageList>
                                       <Message.Item> Total Units: Add the total amount units take </Message.Item>
                                       <Message.Item>Total Grade Points: Multiply the letter grade value with the course Units, 
                                           for example: Grade Points =  grade received B+ = 3.3 ( grade point) x 4 units course  = 13.2
                                        </Message.Item>
                                        <Message.Item>SemesterGPA =  (Total Grade Points / Total Units Attempted) </Message.Item>
    
                                   </MessageList>
                            </Message>
                        </GridColumn>
                    </Grid>
                    <h2>  Semester GPA: {this.props.semesterGpa}</h2>
                </Segment>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        semesterGpa: state.gpa.semesterGpa
    }
}

export default  connect(mapStateToProps, { calculateGPA })(requireAuth(GpaCalculator))
