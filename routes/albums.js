const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let pageAlbums = dataFile.albums; //array of albums


router.get('/albums', (req,res) => {
    let pagePhotos = [];

    pageAlbums.forEach(albumObj => {
        pagePhotos = pagePhotos.concat(albumObj.artwork)
    })

    const metaData = {
        photos: pagePhotos,
        albums: pageAlbums
    }

    res.render('albums', metaData);

})


module.exports = router;