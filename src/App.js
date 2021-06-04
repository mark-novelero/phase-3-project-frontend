import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import FixedHeader from './fixed_header/FixedHeader';
import MainPage from './main_component/MainPage';
import LoginPage from './LoginPage';
import NewStory from './new_story/NewStory';
import UserCollection from './user_collection/UserCollection';

export default class App extends Component{
  state = {
    photos: [], 
    selectPhoto: [],
    blogs: [],
    username: '',
    userId: null,
    user_blogs: [],
    selected_user: null,
    selected_blog: []
  }

  setUser = (userObject) => {
    this.setState({
      username: userObject.username,
      userId: userObject.id
    })
  }

  setSelectedBlog = (blogObject) => {
    this.setState({
      selected_blog: blogObject.blog
    })
  }

  setSelectedUser = (user) => {
    this.setState({
      selected_user: user.user_id
    })

  }
  setUserBlogs = () => {
    let blogsToDisplay = [...this.state.blogs].filter(blogObject => blogObject.user_id.includes(this.state.userId))
    this.setState({
      user_blogs: blogsToDisplay
    })
  }

  componentDidMount(){

    let randomIndex = Math.floor(Math.random() * 30)

      fetch('http://localhost:9292/photos')
      .then(res => res.json())
      .then(photographs => this.setState(
          {photos: photographs, 
           selectPhoto: photographs[randomIndex],
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

  addToSelectedBlog = (blogObj) =>{
    this.setState({selected_blog: this.state.selected_blog.shift()})
    let newSelectedBlog=[...this.state.selected_blog]
    newSelectedBlog.push(blogObj)
    this.setState({selected_blog: newSelectedBlog})
  }



  render() {

    return (
      <Router>
        <div className= "main">
          <Route path='/'>
            <FixedHeader setUser={this.setUser}/>
          </Route>
          <Switch>
            <Route exact path='/'>
              <LoginPage setUser={this.setUser} username={this.state.username} userId={this.state.username} />
            </Route>
            <Route exact path='/Home'>
              <MainPage />
            </Route>
            <Route exact path='/UserCollection'>
              <UserCollection username={this.state.username} userId={this.state.userId} mainPhoto={this.state.selectPhoto} user_blogs={this.state.user_Blogs} selected_blog={this.state.selected_blog} addToSelectedBlog={this.addToSelectedBlog} blogs={this.state.blogs} setSelectedBlog={this.setSelectedBlog} />
            </Route>
            <Route exact path='/NewStory'>
              <NewStory mainPhoto = {this.state.selectPhoto} userId={this.state.username} username={this.state.username} addNewBlog={this.addNewBlog} addToSelectedBlog={this.addToSelectedBlog} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}