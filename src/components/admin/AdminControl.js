import React, { Component } from 'react'
import { Segment, Dropdown, Form, Button, Table, List } from 'semantic-ui-react'
import _ from 'lodash'

const gradesOptions =[
    {key: 'A', text:'A', value: 4.0}, {key: 'A-', text:'A-', value: 3.7},
    {key: 'B+', text:'B+', value: 3.3}, {key: 'B', text:'B', value: 3.0},
    {key: 'B-', text:'B-', value: 2.7}, {key: 'C+', text:'C+', value: 2.3},
    {key: 'C', text:'C', value: 2.0}, {key: 'C-', text:'C-', value: 1.7},
    {key: 'D+', text:'D+', value: 1.3}, {key: 'D', text:'D', value: 1.0},
    {key: 'D-', text:'D-', value: 0.7}, {key: 'F', text:'F', value: 0},
]
const unitsOptions = [
    {key:1, text: "1", value: 1}, {key:2, text: "2", value: 2},
    {key:3, text: "3", value: 3},{key:4, text: "4", value: 4},
    {key:5, text: "5", value: 5},{key:6, text: "6", value: 6}
]

const termOptions = [
    { key: 'F', text: 'Fall', value: 'FALL21' },
    { key: 'SP', text: 'Spring', value: 'SPRING22' },
    { key: 'SU', text: 'Summer', value: 'SUMMER22' },
  ]

class AdminControl extends Component {

    state = { classid: '', sectionid: '', units: '', gpa: '', grade: '', term: '' }



    renderDropDown = ( place, op, name, och, val ) => {
        return(
            <Dropdown
                placeholder={place}
                options={op}
                name={name}
                fluid
                selection
                scrolling
                search
                floating
                onChange={och}
                value={val}
            />
        )
    }

    renderTable = (info,i) => {
        return(
            <List celled key={i} >
                <List.Item>
                    <List.Content>
                        <List.Description className='centered' >
                            {info}
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    handleChange = (event, { options, value, name } ) => {
        const chosen = _.find(options, { value })
        if(name === 'class') {
            this.setState({ sectionid: chosen.text, classid: value })
        }
        else if(name === 'grade') {
            this.setState({ grade: chosen.text, gpa: value })
        }
        else {
            this.setState({ [name]: value })
        }
     }


     handleSubmit = () => {
        const { classid, units, gpa, grade, term, sectionid } = this.state
        const { userid } = this.props.studentLogInfo
        if( classid && units && gpa && grade && term ) {
            this.props.postGradingList( classid, grade, term, units  )
            this.props.dropClass(classid,userid)
            this.props.postToTranscript( classid, userid, gpa, grade, term, units, sectionid )
        }
        this.setState({ classid: '', sectionid: '', units: '', gpa: '', grade: '', term: '' })
    }


    render() {
        return (
            <div className="ui container" >
                <div style={{ marginTop: '5em' }} >
                    <Segment.Group raised >
                        <Segment style={{ backgroundColor: "rgb(0 214 255 / 52%)" }} >
                            <Form onSubmit={this.handleSubmit} >
                                <Segment.Group horizontal  >
                                    {this.renderDropDown(
                                        'Class',
                                        this.props.adminRequired,
                                        'class',
                                        this.handleChange,
                                        this.state.classid
                                        )}
                                    {this.renderDropDown(
                                        'Term',
                                        termOptions,
                                        'term',
                                        this.handleChange,
                                        this.state.term
                                        )}
                                    {this.renderDropDown(
                                        'Units',
                                        unitsOptions,
                                        'units',
                                        this.handleChange,
                                        this.state.units
                                        )}
                                    {this.renderDropDown(
                                        'Grade',
                                        gradesOptions,
                                        'grade',
                                        this.handleChange,
                                        this.state.gpa
                                        )}
                                </Segment.Group>
                                    <Button
                                        content='Submit'
                                        type='submit'
                                        inverted
                                        fluid
                                        circular
                                    />
                            </Form>
                            <Segment.Group>
                                <Segment>
                                    <h1 style={{ textAlign: 'center' }} >Graded Classes</h1>
                                    <Table basic>
                                        <Table.Header>
                                            <Table.Row className="centered"  > 
                                                <Table.HeaderCell>Course Name</Table.HeaderCell>
                                                <Table.HeaderCell>Units</Table.HeaderCell>
                                                <Table.HeaderCell>Grade Points</Table.HeaderCell>
                                                <Table.HeaderCell>Term</Table.HeaderCell>
                                            </Table.Row>
                                         </Table.Header> 
                                    </Table>
                                    <Segment.Group horizontal >
                                        <Segment>
                                            {
                                                this.props.gradingList.map((each,i) => {
                                                    return this.renderTable(each.classid,i)
                                                })
                                            }
                                        </Segment>
                                        <Segment>
                                            {
                                                this.props.gradingList.map((each,i) => {
                                                    return this.renderTable(each.units,i)
                                                })
                                            }
                                        </Segment>
                                        <Segment>
                                            {
                                                this.props.gradingList.map((each,i) => {
                                                    return this.renderTable(each.grade,i)
                                                })
                                            }
                                        </Segment>
                                        <Segment>
                                            {
                                                this.props.gradingList.map((each,i) => {
                                                    return this.renderTable(each.term,i)
                                                })
                                            }
                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Segment.Group>
                        </Segment>
                    </Segment.Group>
                </div>
            </div>
        )
    }
}

export default AdminControl
