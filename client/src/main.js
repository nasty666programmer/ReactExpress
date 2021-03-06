import React,{useState} from 'react';
import Login from "./Components/auth/login/Login";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import ShowList from "./Components/ShowList";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    marginLeft: '50%',
    color: '#eaa70a',
    fontSize: 'large'
  }
});

 
 function Main() {
    const classes = useStyles();
    const [state, setState] = useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open }); 
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'right',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Login'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText><Link to='/login'><span>Login</span></Link></ListItemText>
                
              </ListItem>
            ))}
             {['Показать список блоков'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link to='/showList'><ListItemText>Показать список блоков</ListItemText></Link>
                
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      );


     return (
         <Router>
         <div>
         {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  className={classes.root} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

        
             

             <Switch>
                 <Route path='/login'>
                    <Login />
                 </Route>
                 <Route path='/showList'>
                    <ShowList />
                 </Route>
             </Switch>
         </div>
         </Router>
     )
 }

 export default Main;