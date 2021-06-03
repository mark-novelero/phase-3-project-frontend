import React from 'react'
import './header.css';
import { useHistory } from 'react-router-dom';


const FixedHeader = (props) => {

  const history = useHistory()

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