import React from 'react'
import { Grid, Menu, Image, TextArea, Form, Button, Segment, Header, Icon, Card } from 'semantic-ui-react'
import UserCard from './user_collection/UserCard';




export default class UserCardContainer extends React.Component {


  
  render() {
    return (

      <Card.Group itemsPerRow={1}>
        {this.props.user_blogs.map(blogObject => <UserCard key={blogObject.id} addToSelectedBlog={this.props.addToSelectedBlog} blogObject={blogObject}/>)}
      </Card.Group>

    )
  }
}