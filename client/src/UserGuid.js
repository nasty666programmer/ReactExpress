import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import './fonts/fonts.css';

const useStyles = makeStyles({
    root: {
      width: 500,
    }, 
    textField: {
        marginTop:'1rem',
        width: '60rem',
        height:'30rem',
        marginLeft:' auto',
        marginRight: 'auto',
        textAlign:'center',
        border:'3px solid #eaa70a',
    },
    faq: {
        fontSize:'1.5rem',
        margin:'1rem',
        display:'inline-block',
        verticalAlign: 'middle'
    }
  });

function UserGuid() {
    let classes = useStyles();

    return (
        <div className={'fonts'}>
            <fieldset className={classes.textField}>
                <legend><span><LiveHelpIcon />FAQ</span></legend>
                <div className={classes.blockFaq}>
                    <span className={classes.faq}> Menu -> Login(Если вы имеете доступ администратора)</span>
                    <br />
                    <span className={classes.faq}>Menu -> Посмотреть список блоков -> В нижнем ToolBare ссылки на разделы -> Посмотреть список листов посещений || посмотреть полезные ссылки на проверенные источники</span>
                </div>
            </fieldset>
        </div>
    )
}

export default UserGuid;



