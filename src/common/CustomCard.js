import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent, CardActions, Divider, CardMedia } from '@material-ui/core'
import './CustomCard.css'
import { Link } from 'react-router-dom'


const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className='card'>
        <CardActionArea onClick={props.action} className='card-action-area'>
          {props.image &&
            <CardMedia
              component='img'
              className='card-img'
              height='100'
              image={props.image}
              title='image'
            >
            </CardMedia>
          }
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
    </Link>
  </div>
)

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  link:PropTypes.string.isRequired,
  image:PropTypes.string
}

export default CustomCard