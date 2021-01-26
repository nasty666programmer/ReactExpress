import {useState} from 'react';

function LoginForm({Login}) {
    const [details,setDetails] = useState({
        log:'',
        pass: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter the Login</label>
                <input style={{width:'20rem'}} type='text' name='login' value={details.log} onChange={(e) => setDetails({...details, log:e.target.value})} />
                <label>Enter the password</label>
                <input type='password' name='password' value={details.pass} onChange={(e) => setDetails({...details, pass:e.target.value})}/>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;