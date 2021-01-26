import About from './Components/About';
import FormCheck from './Components/FormCheck';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <Router>
    <div className="App">
      <header>
          <nav className='navigation'>
            <Link to='/formsCheck'><a><span className='linksForm'>Форма для заполнения</span></a></Link>
            <Link to='/about'><a><span className='linksAbout'>О проекте </span></a></Link>
          </nav>
          <img onClick={props.Logout} src="https://img.icons8.com/wired/32/000000/exit.png"/>
      </header>
      <div className='content'>
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
        <a href='https://t.me/obshhaga3_chat'><span className='linksSocialApp'>Телеграм</span></a>
        <span id='marker'>©ZNU,2021г.</span>
        <span className='linksSocialApp'>Инстаграм</span>
      </footer>
    </div>
    </Router>
  );
}

export default App;
