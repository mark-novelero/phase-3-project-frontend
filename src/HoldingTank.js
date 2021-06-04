
//Create Story file
<MainPage mainPhoto = {this.state.selectPhoto} addNewBlog= {this.addNewBlog} 
        switchPhoto = {this.switchPhoto} freshPage= {this.freshPage} display= {this.state.display}
        displayChange = {this.displayChange}></MainPage>

       
       
       
<SiteCollection sitePhotos = {this.state.photos} siteCollectionPhoto = {this.siteCollectionPhoto}
        siteSelectedPhoto = {this.state.siteSelectedPhoto} siteStories= {this.state.siteStories}
        siteDisplay = {this.state.siteCollectionDisplay}></SiteCollection>

       <SiteCollection sitePhotos = {this.state.photos} siteCollectionPhoto = {this.siteCollectionPhoto}
        siteSelectedphoto = {this.state.siteSelectedPhoto} siteStories= {this.state.siteStories}></SiteCollection>

        <SiteBlogPage siteSelectedPhoto = {this.props.siteSelectedPhoto} siteStories = {this.props.siteStories}></SiteBlogPage>

        {this.props.siteDisplay === "collection" ? this.props.sitePhotos.map(photos => <SiteCards  siteCollectionPhoto = {this.props.siteCollectionPhoto} photo = {photos}/>)
            : <SiteBlogPage siteSelectedPhoto = {this.props.siteSelectedPhoto} siteStories = {this.props.siteStories}></SiteBlogPage>}