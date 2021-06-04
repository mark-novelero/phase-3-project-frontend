import React from 'react';
import './siteBlogPage.css'



export default class SiteStories extends React.Component{


render() {
    return (
      <div>    
        <p className = "blogfont">{this.props.story}</p>
      </div>
    )
  }
}