import React from 'react';
import { Card } from 'semantic-ui-react';
// import UserCard from './src/user_collection/UserCard';

export default class MainPage extends React.Component{


  render() {
    return (
      <div>
          <br></br>
          <br></br>
          <Card.Group itemsPerRow={3}>
            {/* {this.props.user_blogs.map(blogObject => <UserCard key={blogObject.id} addToSelectedBlog={this.props.addToSelectedBlog} blogObject={blogObject}/>)} */}
          </Card.Group>
      </div>
    )
  }
}