const {Router} = require('express');
const router = Router();
const db = require('../db');
const formCheck = db.formsCheck;


router.post('/',(req,res) => {
    const {id,date,images} = req.body
       formCheck.create({
           date:date,
           img:images
       }).then(result => {
           console.log(result)
            res.end('ok');
        }).catch(err => {
            console.log(err);
            res.end('error')
        })
  
})

module.exports = router;