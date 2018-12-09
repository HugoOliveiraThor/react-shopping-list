import React from 'react'
import CustomCard from '../common/CustomCard';
import '../common/CustomCard.css';
import ListItemFooter from './ListItemFooter';
import { Typography, Checkbox } from '@material-ui/core';

const ListItem = ({item, deleteProduct, toggleProduct}) => (
    <CustomCard
      footer={<ListItemFooter item={item} deleteProduct={ deleteProduct } />}
      containerClass='list-item'
      image='http://clacri.com.br/wp-content/uploads/2015/07/capa4.jpg'
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