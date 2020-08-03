const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// const logger = (req, res, next) => {
//   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   next();
// };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(logger);

mongoose.connect(process.env.MONGODB_URI || "mongodb://ttanner44:2644zzzz@ds053459.mlab.com:53459/heroku_v8sp9xb8", { useNewUrlParser: true, useFindAndModify: false, });
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
// mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false, });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});