const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const api = require("./routes/api-routes");
const html = require("./routes/html-routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(api);
app.use(html);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
