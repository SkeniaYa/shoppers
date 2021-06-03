const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("hbs");
const indexRouter = require("./routes/indexRouter");
<<<<<<< HEAD
const uploadRouter = require("./routes/uploadRouter");
const fileupload = require("express-fileupload");

=======
const { connect } = require("./db/connect");
const cartRouter = require('./routes/cartRouter')
>>>>>>> test

const PORT = 3000;
const app = express();

<<<<<<< HEAD
app.use(fileupload());
=======
connect();

>>>>>>> test
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// подключение routers
app.use("/", indexRouter);
<<<<<<< HEAD
app.use("/upload", uploadRouter);

=======

app.use("/cart", cartRouter);
>>>>>>> test

// подключение routers

// Start middleware section
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
// Start middleware section

app.listen(PORT, () => {
  console.log("server work >>>", PORT);
});
