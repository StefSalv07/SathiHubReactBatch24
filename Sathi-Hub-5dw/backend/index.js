const express = require("express"); // creating the server
const app = express();
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true })); // middleware
const mongoose = require("mongoose"); // connecting to database// const axios = require('axios')// calling the services
// <7-? callback
mongoose
  .connect("mongodb://127.0.0.1:27017/production")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.listen(3002, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3002);
  }
}); //where my services will called()
//

console.log("This is server staring on ----");
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);
