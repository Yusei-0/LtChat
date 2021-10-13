const {Router} = require('express');
const router = Router();
const userModule = require('./users/user.module');

router.use("/v1", userModule);

module.exports = router;