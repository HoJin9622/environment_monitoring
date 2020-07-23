import React from 'react';
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  drawer: {
    width: '155px',
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemList = [
    { text: '홈', icon: <HomeIcon />, onClick: () => history.push('/') },
    {
      text: '대시보드',
      icon: <DashboardIcon />,
      onClick: () => history.push('/dashboard'),
    },
  ];

  return (
    <MUIDrawer variant='permanent' className={classes.drawer}>
      <List>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={index} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
