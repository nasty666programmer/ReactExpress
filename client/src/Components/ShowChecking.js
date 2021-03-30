import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowImagesFUll from './ShowImagesFull';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BounceLoader} from 'react-spinners';
import '../fonts/fonts.css';

const useStyles = makeStyles({
    root: {
      textAlign:'center',
    },
    title:{
        textAlign:'center'
    },
    date: {
        fontSize:'1rem',
        margin:'2rem'
    },
    imgPosition: {
        textAlign:'center'
    },
    container: {
        display:'inline-block',
        flexWrap:'nowrap',
        margin:'1rem'
    },
    loader: {
        marginLeft:'45%',
        marginTop:'2rem'
    },
    buttonFonts: {
        fontFamily: 'Gotham Pro Bold',
        fontWeight: 'bold',
        backgroundColor: '#a50606',
        color: 'black',
        borderRadius:'1rem'
    }
  });

function ShowChecking() {
    const classes = useStyles();
    const [blockList,setBlockList] = useState([]);
    const [pageImageFull,setPageImageFull] = useState([]);
    const [flag,setFlag] = useState(false);
    const [count,setCount] = useState(1);
    const [data,setData] = useState();

    useEffect(() => {
        axios.get('/show-form-check')
        .then(res => setBlockList(res.data))
        .catch(err => console.log(err))
    },[]);

    const showFullImg = (image) => {
        setFlag(!flag);
        setData(image);
    }

    return (
        <div className={`fonts ${classes.root}`}>
            <h1 className={classes.title}>Список проверки блоков</h1>
            {flag && ReactDOM.createPortal(
                    <ShowImagesFUll imgLink={data} onClose={showFullImg} />
               ,document.getElementById('modal'))}
                {blockList.map(el => 
                    <div className={classes.container}>
                        <div className={classes.date}>{el.date}</div>
                        <Button variant='contained' className={classes.buttonFonts} color='primary' onClick={() => showFullImg(el.img)}>Показать График</Button>
                    </div>
                )}  
                <div className={classes.loader}>
                    {blockList.length == 0 ? <BounceLoader style={{position:'absolute',marginRight:'30%'}}/> : null}
                </div>
        </div>
    )
}

export default ShowChecking;