const express = require('express');

const footerController = require('../controllers/footer.controller');

const router = express.Router();

router.get('/pol-conf', footerController.getPolConf);

router.get('/pol-cookies', footerController.getPolCookies);

router.get('/termeni-si-conditii', footerController.getTermCond);

router.get('/despre-noi', footerController.getDespreNoi);

module.exports = router;