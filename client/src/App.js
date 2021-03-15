import About from './Components/About';
import FormCheck from './Components/FormCheck';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';


function App(props) {
  return (
    <Router>
    <div >
      <header>
          <nav>
            <Link to='/formsCheck'><a><span >Форма для заполнения</span></a></Link>
            <Link to='/about'><a><span >О проекте </span></a></Link>
          </nav>
          <img onClick={props.Logout} src="https://img.icons8.com/wired/32/000000/exit.png"/>
      </header>
      <div>
      <Switch >
        <Route path='/formsCheck'>
          <FormCheck />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      </div>
      <footer>
        
        <span>©ZNU,2021г.</span>
        <span >Инстаграм</span>
      </footer>
    </div>
    </Router>
  );
}

export default App;
