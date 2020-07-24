import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Dashboard from '../routes/Dashboard';
import Drawer from './Drawer';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url('/images/main.jpg');
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
`;

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
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
