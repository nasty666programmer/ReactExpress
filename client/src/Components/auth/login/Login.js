import LoginForm from './LoginForm';
import {useEffect, useState} from 'react';
import App from '../../../App';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Login() {
   const [adminUser,setAdminUser] = useState();
    let history = useHistory();

    const [log,setLog] = useState({
        log:'',
    });
    const [error,setError] = useState('');

    const Login = details => {
       setLog(details);
  }
 
    const Logout = () => {
        localStorage.removeItem("hash");
        setLog({log:''});
    }

    return (
        <div>
            {localStorage.getItem("hash") ? <App Logout={Logout} /> : <LoginForm Login={Login}/>}
           
        </div>
    )
}

export default Login;