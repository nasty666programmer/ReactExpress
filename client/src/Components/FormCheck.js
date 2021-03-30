import {useEffect, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {BounceLoader} from 'react-spinners';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
    },
    resOk: {
        color: '#31b31a',
        backgroundColor: '#e6e6e6',
        borderRadius:'3%',
        fontSize:'1rem',
        boxShadow:'0rem 0rem 1rem 0rem black',
        width: '30%',
        height: '10rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resErr: {
        color: 'orange',
        backgroundColor: '#e6e6e6',
        borderRadius:'3%',
        fontSize:'1rem',
        boxShadow:'0rem 0rem 1rem 0rem black',
        width: '30%',
        height: '10rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
  }))


function FormCheck() {
    let classes = useStyles()
    const shortid = require('shortid');
    const [file,setFile] = useState();
    const [date,setDate] = useState();
    const [flag,setFlag] = useState(false);
    const [sendData,setSendData] = useState([]);
    const [sendErr,setSendErr] = useState([])

    const [forms,setForms] = useState({
        id:shortid.generate(),
        date:null,
        images:''
    })
   const handleChange = (event) => {
        const {value} = event.currentTarget;
        setDate(value);
   }

   /*const handleChangeFile = (event) => {
   let file = event.target.files[0];
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
       };
   }*/

    const handleSubmit = () => {
        setFlag(true);
        const data = new FormData();
        data.append('date',date);
        data.append('file',file);
    
        axios.post('/form-check',data)
        .then(res => {
            setSendData(res);
            setFlag(false);
            setForms({...forms, date:'',images:''})
        })
        .catch(err => {
            setSendErr(err)
        })
    }

    const closeMess = () => {
        setSendData([]);
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
                {flag ? <BounceLoader /> : <Button  onClick={handleSubmit} className={classes.buttons} type='button' variant='contained'  color='primary'>Отправить</Button>}
            </form>
            {sendData.length != 0 && <div className={classes.resOk}>Данные успешно отправленно<CloseIcon style={{color:'red'}}onClick={closeMess}/></div>}
            {sendErr.length != 0 && <div className={classes.resErr}>Произошла ошибка<CloseIcon style={{color:'red'}}onClick={closeMess}/></div>}       
        </div>
    )
}

export default FormCheck;