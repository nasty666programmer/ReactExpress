const {Router} = require('express');
const router = Router();


router.post('/',(req,res) => {
    const {id,cause_1,cause_2,date,listBlock_1,listBlocks_2} = req.body
    res.send('forms')
    console.log(`${date} ${cause_1} ${listBlock_1} `)
})

module.exports = router;