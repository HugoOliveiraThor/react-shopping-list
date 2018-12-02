import React from 'react'
import { Checkbox , Typography } from '@material-ui/core'
import './list.css'
import Form from './Form'
import CustomCard from '../common/CustomCard'

const CreateList = () => (
  <div className='page-container'>
    <Form />
    <CustomCard 
      footer='' 
      containerClass='list-item' 
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
    <div className='list-items-container'>

    </div>

  </div>
)

export default CreateList