//  authentication
const express = require("express");
const router = express.Router();

//  @route    GET api/users/test
//  @desc     Tests Users Route
//  @access   Public
router.get("/test", (req, res) => res.json({ msg: "Users Test Works" }));

module.exports = router;