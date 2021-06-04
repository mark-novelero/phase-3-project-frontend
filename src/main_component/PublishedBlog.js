import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import "./publishedBlog.css"


export default class Blog extends React.Component{


render() {
    return (
      <div>
         <div>
           <br></br>
      <Container>
        <img className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>
        <br></br>
        <p className = "blogfont">{this.props.currentStory}</p>
        <br></br>
        <br></br>
        <br></br>
        <Button.Group attached='bottom'>
                <Button  color = "gray">Published</Button>
        </Button.Group>
      </Container>
      </div>  
    </div>
    )
  }
}