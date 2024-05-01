const express=require('express')
const userController=require('../Controller/userController')
const propertyController=require('../Controller/propertyController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
const adminController=require('../Controller/adminController')
const emailController = require('../Controller/emailController');
const router=new express.Router()

// register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add
router.post('/add',jwtMiddleware,multerConfig.array('propertyImage',2),propertyController.addProperty)

// get all property

router.get('/property',jwtMiddleware,propertyController.getAllProperty)

// get user property

router.get('/my-listing',jwtMiddleware,propertyController.getUserProperty)

// get propertybyid

// router.get('/view/:id',jwtMiddleware,propertyController.getPropertyById)

// post comment
router.post('/contact',jwtMiddleware,adminController.addComments)

// get comment
router.get('/admin',jwtMiddleware,adminController.getComments)



// // Remove comment

router.delete('/admin/:cid', jwtMiddleware, adminController.removeComment);

// // send mail
// router.post('/send-email', emailController.sendEmail);

// edit property
// edituser
router.put('/edit-property/:pid',jwtMiddleware,multerConfig.array('propertyImage',2),propertyController.editProperty)

// remove property
router.delete('/remove-property/:pid',jwtMiddleware,propertyController.removeProperty)

module.exports=router