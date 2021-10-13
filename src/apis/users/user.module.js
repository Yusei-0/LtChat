const {Router} = require('express');
const router = Router();
const userController = require('./user.controller');

router.get('/users', async (req, res, next)=>{
    await res.send(userController.getAllUsers());
});

router.get('/users/:id', (req, res, next)=>{
    res.send(userController.getUserById(req.params.id));
})

router.post('/users', (req, res, next)=>{
    res.send(userController.setNewUser(req.body));
})

router.delete('/users/:id', (req, res, next)=>{
    res.send(userController.deleteUserById(req.params.id));
})

router.put('users/:id', (req, res, next)=>{
    res.send(userController.updateUserById(req.params.id, req.body))
})

module.exports = router;