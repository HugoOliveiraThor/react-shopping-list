import React, { Component } from 'react'
import { InputAdornment, MenuItem, TextField, Button } from '@material-ui/core';

const units = ['kilo','litro','unidade']

const initialState = {
  list: '',
  product: '',
  quantity: '',
  unit: '',
  price: '',
  showErrors:false
}

class Form extends Component {
  
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    const {list, product , quantity, unit , price} = this.state
    if( !list || !product || !quantity ||  !unit || !price) {
      this.setState({ showErrors: true })
    } else {
      this.props.addProduct({product , quantity, unit , price}, list)
      this.setState(initialState)
    }
  }

  render() {
    return (
      <form className='form-container'>
        <div className='form-row'>
        <TextField
              label="Lista"
              name='list'
              value={this.state.list}
              onChange={this.handleChange}
              required
              error={!this.state.list && this.state.showErrors}
            />
        <Button variant='outlined' color='secondary' onClick={this.handleSubmit}>Adicionar</Button>
        </div>
        <div className='form-row'>    
        <TextField
              label="Produto"
              name='product'
              value={this.state.product}
              onChange={this.handleChange}
              required
              error={!this.state.product && this.state.showErrors}
            />
        <TextField
              label="Quantidade"
              name='quantity'
              value={this.state.quantity}
              onChange={this.handleChange}
              required
              error={!this.state.quantity && this.state.showErrors}
            />
         <TextField
              select
              label="Unidade"
              name='unit'
              value={this.state.unit}
              onChange={this.handleChange}
              required
              error={!this.state.unit && this.state.showErrors}
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
              value={this.state.price}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position='start'>R$</InputAdornment>
              }}
            />              
             </div>
        </form>
    )
  }
} 

export default Form