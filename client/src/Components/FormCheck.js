import {useEffect, useState} from 'react';
import axios from 'axios';
import logo from '../imgages/sos3.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle,TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    textField: {
        width: '18rem',
        textAlign:'center',
        marginTop:theme.spacing(2)
    },
    buttons: {
        marginTop:'1rem'
    },
    input: {
        display: 'none',
        width: '18rem',
        textAlign:'center',
        marginTop:theme.spacing(2)
    }
  }))


function FormCheck() {
    let classes = useStyles()
    const shortid = require('shortid');
    const [forms,setForms] = useState({
        id:shortid.generate(),
        date:null,
        images:''
    })
   const handleChange = (event) => {
       const {name,value} = event.currentTarget;
    setForms({...forms,
        [name]:value
       })
   }

   const handleChangeFile = (event) => {
    let file = event.target.files[0];
    let blob = new Blob([file],{type: 'image/jpeg'})
       let reader = new FileReader();
       reader.readAsDataURL(blob); // конвертирует Blob в base64 и вызывает onload

       reader.onload = function() {
           
           setForms({...forms, images:reader.result})
       };
   }

    const handleSubmit = (event) => {
        console.log(forms)  
      
        axios.post('/formsCheck',forms)
        .then(res => console.log("data = " + {...forms}))
        .then(setForms({...forms, date:'',images:'',}))
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
                    <input accept="image/*" onChange={handleChangeFile} name="images" className={classes.input} id="icon-button-photo" type="file" />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                    <br/>
                <Button className={classes.buttons} type='submit' variant='contained'  color='primary'>Отправить</Button>
               
            </form>
        </div>
    )
}

export default FormCheck;