import React from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon } from 'semantic-ui-react'


const MContainer = (props) => (
  <div>
  <Grid centered> 
    <Grid.Column width={7} columns={2}>
        <Image verticalAlign= "middle" size= "huge" bordered src= {props.mainPhoto.photo_url}></Image>
    </Grid.Column>
    <Grid.Column width={7} columns={2}>
      <Form>
        <TextArea placeholder='Your Story' rows = {2} style={{ minHeight: 450 }} />
      </Form>
    </Grid.Column>
  </Grid>
  <button className = "action"  ></button>
  </div>
)

export default MContainer 