import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
class ClassInfo extends Component {
    render() {
        const { name, section, description } = this.props.info
        return (
            <div  >
                <Card raised style={{ height: "inherit", width: "inherit", minHeight: "180px"}} >
                    <Card.Content>
                        <Card.Header className="centered"  >{name}</Card.Header>
                        <Card.Meta className="centered" >
                            <span >{section}</span>
                        </Card.Meta>
                        <Card.Description>
                            <div>{description}</div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="/"  >
                            <Icon name='user' />
                            Add
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default ClassInfo
