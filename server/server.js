const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected.."));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/routes/user", require("./routes/auth"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
