const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let pageAlbums = dataFile.albums; //array of albums


router.get('/albums', (req,res) => {
    

    let pagePhotos = [];

    pageAlbums.forEach(albumObj => {
        pagePhotos = pagePhotos.concat(albumObj.artwork)
    })

    res.render('albums', {
        photos: pagePhotos,
        albums: pageAlbums
    });

})


module.exports = router;