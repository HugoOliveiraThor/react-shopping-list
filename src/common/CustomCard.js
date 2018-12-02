import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core'
import './CustomCard.css'
import { Link } from 'react-router-dom'


const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Link to={props.link}>
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
    </Link>
  </div>
)

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element
}

export default CustomCard