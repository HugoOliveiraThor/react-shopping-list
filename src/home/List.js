import React from 'react'
import CustomCard from '../common/CustomCard'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'
import './list.css'
import ListFooter from './ListFooter'
import ListItem from './ListIem'


const List = () => (
  <CustomCard
    containerClass='list-container'
    link='/lista'
    footer={<ListFooter />}
  >
    <div>
      <p className='title'>Mês</p>
      <div className='list-card-body'>
        <ListItem icon={ faShoppingBasket } text='1 Item restante'/>
        <ListItem icon={ faCheck } text='2 Item comprados'/>
      </div>
    </div>
  </CustomCard>
)

export default List