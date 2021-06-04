import React from 'react'
import SiteBlogPage from './SiteBlogPage'
import SiteCards from './SiteCards'
import './siteCollection.css'




export default class SiteCollection extends React.Component {

    render(){ 
       
        return(
            <div className="site_photos">
            {this.props.siteDisplay === "collection" ? this.props.sitePhotos.map(photos => <SiteCards  siteCollectionPhoto = {this.props.siteCollectionPhoto} photo = {photos}/>)
            : <SiteBlogPage siteSelectedPhoto = {this.props.siteSelectedPhoto} siteStories = {this.props.siteStories}></SiteBlogPage>} 
           
            </div>
        )
    }

}