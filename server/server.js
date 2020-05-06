const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/routes/user", require("./routes/auth"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
