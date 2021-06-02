import React from 'react';
import FixedHeader from './fixed_header/FixedHeader';
import MainPage from './main_component/MainPage';
import "./App.css"



export default class App extends React.Component{
  state = {
    photos: [], 
    selectPhoto: [],  
    blogs: [] 
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
      <div className= "main">
        <FixedHeader></FixedHeader>
        <MainPage mainPhoto = {this.state.selectPhoto} addNewBlog= {this.addNewBlog}></MainPage>
        <br></br>
      </div>
    )
  }
}