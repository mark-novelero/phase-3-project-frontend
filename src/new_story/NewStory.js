import React, { Component } from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon } from 'semantic-ui-react'
import './NewStory.css'

export default class NewStory extends React.Component {

state = {
  user_ids: 22, 
  photo_ids: this.props.selectPhoto.id, 
  story: ""
}

handleFormState = (e) => {
  this.setState({
    story: e.target.value, 
    photo_ids: this.props.selectPhoto.id
  })
}


 render() {
   return (
  
      <div id= "cf2">
        <Segment>
          {/* <Image size= "huge" fluid src= {this.props.selectPhoto.photo_url}></Image>
          <Form onSubmit= {() => {
                this.props.addNewBlog(this.state)
                this.props.addToSelectedBlog(this.state)
                }}>
            <TextArea onChange = {(e) => this.handleFormState(e)}> Your Story</TextArea>
            <Button inline color = "brown" size = "medium" centered >Publish</Button> */}
        <img onClick = {() => this.props.switchPhoto()}  className= "mainPhoto" src= {this.props.selectPhoto.photo_url}></img>
        <br></br>
          <Form onSubmit= {() => this.props.addNewBlog(this.state)} >
            <TextArea placeholder= "Your story" onChange = {(e) => this.handleFormState(e)} 
            onChange= {(e)=> this.props.currentStory(e)} style={{ minHeight: 200 }}> Your Story</TextArea>
            <Button.Group attached='bottom'>
                <Button onClick= {() => this.props.displayChange()}  color = "gray">Publish</Button>
           </Button.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

