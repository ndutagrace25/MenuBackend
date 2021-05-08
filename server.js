// import packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Enabling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});

// Linking body parser for url reading
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "10gb",
  })
);

app.use(
  bodyParser.json({
    limit: "10gb",
  })
);

// import routes
const { categories, dishes } = require("./src/routes");

// initialize routes
app.use("/categories", categories);
app.use("/dishes", dishes);
app.use("/", (req, res) => {
  res.send("Hello World");
});

// define port to use
const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
