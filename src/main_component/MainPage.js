import React from 'react';
import { Container } from 'semantic-ui-react';
import './MainPage.css';
import PublishedBlog from './PublishedBlog';


export default class MainPage extends React.Component{

  state = {
    currentStory: ""
  }

  currentStory= (e)=>{
    this.setState({
      currentStory: e.target.value
    })
  }

  render() {
    return (
      <div>
          <br></br>
          <br></br>
          
        {this.props.display === true ? <MainPage switchPhoto = {this.props.switchPhoto} 
        mainPhoto = {this.props.mainPhoto} addNewBlog = {this.props.addNewBlog}
        displayChange = {this.props.displayChange} currentStory = {this.currentStory}></MainPage>: 
        <PublishedBlog mainPhoto = {this.props.mainPhoto} currentStory= {this.state.currentStory}
        displayChange = {this.props.displayChange}></PublishedBlog>}
      </div>
    )
  }
}