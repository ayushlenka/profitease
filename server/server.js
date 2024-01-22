require("dotenv").config({ path: "./config.env" });

const express = require("express");
const routes = require('./routes');
const mongoose = require("mongoose");
const cors = require("cors");

//Express application
const app = express();

//App Port
const port = process.env.PORT || 5000;

app.use('/api/usersettings',routes); //Uses all app routes/API endpoints
app.use(cors());
app.use(express.json()); //middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

//MongoDB Connection first, then connects to node server
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to Mongo Atlas DB and Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })

//Listening for requests
