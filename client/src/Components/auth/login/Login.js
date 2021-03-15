import LoginForm from './LoginForm';
import {useEffect, useState} from 'react';
import App from '../../../App';
import axios from 'axios';

function Login() {
   const [adminUser,setAdminUser] = useState();

    useEffect(() => {
        axios.get('/login').then(res => setAdminUser({...res.data}))
        .catch(err => console.log(err))
    },[])

        console.log(adminUser)
    const [log,setLog] = useState({
        log:'',
        pass: ''
    });
    const [error,setError] = useState('');

    const Login = details => {
        if(details.log == adminUser.log && details.pass == adminUser.pass) {
            setLog({
                log:details.log,
                pass:details.pass
        })
    }
    }

    const Logout = () => {
        setLog({log:'',pass:''})
    }

    return (
        <div>
            {log.log != '' ? <App Logout={Logout}/> : <LoginForm Login={Login}/>}
        </div>
    )
}

export default Login;