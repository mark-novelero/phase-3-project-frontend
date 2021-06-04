import React from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon } from 'semantic-ui-react'
import './mcontainer.css'

export default class MContainer extends React.Component {

state = {
  user_ids: 22, 
  photo_ids: this.props.mainPhoto.id, 
  story: ""
}

handleFormState = (e) => {
  this.setState({
    story: e.target.value, 
    photo_ids: this.props.mainPhoto.id
  })
}

 render(){
   return (
  
      <div id= "cf2">
        <Segment>
        <img onClick = {() => this.props.switchPhoto()}  className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>
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

