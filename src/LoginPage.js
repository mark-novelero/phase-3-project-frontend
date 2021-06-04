import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Button, Segment, Header, Divider, Grid, Message } from 'semantic-ui-react'

const LoginPage = (props) => {
    
    const [badLogin, setBadLogin] = useState(false)
    const [badRegister, setBadRegister] = useState(false)
    const history = useHistory()
    let foundUserObject
    let blogsToDisplay

    const checkIfUserExists = (userString) => {

        return fetch('http://localhost:9292/users')
            .then(r => r.json())
            .then(fetchedArray => {
                foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
            })
    }

    const createUserBlogs = (userObj) => {
        blogsToDisplay = [...props.blogs]
        blogsToDisplay.forEach(blogObject => {
            if (blogObject.user_ids === userObj.Id) {
                props.setUserBlogs(blogObject)
            }
        })
    }

    // setUserBlogs = (userblog) => {
    //     let newUserBlogs=[...this.state.user_blogs]
    //     newUserBlogs.push(userblog)
    //     this.setState({
    //       user_blogs: newUserBlogs
    //   })}

    const login = (e) => {
        checkIfUserExists(e.target.loginInput.value)
        .then(() => {
             if (foundUserObject !== undefined) {
                props.setUser(foundUserObject)
                createUserBlogs(foundUserObject)
                history.push('/Home')
             } else {
                 setBadLogin(true)
                 setTimeout(() => setBadLogin(false), 3000)
             }
            })
    }

    const register = (e) => {
        checkIfUserExists(e.target.registerInput.value)
        .then(() => {
             if (foundUserObject === undefined) {
                let newUserObject = {
                    username: e.target.registerInput.value
                }
                return fetch("http://localhost:9292/users", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                  },
                     body: JSON.stringify(newUserObject),
                  })
                   .then (res => res.json())
                   .then (newUser => {
                    props.addNewUser(newUser)
                    props.setUser(newUser)
                    history.push('/Home')
                   })
            } else {
                setBadRegister(true)
                setTimeout(() => setBadRegister(false), 3000)
            }   
        })
    }

    return (
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2'>Existing User</Header>
                    <Form onSubmit={login}>
                        <Form.Input
                            id='loginInput'
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Button type='submit' content='Login' primary />
                    </Form>
                    {badLogin ? <Message negative header='User does not exist' content="This user is not registered. Try again, or register a new user" /> : null}
                </Grid.Column>
                <Grid.Column verticalAlign='middle'>
                    <Header as='h2'>New User</Header>
                    <Form onSubmit={register}>
                        <Form.Input
                            id='registerInput'
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Button content='Register' primary />
                    </Form>
                    {badRegister ? <Message negative header='User already exists' content="This user is already registered. Log in with this user, or create a different user." /> : null}
                </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
        </Segment>
    )
}
export default LoginPage