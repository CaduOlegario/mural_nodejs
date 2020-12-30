const express = require("express");
const path = require("path");
const PORT = 8080;
const app = express();

const apiRoute = require("./routes/api");

app.use("/api", apiRoute);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
