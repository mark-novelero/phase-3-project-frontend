import React from 'react'
import './header.css';
import { useHistory } from 'react-router-dom';
import { Menu, Message } from 'semantic-ui-react'

const FixedHeader = (props) => {

  const history = useHistory()

  return(
    <div>
      <Menu>
        <Menu.Item name='createNewStoryButtn' onClick={() => {history.push('/NewStory')}}>Create New Story</Menu.Item>

        <Menu.Item name='userCollection' onClick={() => {if (props.username !== '') {history.push('/UserCollection')}}}>User Collection</Menu.Item>
        <Menu.Item name='userLogoutButton' onClick={() => {
          history.push("/")
          props.setUser({username: '', userId: null})}}>Log Out</Menu.Item>
      </Menu>
    </div>
    // <header className = "header">
    //     <nav className = "headerMenu">
    //         <a href="#">Create New Story</a>
    //         <a href="#">User Collection</a>
    //         <a href="#">Site Collection</a>
    //     </nav>

    // </header>
  )
 }

export default FixedHeader