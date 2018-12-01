import React from 'react'

import './home.css'
import CustomCard from '../common/CustomCard'
import NewList from './NewList'
import List from './List'


const Home = () => (
  <div className='page-container'>
    <NewList />
    <List />
  </div>
)

export default Home