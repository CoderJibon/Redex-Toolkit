const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoDBConnect = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./middlewares/errorHandler.js");
const notFound = require("./middlewares/notFound.js");
const cors = require("cors");
const authRouter = require("./routes/authRoutes.js");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const corsOptions = require("./config/corsSetup.js");
// Initialize
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));

//environment variable
const PORT = process.env.PORT || 4040;

// static Folder
app.use(express.static("public"));

//routing
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user", authRouter);

//error handler
app.use(errorHandler);

// 404 Not Found
app.use(notFound);

// server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server running on port : ${PORT}`.bgYellow.black);
});
