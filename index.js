const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");



const car =require('./routes/car')
const admins =require('./routes/admins')
const contact =require('./routes/contact')
const review =require('./routes/review')


dotenv.config();
const uri = process.env.URI
  ;
const port = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin:"*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("upload"));

app.get("/", (req, res) => {
  res.send("connected successfully");
});

app.use('/contact',contact)
app.use('/review',review)
app.use('/admin',admins)
app.use('/car',car)


app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

mongoose
  .connect(uri)
  .then(() => console.log("DB is connected now"))
  .catch((err) => console.log("Not Connected", err));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});


