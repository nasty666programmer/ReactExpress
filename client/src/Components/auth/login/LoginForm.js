import React,{useEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import {BounceLoader} from 'react-spinners';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      
      height:'350px'
    },
    menuButton: {
      marginTop:theme.spacing(3)
    },
    forms: {
        marginTop:theme.spacing(25)
    },
    textField: {
        width: '20rem',
        textAlign:'center'
    }
  }))

function LoginForm({Login}) {
    const [details,setDetails] = useState({
        log:'',
        pass: ''
    });

    const classes = useStyles();
    const [isComplete,setIsComplete] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.currentTarget;
        setDetails({...details,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.post('/login',details)
            .then(response => {
                localStorage.setItem('hash', response.data);
                Login(response.data);
            })
            .catch(error => console.log(error))
        setDetails({...details,log:'',pass:''});
    }
    
    const loaderAuth = () => {
        setTimeout(() => setIsComplete(!isComplete),1500)
    }

    return (
        <div className={classes.forms}>
            <form onSubmit={handleSubmit} className={classes.root} noValidate align='center'>
                <TextField className={classes.textField} id="standard-basic" label="Login"  value={details.log} onChange={(e) => setDetails({...details, log:e.target.value})}  type='text' name='login'/>
                <br/>
                <TextField className={classes.textField} d="standard-basic" label="Password"  value={details.pass} onChange={(e) => setDetails({...details, pass:e.target.value})}  type='password' name='password'  />
                <br/>
                { isComplete ? <BounceLoader /> : <Button onClick={loaderAuth} align='center' className={classes.menuButton} color='primary' type='submit' variant='contained'>Log In</Button>}
            </form>
        </div>
    )
}

export default LoginForm;