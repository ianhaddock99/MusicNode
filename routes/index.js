const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

router.get('/', (req,res) => {

    let pageAlbums = dataFile.albums; //array of albums

    let pagePhotos = [];

    pageAlbums.forEach(albumObj => {
        pagePhotos = pagePhotos.concat(albumObj.artwork)
    })

    res.render('index', {
        photos: pagePhotos 
    });

})

module.exports = router;