import React from 'react';
import { Segment, Button, Image } from 'semantic-ui-react';
import './siteBlogPage.css'
import SiteStories from './SiteStories';



export default class SiteBlogPage extends React.Component{


render() {
    return (
      <div>
         
       
            <Image size = "massive" className= "mainImage" src= {this.props.siteSelectedPhoto.photo_url} ></Image>
                <br></br>
            
            <div>{this.props.siteStories.map(story=> <SiteStories story= {story.story}/>)} </div>
       
        
      </div>
    )
  }
}