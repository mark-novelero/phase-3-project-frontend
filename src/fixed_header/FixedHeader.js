import React from 'react'
import './header.css';


const FixedHeader = (props) => {
  return(
    <header className = "header">
        <nav className = "headerMenu">
            <a href="#">Create New Story</a>
            <a href="#">User Collection</a>
            <a href="#">Site Collection</a>
        </nav>

    </header>
   )
 }

export default FixedHeader