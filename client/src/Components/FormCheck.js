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
    const [file,setFile] = useState();
    const [date,setDate] = useState();

    const [forms,setForms] = useState({
        id:shortid.generate(),
        date:null,
        images:''
    })
   const handleChange = (event) => {
       const {value} = event.currentTarget;
    setDate(value);
   }

   const handleChangeFile = (event) => {
   /* let file = event.target.files[0];
    console.log(file)
        let data = new FormData();
        data.append('image',file);
        setForms({...forms, images:data})
        
   let file = event.target.files[0];
    let blob = new Blob([file],{type: 'image/jpeg'})
    console.log(blob)
    setForms({...forms, images:blob});
      
     let reader = new FileReader();
       reader.readAsDataURL(blob); // конвертирует Blob в base64 и вызывает onload

       reader.onload = function() {
           
           setForms({...forms, images:reader.result})
       };*/
   }

    const handleSubmit = () => {

        const data = new FormData();
        data.append('date',date);
        data.append('file',file);
       

        axios.post('/formsCheck',data)
        .then(res => console.log(res))
        .catch(err => {
            console.log(err)
        })
        
    }
    return (
        <div>
            <form align='center'>
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type="date" value={forms.date} onChange={handleChange} name="date" placeholder="Дата" />
                    <br/>
                    <input  onChange={e => {
                        const file = e.target.files[0];
                        setFile(file);
                    }} className={classes.input} id="icon-button-photo" type="file" />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                    <br/>
                <Button  onClick={handleSubmit} className={classes.buttons} type='button' variant='contained'  color='primary'>Отправить</Button>
               
            </form>
        </div>
    )
}

export default FormCheck;