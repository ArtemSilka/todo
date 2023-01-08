 const express = require('express');
 const mongoose = require('mongoose');

 require('dotenv').config();

 const app = express();
 const PORT = process.env.port || 5000;

 const db = require('./config/keys').mongoURI;
 const bodyParser = require('body-parser');

 mongoose
    .connect(db, () => {useNewUrlParser: true })
    .then(() => console.log("Connected to DB!"))
    .catch(err => console.log(err));

 app.listen(PORT, () => console.log(`Listening on ${PORT} port`));



