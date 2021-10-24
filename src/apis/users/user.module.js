const {Router} = require('express');
const router = Router();
const userController = require('./user.controller');
const CreateUserDto = require('./dto/createUser.dto')

/**
 * In this module we are reciving the request and
 * sending the response to the controller to response 
 * from controller 
 */

router.get('', async (req, res)=>{
    
      if (req.query) {
        const data = req.query;
        console.log(req.query);
        
        await userController.getUsers(res, data);
    }
    else{
        await userController.getUsers(res);
    }
})

router.get('/login', async (req, res)=>{

    if(req.query.username){
        const data = {
            username : req.query.username,
            password : req.query.password
        }
        await userController.logIn(res, data);
    }
    else{
        res.send("MISSING_DATA");
    }
    
})

router.get('/:id', async (req, res)=>{
   await userController.getUserById(req.params.id, res);
})

router.post('', async (req, res)=>{
     var User = CreateUserDto(req.body);
     await userController.setNewUser(User, res);
     
})

router.delete('/:id', async (req, res)=>{
     await userController.deleteUserById(req.params.id, res);
})

router.put('/:id', async (req, res)=>{
    var User = CreateUserDto(req.body);
     await userController.updateUserById(req.params.id, User, res);

})



module.exports = router;