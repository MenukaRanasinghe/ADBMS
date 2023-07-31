var express=require('express');

//var userController=require('../src/student/studentController');
var studentController = require('../src/student/studentController');
const router=express.Router();

router.route('/student/login').post(studentController.loginStudentControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);
router.route('/student/getAll').get(studentController.getDataConntrollerfn);
router.route('/student/update/:id').patch(studentController.updateStudentController);
router.route('/student/delete/:id').delete(studentController.deleteStudentController);

module.exports=router;