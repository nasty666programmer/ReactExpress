const {Router} = require('express');
const router = Router();
const db = require('../db');
const tablesForm = db.formsCheck;
const multer = require('multer');
const fs = require('fs');

const upload = multer();

router.post('/',upload.single('file'),(req,res) => {
    const { file,body: {name} } = req;
    let img = req.file;
    //let BinaryFiles = Buffer.from().toJSON();
    //console.log(req.body)
            tablesForm.create({
          date:req.body.date,
           img:img.buffer
       }).then(result => {
           console.log(result)
            res.end('ok'); 
        }).catch(err => {
            console.log(err);
            res.end('error')
        })
})

module.exports = router;