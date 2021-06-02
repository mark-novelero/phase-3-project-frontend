import React from 'react';
import FixedHeader from './fixed_header/FixedHeader';
import MainPage from './main_component/MainPage';
import "./App.css"

export default class App extends React.Component{

  state = {
    photos: [], 
    selectPhoto: []
  }

  componentDidMount(){

    let randomIndex = Math.floor(Math.random() * 30)

      fetch('http://localhost:9292/photos')
      .then(res => res.json())
      .then(photographs => this.setState(
          {photos: photographs, 
           selectPhoto: photographs[randomIndex]
        }
      )
    )    
}


  render() {
    return (
      <div className= "main">
        <FixedHeader></FixedHeader>
        <br></br>
        <MainPage mainPhoto = {this.state.selectPhoto}></MainPage>
        <br></br>
      </div>
    )
  }
}