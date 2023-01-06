/* @desc this files purpose is to set up our server, node is what starts this server and nodemon will
auto-detect changes and refresh. This is the place where route endpoints are held up, and shown, rather 
than defined. The definitions of these routes and how they are handled is within its controller and route
file.

*/
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;


const app = express(); 

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/images", require("./routes/imageRoutes"));    // allow requests to api/images, and use the info from imageRoutes 

app.listen(port, () =>
  console.log(`Server has started on port ${port} \u{1F44D} \u2713 `)
); // detect when port is active, and console.log that it has started
