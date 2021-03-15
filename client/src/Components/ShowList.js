import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import FavoriteTeam from './FavoriteTeam';
import ShowChecking from './ShowChecking';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  footer:{
        width:'100%',
        height:'2rem',
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

        <Switch>
            <Route exact path='/showChecking' >
                <ShowChecking />
            </Route>
            <Route path='/favoriteTeam'>
                <FavoriteTeam />
            </Route>
        </Switch>

    <BottomNavigation value={value}  onChange={(event, newValue) => {setValue(newValue)}} showLabels className={classes.root,classes.footer} >
      <BottomNavigationAction  to='/showChecking' component={Link} label="Список Блоков" icon={<RestoreIcon />} />
      <BottomNavigationAction to='/favoriteTeam' component={Link} label="sos3" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
        </div>
        </Router>
    )
}

export default ShowList;