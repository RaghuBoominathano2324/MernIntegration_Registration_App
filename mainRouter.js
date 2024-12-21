const router=require('express').Router()
const registerValidation=require('./registerValidation')
const registerUser = require('./registerController'); // Use the renamed function
const deleteController=require('./deleteController')


// const  registerController=require('../CONTROLLERS/registerController')

const  renderController=require('./renderController')




// router.post('/register',registerValidation, registerController)
router.post('/register', registerValidation, registerUser);  // Use registerUser here


router.get('/render',renderController)
router.delete('/delete/:id', deleteController);



module.exports=router;
