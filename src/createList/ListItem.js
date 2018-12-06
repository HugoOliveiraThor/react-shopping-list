import React from 'react'
import CustomCard from '../common/CustomCard';
import '../common/CustomCard.css';
import ListItemFooter from './ListItemFooter';
import { Typography, Checkbox } from '@material-ui/core';

const ListItem = () => (
    <CustomCard
      footer={<ListItemFooter />}
      containerClass='list-item'
      image='http://clacri.com.br/wp-content/uploads/2015/07/capa4.jpg'
      link='#'>
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>Café</Typography>
          <Checkbox />
        </div>
        <Typography component='p'>1 Unidade</Typography>
        <Typography component='p'>R$ 10.00</Typography>
      </div>
    </CustomCard>
)

export default ListItem