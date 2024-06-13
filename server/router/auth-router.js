const express = require("express");


const app = express();

const router = express.Router();


const controller = require("../controllers/app-controllers");


router.route("/").get(controller.home);


router.route("/register").get(controller.register);


module.exports = router;