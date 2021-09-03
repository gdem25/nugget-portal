import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranscript, getSemesterTranscript } from '../../actions/adminAction'
import { calculateGPA, calculateTotalGPA } from '../../actions/gpaAction'
import { List, Segment, Dropdown, Button, Form, Grid } from 'semantic-ui-react'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'

const termOptions = [
    { key: 'F', text: 'Fall', value: 'FALL21' },
    { key: 'SP', text: 'Spring', value: 'SPRING22' },
    { key: 'SU', text: 'Summer', value: 'SUMMER22' },
  ]


class Transcripts extends Component {

    state={ semTranscript: [], term: '' }

    componentDidMount() {
        const { transcript }  = this.props
        let grade = []
        let units = []
        this.props.getSemesterTranscript('','')
        this.props.calculateGPA([1],[0.0])
        for( let i = 0; i<transcript.length; i++ ) {
            grade.push(parseFloat(transcript[i].gpa))
            units.push(parseInt(transcript[i].units))
        }
        this.props.calculateTotalGPA(units,grade)
        console.log('transcript mounted')
    }


    renderLabels = () => {
        const labels = ['Class', 'Units', 'Grade', 'Term']
        return(
                <List.Item style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                    { labels.map((each,index) => {
                        return(
                            <List.Content floated='left' key={index} >
                                <List.Description>
                                    <h1>{each}</h1>
                                </List.Description>
                            </List.Content>
                        )
                    } ) }
                </List.Item>
          
        )
    }


    renderList = () => {
        return this.state.semTranscript.map((each,index) => {
            return(
                <List.Item key={index} style={{ display: 'flex',justifyContent: 'space-around' }}>
                    <List.Content style={{ paddingLeft: '20px' }}  floated='right' >
                        <List.Description>{each.classid}</List.Description>
                    </List.Content>
                    <List.Content floated='right' >
                        <List.Description>{each.units}</List.Description>
                    </List.Content>
                    <List.Content floated='right' >
                        <List.Description>{each.grade}</List.Description>
                    </List.Content>
                    <List.Content floated='right' >
                        <List.Description >{each.term}</List.Description>
                    </List.Content>
                </List.Item>
            )
        } )
    }

    handleChange = (event,{ value }) => {
        this.props.getSemesterTranscript(this.props.studentLogInfo.userid, value)
        this.setState({ term: value })
    }



    handleSubmit = () => {
        const { term } = this.state
        const { semTranscript } = this.props
        let grade = []
        let units = []
        if(term && semTranscript[0] ) {
            for(let i =0; i< semTranscript.length;i++) {
                grade.push(parseFloat(semTranscript[i].gpa))
                units.push(parseInt(semTranscript[i].units))
            }
            this.props.calculateGPA(units,grade)
            this.setState({ semTranscript, term: '' })
        }else {
            this.setState({ semTranscript: [], term: '' })
            this.props.calculateGPA([1],[0.0])
        }
    }


    render() {
        return (
            <div>
                <MenuBar />
                <div className="ui container" style={{ textAlign: 'center', marginTop: '3em' }} >
                <div style={{ marginBottom: '1em', fontSize: '50px' }} >Transcript</div>
                <Form onSubmit={this.handleSubmit} >
                    <Dropdown
                        placeholder='Choose Semester'
                        options={termOptions}
                        name='term'
                        selection
                        scrolling
                        search
                        onChange={this.handleChange}
                        value={this.state.term}
                    />
                   <Button content='Search' type='submit' secondary /> 
                </Form>
                <Segment.Group raised  style={{ border: 'none' }}  >
                    <List divided animated >
                        {this.renderLabels()}
                        {this.renderList()}
                    </List>
                </Segment.Group>
            </div>
            <Grid>
                <Grid.Column width={8} >
                    <div style={{ marginTop: '1em', fontSize: '50px' }} className='centered' >
                        Semester GPA
                        <div style={{ marginTop: '1em' }} >{this.props.semesterGpa}</div>
                    </div>
                </Grid.Column>
                <Grid.Column width={8} >
                    <div style={{ marginTop: '1em', fontSize: '50px' }} className='centered' >
                        Cumulative GPA
                        <div style={{ marginTop: '1em' }} >{this.props.totalGpa}</div>
                    </div>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        transcript: state.admin.transcript,
        studentLogInfo: state.auth.studentLogInfo,
        semTranscript: state.admin.semTranscript,
        semesterGpa: state.gpa.semesterGpa,
        totalGpa: state.gpa.totalGpa
    }
}

export default connect(mapStateToProps,{ 
    getTranscript, 
    getSemesterTranscript,
    calculateGPA,
    calculateTotalGPA
})(requireAuth(Transcripts))
