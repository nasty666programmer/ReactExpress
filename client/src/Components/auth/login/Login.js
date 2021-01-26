import LoginForm from './LoginForm';
import {useState} from 'react';
import App from '../../../App';

function Login() {
    const adminUser = {
        log:'admin',
        pass:'admin'
    }

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