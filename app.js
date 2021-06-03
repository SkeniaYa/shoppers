const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("hbs");
const indexRouter = require("./routes/indexRouter");
const uploadRouter = require("./routes/uploadRouter");
const fileupload = require("express-fileupload");

const { connect } = require("./db/connect");
const cartRouter = require("./routes/cartRouter");

const PORT = 3000;
const app = express();

connect();

app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(fileupload());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
// подключение routers
app.use("/", indexRouter);
// app.use("/", uploadRouter);

app.use("/cart", cartRouter);

// подключение routers

// Start middleware section

// Start middleware section

app.listen(PORT, () => {
  console.log("server work >>>", PORT);
});
