import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react';
import './siteCollection.css'

export default class SiteCards extends Component {
    render(){
        return (
        <div className="site_photos">
            <br></br>
            <img onClick = {() => this.props.siteCollectionPhoto(this.props.photo)}  src= {this.props.photo.photo_url} className="site_photos" alt="..." /> 
        </div>
        )
    }
    
    
}