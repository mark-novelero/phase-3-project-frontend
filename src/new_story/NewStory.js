import React from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon } from 'semantic-ui-react'


export default class NewStory extends React.Component {

state = {
  user_ids: 22, 
  photo_ids: this.props.selectPhoto.id, 
  story: ""
}

handleFormState = (e) => {
  this.setState({
    story: e.target.value
  })
}


 render() {
   return (
  
      <div>
        <Segment>
          <Image size= "huge" fluid src= {this.props.mainPhoto.photo_url}></Image>
          <Form onSubmit= {() => {
                this.props.addNewBlog(this.state)
                this.props.addToSelectedBlog(this.state)
                }}>
            <TextArea onChange = {(e) => this.handleFormState(e)}> Your Story</TextArea>
            <Button inline color = "brown" size = "medium" centered >Publish</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}

