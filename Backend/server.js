 const express = require('express');
 const mongoose = require('mongoose');
 const routes = require('./routes/todos');
 const cors = require('cors');

 require('dotenv').config();

 const app = express();
 const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

 const db = require('./config/keys').mongoURI;

 mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to DB!"))
    .catch(err => console.log(err));

app.use(routes);


 app.listen(PORT, () => console.log(`Listening on ${PORT} port`));



