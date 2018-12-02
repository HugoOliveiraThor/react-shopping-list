import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './common/Header'
import Home from './home/index'
import CreateList from './createList/index'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
        <Router>
          <React.Fragment>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lista' component={CreateList} />
          </Switch>
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
