const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoutes = require("./routes/UserRoutes");

const  app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI,
    // { useNewUrlParser: true,
    //   useUnifiedTopology: true }
  )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.use("/api/user",userRoutes)
app.listen(5000, console.log( "Server is running on port 5000"));
