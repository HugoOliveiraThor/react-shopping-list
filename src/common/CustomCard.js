import React from 'react'
import { Card, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core'
import './CustomCard.css'


const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Card className='card'>
      <CardActionArea className='card-action-area'>
        <CardContent className='card-content'>
          {props.children}
        </CardContent>
      </CardActionArea>
      {props.footer && [
        <Divider />,
        <CardActions className='card-footer'>
          {props.footer}
        </CardActions>
      ]}
    </Card>
  </div>
)

export default CustomCard