const express = require("express");
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended: false}));


router.get("/api", (req, res) => {
    res.json(feedbackData)
});

router.post('/api', (req, res) => {

    console.log(req.body);
    feedbackData.unshift(req.body);
    
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })


    res.json(feedbackData);

})

router.delete('/api/delete/:id', (req,res) => {
    const id = req.params.id
    const data = fs.readFileSync('data/feedback.json', 'utf8');
    const parsedData = JSON.parse(data);
    parsedData.splice(id, 1);

    /**
     * 
     * array1 = [1, 2, 3, 4, 5]
     * array1.splice(2, 1, 5) [0, 1, 2, 3, 4, 5]
     * 
     * const item = array.splice(2, 1) = [3]
     * 
     * 
     */

    fs.writeFile('data/feedback.json', JSON.stringify(parsedData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })

    res.json(parsedData);

})
module.exports = router;