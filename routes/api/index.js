const router = require("express").Router();
const mailController = require("../../controllers/mailController");

router.route("/mail").post(mailController.send);

module.exports = router;
