import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import UserCardContainer from './UserCardContainer';




export default class UserCollection extends React.Component {


  
  render() {
    return (
      <Grid>
        <Grid.Column width={13}>
          <Segment>
            <UserCardContainer
              addToSelectedBlog={this.props.addToSelectedBlog}
              user_blogs={this.props.user_blogs}
              blogs={this.props.blogs}
              />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}


{/* <SortingSidebar
  setFilter={this.props.setFilter}
  filter={this.props.filter}
/> */}
{/* <Segment>
  <NavBar
    clearSelections={this.props.clearSelections}
    setURLPath={this.props.setURLPath}
    setUser={this.props.setUser}
    username={this.props.username}
  />
</Segment> */}
{/* <ExpandedInfo
  API={this.props.API}
  selectedPrograms={this.props.selectedPrograms}
 /> */}
      // <Menu color="grey" fluid vertical tabular>
      //   <Menu.Item header as="h1">
      //     Previous Blog Posts
      //   </Menu.Item>
      //   {this.props.user_blogs.map(blogObject => {
      //     <Menu.Item
      //       name="All"
      //       active=}
      //       onClick={() => {
      //       props.setFilter("");
      //       }}>
      //     </Menu.Item>})
      //   }
      // </Menu>