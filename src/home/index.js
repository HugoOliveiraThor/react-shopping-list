import React from 'react'
import { Card, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'
import './home.css'
import CustomCard from '../common/CustomCard'


const Home = () => (
  <div className='page-container'>
      <CustomCard containerClass='new-list-container'>
        <div>
          <p className='title'>Adicionar Novas Listas!</p>
        </div>
      </CustomCard>
      <CustomCard 
        containerClass='list-container'
        footer={
          <div className='list-footer'>
            <p>01/01/2018</p>
            <p>100.00</p>
          </div>
        }
        >
      <div>
        <p className='title'>Mês</p>
        <div className='list-card-body'>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
            <p>1 Item(s) restante</p>
          </div>
          <div className='list-card-item'>
            <FontAwesomeIcon icon={faCheck} size='sm' />
            <p>2 Item(s) comprados</p>
          </div>
        </div>
      </div>
      </CustomCard>
    {/* 
    <div className='list-container'>
      <Card className='card'>
        <CardActionArea className='card-action-area'>
          <CardContent className='card-content'>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions className='card-footer'>
          <p>01/01/2018</p>
          <p>100.00</p>
        </CardActions>
      </Card>
    </div> */}
  </div>
)

export default Home