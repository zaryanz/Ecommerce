const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
