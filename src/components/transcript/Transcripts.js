import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranscript, getSemesterTranscript } from '../../actions/adminAction'
import { List, Segment, Dropdown, Button, Form } from 'semantic-ui-react'
import MenuBar from '../MenuBar'
import requireAuth from '../authentication/requireAuth'

const termOptions = [
    { key: 'F', text: 'Fall', value: 'FALL21' },
    { key: 'SP', text: 'Spring', value: 'SPRING22' },
    { key: 'SU', text: 'Summer', value: 'SUMMER22' },
  ]


class Transcripts extends Component {

    state={ term: '' }

    componentDidMount() {
        if(this.props.studentLogInfo && !this.props.transcript[0] ) {
            console.log('got transcript')
            this.props.getTranscript(this.props.studentLogInfo.userid)
        }
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
        return this.props.semTranscript.map((each,index) => {
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
        this.setState({ term: value })
    }

    handleSubmit = () => {
        const { term } = this.state
        if(term) {
            this.props.getSemesterTranscript(term)
            this.setState({ term: '' })
        }
    }


    render() {
        console.log(this.props.semTranscript)
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        transcript: state.admin.transcript,
        studentLogInfo: state.auth.studentLogInfo,
        semTranscript: state.admin.semTranscript
    }
}

export default connect(mapStateToProps,{ getTranscript, getSemesterTranscript })(requireAuth(Transcripts))
