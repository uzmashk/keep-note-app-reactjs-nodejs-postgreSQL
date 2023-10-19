require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express()
const appRoutes = require("./routes/approutes");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

const port = process.env.PORT || 8000

const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Connected to the database.");
});

appRoutes(app);

app.listen(port, ()=>{
    console.log('Server is running on ' + port)
})