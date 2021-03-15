const {Router} = require('express');
const router = Router();

router.get('/',(req,res) => {
    let logins = {
        log:'admin',
        pass:'root'
    }

    res.send(logins)
})

module.exports = router;