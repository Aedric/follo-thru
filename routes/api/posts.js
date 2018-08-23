//  posts and content
const express = require("express");
const router = express.Router();

//  @route    GET api/posts/test
//  @desc     Tests Posts Route
//  @access   Public
router.get("/test", (req, res) => res.json({ msg: "Posts Test Works" }));

module.exports = router;
