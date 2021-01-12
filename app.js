const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs')

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})