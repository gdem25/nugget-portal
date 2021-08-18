import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
class ClassInfo extends Component {
    render() {
        const { name, section, description } = this.props.info
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
                </Card>
            </div>
        )
    }
}

export default ClassInfo
