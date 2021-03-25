const {Router} = require('express');
const router = Router();
const db = require('../db');
const logins = db.LogAdmin;
const jwt = require('jsonwebtoken');
require('crypto').randomBytes(64).toString('hex');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs')
const config = require('config');

router.post('/',async(req,res) => {
    const {log,pass} = req.body;
 
    let candidate = await logins.findOne({login:log});
    if(candidate) {
       let passHash = bcrypt.hashSync(pass,15);

        const passResult = bcrypt.compareSync(pass,candidate.password);
        console.log(passResult)
       if(passResult) {
            
            const token = jwt.sign({
                password:candidate.password,
            },'dev-jwt',{expiresIn:60*60});
            res.send(token);
            
           // res.sendStatus(200).json({message:'ok'})
        } else {
            res.sendStatus(401).json({message:'pass not true'})
        }
    } else {
        res.sendStatus(404).json({
            message:'user not found'
        });
    }
})

module.exports = router;