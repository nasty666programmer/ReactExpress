import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      width: 500,
    },
    title:{
        textAlign:'center'
    },
    ImgLink: {
        textAlign:'center',
        heigth:'35rem',
        width:'19rem',
    }
  });

function ShowImagesFUll(props) {
    const {imgLink} = props;
    const classes = useStyles();

    const base64String = btoa(String.fromCharCode(...new Uint8Array(imgLink.data)));

    return (
          <div>
             <figure className={classes.ImgLink}>
               <img src={`data:image/png;base64,${base64String}`} />
              </figure>
          </div>
    )
}

export default ShowImagesFUll;