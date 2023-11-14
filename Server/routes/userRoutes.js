const { register,login,setAvatar,getAllUsers } = require("../controllers/userController");

const router=require("express").Router();
router.get("/allUsers/:id",getAllUsers)
router.post("/register",register)
router.post("/login",login)
router.post("/setAvatar/:id",setAvatar)
router.get("/test",(req,res)=>res.send("testing...."))

module.exports=router;