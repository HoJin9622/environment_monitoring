import React from 'react';
import { withRouter } from 'react-router-dom';

const Drawer = (props) => {
  const { history } = props;
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
