import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import FixedHeader from './fixed_header/FixedHeader';
import MainPage from './main_component/MainPage';
import "./App.css"
import Blog from './main_component/PublishedBlog';
import SiteCollection from './SiteCollection/SiteCollection';



export default class App extends React.Component{


  state = {
    allUsers: [],
    photos: [], 
    selectPhoto: [],  
    blogs: [], 
    display: true, 
    siteSelectedPhoto: [], 
    siteStories: [], 
    siteCollectionDisplay: "collection"
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

      fetch('http://localhost:9292/users')
      .then(res => res.json())
      .then(users => this.setState(
        {allUsers: users}
      ))
  } 

siteCollectionPhoto = (obj) =>{  
  const siteCollectionStories = this.state.blogs.filter(blogo => blogo.photo_ids === obj.id)
  
  this.setState({
    siteSelectedPhoto: obj, 
    siteStories: [...siteCollectionStories],
    siteCollectionDisplay: "blog"
  })
}

addNewBlog = (blogObj) =>{
    let newBlog = {
      user_ids: blogObj.user_ids, 
      photo_ids: blogObj.photo_ids, 
      story: blogObj.story 
    }
    this.setState({
      currentStory: blogObj.story
    })

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

displayChange= () => {
  this.setState({
    display: !this.state.display
  })
}


switchPhoto= () => {
  let randomIndex2 = Math.floor(Math.random() * 30)
  this.setState({
    selectPhoto: this.state.photos[randomIndex2]
  })
}




  render() {
   
   
    console.log()

    return (
      <div className= "main">
        <FixedHeader></FixedHeader>
        <SiteCollection sitePhotos = {this.state.photos} siteCollectionPhoto = {this.siteCollectionPhoto}
        siteSelectedPhoto = {this.state.siteSelectedPhoto} siteStories= {this.state.siteStories}
        siteDisplay = {this.state.siteCollectionDisplay}></SiteCollection>
        </div>
    )
  }
}

