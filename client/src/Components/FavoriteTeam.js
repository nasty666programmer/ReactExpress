import React from 'react';
import logo from '../images/sos3logo.png';
import {makeStyles} from '@material-ui/core/styles'
import ApartmentIcon from '@material-ui/icons/Apartment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import MailIcon from '@material-ui/icons/Mail';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
    },
    textField: {
        minHeight:'30rem',
        width: '80%',
        height:'50%',
        marginLeft:' auto',
        marginRight: 'auto',
        textAlign:'center',
        border:'3px solid #eaa70a'
    },
    imageLogo:{
        width:'10rem',
        height:'10rem'
    },
    links: {
        textDecoration:'none',
        fontSize:'1.5rem',
        margin:'1rem'
    }
  }))

function FavoriteTeam() {
    let classes = useStyles();
    return (
        <div>
            <fieldset className={classes.textField}>
                <legend><img className={classes.imageLogo} src={logo} alt={'sos3'}/> </legend>
                <TelegramIcon />
                    <br />
                <a className={classes.links} href='https://t.me/sos3_znu'><ApartmentIcon /><span>канал #sos3 </span></a> 
                <a className={classes.links} href='https://telegra.ph/Poleznye-znakomstva-v-3-obshchezhitii-ZNU-02-16'><SupervisorAccountIcon /><span>Полезные знакомства</span></a>
                <a className={classes.links} href='https://t.me/sos3_chat'><AccessibilityNewIcon /><span>Чат sos3</span></a>
                    <br />
                    <br />
                <InstagramIcon />
                    <br />
                <a className={classes.links} href='https://instagram.com/sos3_znu?igshid=1osx7crjpg12v'><AccessibilityNewIcon /><span>Профиль sos3</span></a>
                    <br />
                    <br />
                <RecordVoiceOverIcon/>
                    <br />
                    <span>По всем вопросам и предложениям обращаться по этим адрессам</span>
                    <br />
                    <br />
                    <MailIcon /><span>@sos_3_bot</span>
            </fieldset>
        </div>
    )
}

export default FavoriteTeam;