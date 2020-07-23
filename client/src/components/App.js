import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Dashboard from '../routes/Dashboard';
import Drawer from './Drawer';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Drawer />
        <Grid container>
          <Grid xs={0} sm={2} />
          <Grid xs={12} sm={8}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </Grid>
          <Grid xs={0} sm={2} />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
