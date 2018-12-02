import React from 'react'
import { InputAdornment, MenuItem, TextField, Button } from '@material-ui/core';

const units = ['kilo','litro','unidade']


const Form = props => (
  <form className='form-container'>
    <div className='form-row'>
    <TextField
          label="Lista"
          name='list'
          value={''}
          onChange={() => {}}
          required
        />
    <Button variant='outlined' color='secondary'>Adicionar</Button>
    </div>
    <div className='form-row'>    
    <TextField
          label="Produto"
          name='product'
          value={''}
          onChange={() => {}}
          required
        />
    <TextField
          label="Quantidade"
          name='quantity'
          value={''}
          onChange={() => {}}
          required
        />
     <TextField
          select
          label="Unidade"
          name='unity'
          value={''}
          onChange={() => {}}
          required
      >
        {
          units.map((o,idx) => (
            <MenuItem key={idx} value={o}>{o}</MenuItem>
          ))
        }
      </TextField>
     <TextField
          label="Preço"
          name='price'
          value={''}
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>
          }}
        />              
         </div>
    </form>
)

export default Form