import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
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
        <div className="App">
          Ola
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
