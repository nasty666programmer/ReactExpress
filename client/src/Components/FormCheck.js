import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';
import axios from 'axios';
import logo from '../imgages/sos3.png';

function FormCheck() {
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
        .catch(err => {
            console.log("error= "+err)
        })
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
    <input type="date" value={forms.date} onChange={handleChange} name="date" placeholder="Дата" />
        <br/>
    <label for="lname">Причина1</label>
    <input type="text" value={forms.cause_1} onChange={handleChange} name="cause_1" placeholder="Причина 1"/>
    <input type='text' value={forms.listBlocks_1} name='listBlocks_1' onChange={handleChange} placeholder='список блоков'/>
    <label for="lname">Причина 2</label>
    <input type="text" value={forms.cause_2} onChange={handleChange} name="cause_2" placeholder="Причина 2"/>
    <input type='text' value={forms.listBlocks_2} name='listBlocks_2' onChange={handleChange} placeholder='список блоков'/>

    <button type='submit'>Send</button>
            </form>
            <img src={logo} alt='logo' className='logoSos3' />
        </div>
    )
}

export default FormCheck;