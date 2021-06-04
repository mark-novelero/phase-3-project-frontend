import { Component } from "react";
import { Card } from 'semantic-ui-react'

class UserCard extends Component {

    render() {
       return( 
        <Card>
            <div onClick={() => this.props.addToSelectedBlog(this.props.blogObject)}>
                <Image src={this.props.blogObject.photo} size='large'/>
                <Card.Header>{this.props.blogObject.user}</Card.Header>
            </div>
        </Card>
        )
    }
}
export default UserCard