import React from 'react'
import CustomCard from '../common/CustomCard';
import '../common/CustomCard.css';
import ListItemFooter from './ListItemFooter';
import { Typography, Checkbox } from '@material-ui/core';

const ListItem = ({item, deleteProduct, toggleProduct, list}) => (
    <CustomCard
      footer={<ListItemFooter list={list} item={item} deleteProduct={ deleteProduct } />}
      containerClass='list-item'
      image={item.img}
      link='#'>
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>{item.product}</Typography>
          <Checkbox onClick={() => toggleProduct(item.id)} checked={item.checked} />
        </div>
        <Typography component='p'>{item.unit}</Typography>
        <Typography component='p'>R$ {item.price}</Typography>
      </div>
    </CustomCard>
)

export default ListItem