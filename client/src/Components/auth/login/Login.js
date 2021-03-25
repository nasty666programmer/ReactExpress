import LoginForm from './LoginForm';
import {useEffect, useState} from 'react';
import App from '../../../App';
import axios from 'axios';

function Login() {
   const [adminUser,setAdminUser] = useState();


    const [log,setLog] = useState({
        log:'',
    });
    const [error,setError] = useState('');

    const Login = details => {
       setLog(details);
  }
  console.log(log.log)
    const Logout = () => {
        setLog({log:''})
    }

    return (
        <div>
            {localStorage.getItem("hash") ? <App Logout={Logout}/> : <LoginForm Login={Login}/>}
        </div>
    )
}

export default Login;