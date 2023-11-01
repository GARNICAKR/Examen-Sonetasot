const express = require("express");
const Controller=require("../controllers/Citas");
const router=express.Router();
router.get('/',Controller.index);
router.route('/:CURP')
    .get(Controller.GetUser)
    .post(Controller.CreateDate)
router.route('/cita/:id')
    .put(Controller.UpdateDate)
    .delete(Controller.DeleteDate);

module.exports=router;

