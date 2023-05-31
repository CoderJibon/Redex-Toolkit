const express = require("express");
const {
  getAllUser,
  me,
  deleteUser,
} = require("../controllers/userControllers.js");
const authVerify = require("../middlewares/authVerify.js");

// express init
const router = express.Router();

//create route
router.route("/").get(getAllUser);
router.route("/me").get(me);
router.route("/:id").delete(deleteUser);

//exports module
module.exports = router;
