var express = require('express');
var router = express.Router();
const {HomeController} = require('../controllers/home.controller');
var home =new HomeController();

router.route("/test").get(home.test);
router.route("/restaurant/:id").get(home.restaurant);

router.route("/login").get(home.login).post(home.loginHandle);
router.route("/register").get(home.register).post(home.registerHandle);
router.route("/food/:id").get(home.detailFood);

router.route("/").get(home.index);

module.exports = router;