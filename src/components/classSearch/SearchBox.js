import React, { Component } from 'react'
import { Form, Button} from 'semantic-ui-react'
import _ from 'lodash'
const options = [
    { key: 'F', text: 'Fall', value: 'FALL21' },
    { key: 'SP', text: 'Spring', value: 'SPRING22' },
    { key: 'SU', text: 'Summer', value: 'SUMMER22' },
  ]
class SearchBox extends Component {
    state={ term: 'FALL21', class: '', section: '' }

    options1 = _.uniqBy(this.props.classOptions,'text')

    options2 = _.uniqBy(this.props.sectionOptions,'text')

    componentDidUpdate() {
        if(this.props.classesSearched[0] === 'error' && this.props.classSearchError === 'set'){
            this.props.setClassSearchError(true)
            console.log('error')
        }
    }


    handlechange = (e,{ name, value }) => {
        this.setState({ [name]: value })
    }
    onSubmit = () => {
        const info = this.state
        this.props.searchClass(info.term,info.class,info.section)
        this.props.searchTableCheckboxValue('')
        this.props.setSearchTableCBDisabled(false)
        this.setState({ term: '', class: '', section: '' })
        this.props.setClassSearchError('set')
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '1rem', marginBottom: '5rem' }}  >
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
                        value={this.state.class}
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
                        value={this.state.section}
                    />
                    <Button basic className="my-blue" type='submit'>Search</Button>
                </Form>
            </div>
        )
    }
}

export default SearchBox
