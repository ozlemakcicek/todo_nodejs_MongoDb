import express from "express";
import { auth } from "../middleware/auth.js";

const router = express.Router();
// import Users from "../models/User.js"

import {
  register,
  login,
  find,
  findAll,
  update,
  remove,
} from "../services/userService.js";

// router.get("/",(req,res)=>{
//     res.send("get istegi atildi")

// })

//  router.post("/", async(req, res) => {
//  const user=req.body

//   try {
//     const data= await Users.create(user)
//     res.json(data)
//   } catch (error) {
//     res.status(400).json({message:"User can not created"})
//   }
// });

//? register islemi
// router.post("/register", async(req, res) => {
//   // const user=req.body
//   const {username,password,name,surname}=req.body
//   const user = { username, password, name, surname };

//   try {
//     const data= await Users.create(user)
//     res.json(data)
//   } catch (error) {
//     res.status(400).json({message:"User can not created"})
//   }
// });

//? login islemi
// router.post("/login", async(req,res)=>{
//   // $2b$10$mBvai9x3fDO/SqkBmNSysuP3zauY2sQy7gKfP2xlCIcC1RO1SugiG=5634 mu bunu karsilastiriyrz.
// const {username,password}=req.body
// const data=await Users.findOne({username}).exec()

// if(!data){
//   return res.status(404).json({message:"User could not find"})
// }

// const isValidated=await data.validatePassword(password)

// if(!isValidated){
//   return res.status(403).json({message:"The password is not correct"})
// }
//! bunlari daha okunakli hale dondurelim. ac fonksiyonlari.ve sonra bunlari service.js e tasiyacagiz

// const register= async(req, res) => {
//   // const user=req.body
//   const {username,password,name,surname}=req.body
//   const user = { username, password, name, surname };

//   try {
//     const data= await Users.create(user)
//     res.json(data)
//   } catch (error) {
//     res.status(400).json({message:"User can not created"})
//   }
// }

// const login=async(req,res)=>{
//   // $2b$10$mBvai9x3fDO/SqkBmNSysuP3zauY2sQy7gKfP2xlCIcC1RO1SugiG=5634 mu bunu karsilastiriyrz.
// const {username,password}=req.body
// const data=await Users.findOne({username}).exec()

// if(!data){
//   return res.status(404).json({message:"User could not find"})
// }

// const isValidated=await data.validatePassword(password)

// if(!isValidated){
//   return res.status(403).json({message:"The password is not correct"})
// }

// const user={
//   id:data.id,
//   username:data.username,
//   name:data.name,
//   surname:data.surname

// }
// res.json(user)
// // res.json(data)
// }

router.post("/register", register), router.post("/register", register);

router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);

router.patch("/update", update);

router.delete("/:id", remove);

export default router;
