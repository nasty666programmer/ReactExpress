import React,{useState} from 'react';
import Login from "./Components/auth/login/Login";
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';
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
import UserGuid from './UserGuid';
import MenuIcon from '@material-ui/icons/Menu';
import TodayIcon from '@material-ui/icons/Today';
import './fonts/fonts.css';

const useStyles = makeStyles({
  list: {
    width: 250,
    height:200
  },
  fullList: {
    width: 'auto',
  },
  root: {
    color: '#eaa70a',
    fontSize: 'large'
  },
  menu: {
    backgroundColor:'#ececec',
    fontSize:'3rem',
    height:'auto'
  },
  links: {
    fontSize:'3rem'
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
          <List className={classes.menu}>
            {['Login'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText><Link style={{textDecoration:'none'}} to='/login'><span>Вход в кабинет</span></Link></ListItemText>
                
              </ListItem>
            ))}
             {['Показать список блоков'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <TodayIcon /> : <TodayIcon />}</ListItemIcon>
                <Link to='/show-list' style={{textDecoration:'none'}}><ListItemText className={classes.links}>Список проверок</ListItemText></Link>
                
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      );

    return (
        <Router history={browserHistory}>
          <div className={'fonts'}>
          {['menu'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button  className={classes.root} onClick={toggleDrawer(anchor, true)}><MenuIcon />{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

            <Redirect to='/guid' />
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/show-list'>
                    <ShowList />
                </Route>
                <Route path='/guid'>
                    <UserGuid />
                </Route>
            </Switch>
          </div>
        </Router>
     )
 }

 export default Main;