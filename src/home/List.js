import React from 'react'
import CustomCard from '../common/CustomCard'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'
import './list.css'
import ListFooter from './ListFooter'
import ListItem from './ListIem'


const List = props => (
  <CustomCard
    containerClass='list-container'
    link='/lista/edicao'
    footer={<ListFooter total={props.total} />}
    cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
  >
    <div>
      <p className='title'>{props.list}</p>
      <div className='list-card-body'>
        <ListItem icon={ faShoppingBasket } text={`${props.openedItems} Item restante`}/>
        <ListItem icon={ faCheck } text={`${props.closedItems} Item comprados`}/>
      </div>
    </div>
  </CustomCard>
)

export default List