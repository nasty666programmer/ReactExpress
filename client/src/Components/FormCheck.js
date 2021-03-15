import {useEffect, useState} from 'react';
import axios from 'axios';
import logo from '../imgages/sos3.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle,TextField} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    textField: {
        width: '29.375rem',
        textAlign:'center',
        marginTop:theme.spacing(2)
    },
    buttons: {
        marginTop:'1rem'
    }
  }))


function FormCheck() {
    let classes = useStyles()
    const shortid = require('shortid');
    const [forms,setForms] = useState({
        id:shortid.generate(),
        cause_1:' ',
        cause_2:'',
        date:null,
        listBlocks_1:'',
        listBlocks_2:''
    })
   const handleChange = (event) => {
       const {name,value} = event.currentTarget;
    setForms({...forms,
        [name]:value
       })
   }

    const handleSubmit = (event) => {
        console.log(forms)  
      
        axios.post('/formsCheck',forms)
        .then(res => console.log("data = " + {...forms}))
        .then(setForms({...forms,  cause_1:' ',cause_2:'',date:'',listBlocks_1:'',listBlocks_2:''}))
        .catch(err => {
            console.log("error= "+err)
        })
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} align='center'>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type="date" value={forms.date} onChange={handleChange} name="date" placeholder="Дата" />
                    <br/>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type="text" value={forms.cause_1} onChange={handleChange} name="cause_1" placeholder="Причина 1"/>
                    <br/>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type='text' value={forms.listBlocks_1} name='listBlocks_1' onChange={handleChange} placeholder='список блоков'/>
                    <br/>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type="text" value={forms.cause_2} onChange={handleChange} name="cause_2" placeholder="Причина 2"/>
                    <br/>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type='text' value={forms.listBlocks_2} name='listBlocks_2' onChange={handleChange} placeholder='список блоков'/>
                    <br/>
                <Button className={classes.buttons} type='submit' variant='contained'  color='primary'>Отправить</Button>
            </form>
        </div>
    )
}

export default FormCheck;