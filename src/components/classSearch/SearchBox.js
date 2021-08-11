import React, { Component } from 'react'
import { Form, Button} from 'semantic-ui-react'
import _ from 'lodash'
const options = [
    { key: 'F', text: 'Fall', value: 'F' },
    { key: 'SP', text: 'Spring', value: 'SP' },
    { key: 'SU', text: 'Summer', value: 'SU' },
  ]
class SearchBox extends Component {
    state={ term: '', class: '', section: '' }

    options1 = _.uniqBy(this.props.classOptions,'text')

    options2 = _.uniqBy(this.props.sectionOptions,'text')


    handlechange = (e,{ name, value }) => {
        this.setState({ [name]: value })
    }
    onSubmit = () => {
        console.log(this.state)
    }
    render() {
        console.log(this.state)
        return (
            <div className="ui container" style={{ marginTop: '1rem' }}  >
                <Form onSubmit={this.onSubmit} className="search-bar-border search-box-flex "
                    style={{ padding: "0 1.5rem", boxShadow: "rgb(6 165 195 / 84%) 0px 20px 30px -10px" }} 
                >
                    <Form.Select
                        label='Term'
                        floating
                        options={options}
                        placeholder='Term'
                        name = 'term'
                        required
                        onChange={this.handlechange}
                    />
                    <Form.Select
                        label='Class'
                        floating
                        options={this.options1}
                        placeholder='Class'
                        name = 'class'
                        required
                        onChange={this.handlechange}
                    />
                    <Form.Select
                        floating
                        label='Section'
                        options={this.options2}
                        placeholder='Seaction'
                        name = 'section'
                        search                        
                        required
                        onChange={this.handlechange}
                    />
                    <Button basic className="my-blue" type='submit'>Search</Button>
                </Form>
            </div>
        )
    }
}

export default SearchBox
