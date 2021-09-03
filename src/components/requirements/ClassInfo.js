import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
class ClassInfo extends Component {

    renderIfClassTaken = (added) => {
        if(added) {
            return <Card.Content extra className='centered' >
                <Icon name='chess queen' />
                Class has been taken
            </Card.Content>
        }else {
            return <Card.Content extra className='centered' >
                <Icon name='paper plane outline'  />
                Class not Yet Taken
            </Card.Content>
        }
    }

    render() {
        const { name, section, description, added } = this.props.info
        return (
            <div  >
                <Card raised style={{ height: "inherit", width: "inherit", minHeight: "150px"}} >
                    <Card.Content>
                        <Card.Header className="centered"  >{name}</Card.Header>
                        <Card.Meta className="centered" >
                            <span >{section}</span>
                        </Card.Meta>
                        <Card.Description className="centered" >
                            <div>{description}</div>
                        </Card.Description>
                    </Card.Content>
                    {this.renderIfClassTaken(added)}
                </Card>
            </div>
        )
    }
}

export default ClassInfo
