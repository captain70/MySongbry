if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    }

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// link to the route of the index page
const indexRouter = require('./routes/index');
const artistRouter = require('./routes/artists');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));




// setting up the database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL); 
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('connected to database'));



// assigning the index router as the root of the application.
app.use('/', indexRouter);
app.use('/artists', artistRouter);

app.listen(process.env.PORT || 3000);

