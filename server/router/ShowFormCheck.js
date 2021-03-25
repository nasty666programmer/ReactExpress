const {Router} = require('express');
const router = Router();
const db = require('../db');
const tablesForm = db.formsCheck;


router.get('/',(req,res) => {
        tablesForm.findAll({raw:true}).then(dates=>{
        res.send(dates)
        }).catch(err=>console.log(err))
})

module.exports = router;