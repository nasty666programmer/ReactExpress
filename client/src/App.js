import FormCheck from './Components/FormCheck';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
  nav:{
        width:'100%',
        height:'2rem',   
        fontSize:'1.5rem',
        textAlign:'center',    
  },
  links: {
    margin:'1rem',
    textDecoration:'none'
  },
  iconExit: {
    display:'block',
    marginLeft:'auto',
    marginRight:'auto'
  }
});

function App(props) {
  let classes = useStyles();

  return (
    <Router>
    <div >
      <header>
          <nav className={classes.nav}>
            <Link to='/form-check'><span  className={classes.links}>Форма для заполнения</span></Link>
          </nav>
          <img  className={classes.iconExit} onClick={props.Logout} src="https://img.icons8.com/wired/32/000000/exit.png"/>
      </header>
      <div>
        <Switch >
          <Route path='/form-check'>
            <FormCheck />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
