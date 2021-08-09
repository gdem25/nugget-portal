import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class SelectMajor extends Component {


  state ={}

  handleChange = ((e,{ value }) => {
     this.setState({ value })
     this.props.onMajorSelect(value)
 } )

  options = [
    { key: '1', text: 'Computer Science', value: 'CS' },
    { key: '2', text: 'Electrical Engineering', value: 'EE' },
    { key: '3', text: 'Computer Engineering', value: 'CE' },
  ]



  render() {
    return           <Dropdown
    onChange={this.handleChange}
    options={this.options}
    placeholder='Choose an option'
    selection
    value={this.state.value}
  />
  }
}


export default SelectMajor