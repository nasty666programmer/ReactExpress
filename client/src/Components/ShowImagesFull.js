import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../Modale.css';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    root: {
      width: 500,
    },
    title:{
        textAlign:'center'
    }
  });

function ShowImagesFUll(props) {
    const {imgLink} = props;
    const classes = useStyles();
    const base64String = btoa(String.fromCharCode(...new Uint8Array(imgLink.data)));

    return (
      <div class="modale">
        <div className={"modal-dialog"}>
          <div className={"modal-content"}>
            <div className={"modal-header"}>
              <h3 className={"modal-title"}>Картинка</h3>
                <CloseIcon onClick={props.onClose} />
            </div>
            <div className={"modal-body"}>    
            <img src={`data:image/png;base64,${base64String}`} />
            </div>
          </div>
        </div>
    </div>
    )
}

export default ShowImagesFUll;