
import React,{ Component}from 'react'
import {Form,Input,Select, Button, Table, GridColumn, Grid} from 'semantic-ui-react'


 export const gradesOptions =[
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

class GpaInput extends Component {

   constructor(props){
       super(props)
       this.state = {
        courseName: '',
        courseUnits: '',
        courseGradePoint: '',
        units: [],
        gradePoints: [],
        courseNameList: [],
    } 
   }
   


    handleChange = (e,{name, value}) =>{
        this.setState({ [name]: value })
    }
    handleAdd= () =>{
        const first = this.state.units;
        const second = this.state.gradePoints;
        const third  = this.state.courseNameList;
        if( this.state.courseName && this.state.courseUnits && this.state.courseGradePoint ) {
            first.push(this.state.courseUnits);
            second.push(this.state.courseGradePoint);
            third.push(this.state.courseName);
            this.setState({ courseName: '', courseUnits: '', courseGradePoint: '', units: first, gradePoints: second, courseNameList: third })
        }
       
    }

    handleSubmit = () => {
        this.props.calculateGPA(this.state.units, this.state.gradePoints)
    }
  
    render(){
        return(
            // eslint-disable-next-line
            <div>
            <Form onSubmit ={this.handleAdd}>
                <Form.Group widths = 'equal'>
                    <Form.Field name = 'courseName' value={this.state.courseName}  control = {Input} label ="COURSE NAME" placeholder = 'Course Name' onChange = {this.handleChange}/>
                    <Form.Field name = 'courseUnits' value={this.state.courseUnits}  control = {Select} label ="UNITS" placeholder = 'Units' options = {unitsOptions} onChange = {this.handleChange}/>
                    <Form.Field name = 'courseGradePoint'  value={this.state.courseGradePoint}  control = {Select} label ="GRADE" options = {gradesOptions} placeholder = 'Grade' onChange = {this.handleChange}/>
                </Form.Group>
               <Button style = {{marginTop: '25px'}} inverted color = 'blue' type='submit'  content = 'Add Class'/>
              
            </Form>
            <Button fluid style={{ marginTop: '30px' }} onClick={this.handleSubmit}  content = 'Submit'/>
            
            <Table basic>
            <Table.Header>
                <Table.Row style ={{marginLeft:'100px'}}> 
                    <Table.HeaderCell>Course Name</Table.HeaderCell>
                    <Table.HeaderCell>Units</Table.HeaderCell>
                    <Table.HeaderCell>Grade Points</Table.HeaderCell>
                </Table.Row>
                </Table.Header> 
                </Table>

            <Grid columns = {3} relaxed ='very'>
                <GridColumn width= {4}>
                    <ul style = {{listStyle: 'none', textAlign :'left'}}>{
                        this.state.courseNameList.map( (cn,index) => <li key={index} >{cn}</li>)
                        }
                    </ul>
                </GridColumn>
                <GridColumn width= {5}>
                <ul style = {{listStyle: 'none'}}>{
                    this.state.units.map((uns,index) => <li key={index} style ={{marginLeft:'20px'}} >{uns}</li>)
                     }
                </ul> 
               
                </GridColumn>
                <GridColumn width= {5}>
                <ul style = {{listStyle: 'none'}}>{
                    this.state.gradePoints.map((gds,index) => <li key={index} style ={{marginRight:'80%'}} > {gds}</li>)
                }
                </ul>  
                
                </GridColumn>
            </Grid>
            <hr/>
           
            </div>

        )
    }
}

export default GpaInput
