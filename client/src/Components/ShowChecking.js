import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowImagesFUll from './ShowImagesFull';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      width: 500,
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
    }
  });

function ShowChecking() {
    const classes = useStyles();
    const [blockList,setBlockList] = useState([]);
    const [pageImageFull,setPageImageFull] = useState([]);
    const [flag,setFlag] = useState(false);
    const [count,setCount] = useState(1);

    useEffect(() => {
        axios.get('/showFormCheck')
        .then(res => setBlockList(res.data))
        .catch(err => console.log(err))
    },[]);

    const showFullImg = (image) => {
        setFlag(!flag);
        setCount(count + 1);
        if(flag) {
            for(let i = 0; i < count; i++) {
                setPageImageFull(<ShowImagesFUll imgLink={image} />)
            }
        }
        else {
            for(let i = 0; i < count; i++) {
                setPageImageFull([])
            }
        }
    }

    return (
        <div>
            <h1 className={classes.title}>Список Блоков</h1>
                {blockList.map(el => 
                    <div className={classes.container}>
                        <div className={classes.date}>{el.date}</div>
                        <Button variant='contained' color='primary' onClick={() => showFullImg(el.img)}>Показать График</Button>
                    </div>
                )}
               {pageImageFull}
        </div>
    )
}

export default ShowChecking;