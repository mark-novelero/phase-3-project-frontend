import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import FixedHeader from './fixed_header/FixedHeader';
import MainPage from './main_component/MainPage';
import LoginPage from './LoginPage';

export default class App extends Component{
  state = {
    photos: [], 
    selectPhoto: [],
    username: '',
    userId: null
  }

  setUser = (userObject) => {
    this.setState({
      username: userObject.username,
      userId: userObject.id
    })
  }

  componentDidMount(){

    let randomIndex = Math.floor(Math.random() * 30)

      fetch('http://localhost:3000/photos')
      .then(res => res.json())
      .then(photographs => this.setState(
          {photos: photographs, 
           selectPhoto: photographs[randomIndex]
        }
      )
    )
    
      fetch('http://localhost:9292/blogs')
      .then(res => res.json())
      .then(userBlogs => this.setState(
        {blogs: userBlogs}
      ))
}


addNewBlog = (blogObj) =>{
    let newBlog = {
      user_ids: blogObj.user_ids, 
      photo_ids: blogObj.photo_ids, 
      story: blogObj.story 
    }

    fetch("http://localhost:9292/blogs", {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify(newBlog),
   })
    .then (res => res.json())
    .then (newBlogo => {
    this.setState({
      blogs: [...this.state.blogs, newBlogo]
    })
  })
}





  render() {

    return (
      <Router>
        <div className= "main">
          <Route path='/'>
            <FixedHeader/>
          </Route>
          <Switch>
            <Route exact path='/'>
              <LoginPage setUser={this.setUser}/>
            </Route>
            <Route exact path='/Home'>
              <MainPage mainPhoto = {this.state.selectPhoto} userId={this.state.username} username={this.state.username}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}