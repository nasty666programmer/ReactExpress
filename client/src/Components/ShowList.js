import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom';
import FavoriteTeam from './FavoriteTeam';
import ShowChecking from './ShowChecking';
import About from './About';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  footer:{
    minHeight:'2rem',
        width:'100%',
        height:'1%',
        position: 'fixed',
        left: '0',
        bottom:2, 
  }
});


function ShowList() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return (
          <Router>
            <div> 
              <Redirect to='/about' />
              <Switch>
                  <Route path='/show-checking' >
                      <ShowChecking />
                  </Route>
                  <Route path='/about' >
                      <About />
                  </Route>
                  <Route path='/team-sos3'>
                      <FavoriteTeam />
                  </Route>
              </Switch>

            <BottomNavigation value={value}  onChange={(event, newValue) => {setValue(newValue)}} showLabels className={classes.root,classes.footer} >
            <BottomNavigationAction  to='/show-checking' component={Link} label="Список Посещений" icon={<RestoreIcon />} />
            <BottomNavigationAction to='/team-sos3' component={Link} label="sos3" icon={<FavoriteIcon />} />
            </BottomNavigation>
          </div>
        </Router>
    )
}

export default ShowList;