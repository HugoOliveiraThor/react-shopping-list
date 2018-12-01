import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#f50057',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position='static' color='primary'>
        <div className='header'> 
          <p className='title'>Lista de compras</p>
        </div>
      </AppBar>
      </MuiThemeProvider>
    )
  }
}

export default App;
