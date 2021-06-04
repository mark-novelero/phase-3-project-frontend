import React from 'react'
import { Card } from 'semantic-ui-react'
import UserCard from './UserCard';




export default class UserCardContainer extends React.Component {


  
  render() {
    return (

      <Card.Group itemsPerRow={1}>
        {this.props.user_blogs.map(blogObject => <UserCard key={blogObject.id} addToSelectedBlog={this.props.addToSelectedBlog} blogObject={blogObject}/>)}
      </Card.Group>

    )
  }
}