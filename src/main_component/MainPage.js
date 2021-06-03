import React from 'react';
import { Container } from 'semantic-ui-react';
import MContainer from './MContainer';

export default class MainPage extends React.Component{


  render() {
    return (
      <div>
          <br></br>
          <br></br>
        <MContainer mainPhoto = {this.props.mainPhoto} addNewBlog = {this.props.addNewBlog}></MContainer>
      </div>
    )
  }
}