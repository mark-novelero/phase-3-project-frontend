import React, {useState} from 'react'
import './header.css';
import { useHistory } from 'react-router-dom';
import { Menu, Message} from 'semantic-ui-react'

const FixedHeader = (props) => {

  const history = useHistory()
  const [loginPrompt, setLoginPrompt] = useState(false)

  return(
    <div>
      <Menu>
        <Menu.Item
          name='createNewStoryButtn'
          onClick={() => {
            if (props.username !== '') {
              history.push('/NewStory')
            } else {
              setLoginPrompt(true)
              setTimeout(() => setLoginPrompt(false), 2500)
            }
          }}
        >
          Create New Story
        </Menu.Item>

        <Menu.Item 
          name='userCollection'
          onClick={() => {
            if (props.username !== '') {
              history.push('/UserCollection')
            } else {
              setLoginPrompt(true)
              setTimeout(() => setLoginPrompt(false), 2500)
            }
          }}
        >
          User Collection
        </Menu.Item>

        <Menu.Item 
          name='siteCollection'
          onClick={() => {
            if (props.username !== '') {
              history.push('/SiteCollection')
            } else {
              setLoginPrompt(true)
              setTimeout(() => setLoginPrompt(false), 2500)
            }
          }}
        >
          Site Collection
        </Menu.Item>

        <Menu.Item name='userLogoutButton' onClick={() => {
          history.push("/")
          props.setUser({username: '', userId: null})
        }}
          >
            Log Out
          </Menu.Item>
      </Menu>
      {loginPrompt ? <Message header='Please log in' content='This feature is only available to registered users. Please log in and try again.'/> : null}
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