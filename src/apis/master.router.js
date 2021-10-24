const {Router} = require('express');
const router = Router();
const userModule = require('./users/user.module');

router.use("/users", userModule);


module.exports = router;