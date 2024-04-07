import Users from "../models/User.js";
import jwt from "jsonwebtoken"


//? REST API lar imiz CRUD islemlerimizdir.
//! CRUD islemleri=> Create, Read, Update, Delete


// register
export const register = async (req, res) => {
  // const user=req.body
  const { username, password, name, surname } = req.body;
  const user = { username, password, name, surname };

  try {
    const data = await Users.create(user);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "User can not created" });
  }
};


// login ; burda register edilen kullanicinin username ve passwordu dogrumu diye kontrol edilmeli
export const login = async (req, res) => {
  // $2b$10$mBvai9x3fDO/SqkBmNSysuP3zauY2sQy7gKfP2xlCIcC1RO1SugiG=5634 mu bunu karsilastiriyrz.
  const { username, password } = req.body;
  const data = await Users.findOne({ username }).exec();

  if (!data) {
    return res.status(404).json({ message: "User could not find" });
  }
  // res.json(data)
  const isValidated = await data.validatePassword(password);

  if (!isValidated) {
    return res.status(403).json({ message: "The password is not correct" });
  }

  const user = {
    id: data.id,
    username: data.username,
    name: data.name,
    surname: data.surname,
  };
 



// token sifreleme islemi:middelware jsonwebtoken

const token=jwt.sign(user, process.env.ACCESS_TOKEN)
// res.json(user)
res.json({...user,token:token})

};
export const find=async(req,res)=>{
  try {
    const id=req.params.id 
    const data=await Users.findOne({_id:id}).exec()
    res.status(200).json(data)
    
  } catch (error) {
    return res.status(404).json({message:"User could not find"})
    
  }
}

export const findAll= async(req, res)=>{
  try {
    const data= await Users.find().exec()
    res.status(200).json(data)
    
  } catch (error) {
    return res.status(404).json({message:"Users could not find"})
    
  }
}

export const update=async(req,res)=>{
  try {

    const user=req.body
    const data=await Users.updateOne({_id:user.id},{$set:user}).exec()
    res.status(200).json(data)
  } catch (error) {

   return res.status(400).json({message:"Users could not update"})
    
  }
}

export const remove = async (req, res) => {
  try {
    const id=req.params.id
    const data = await Users.deleteOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: "Users could not delete" });
  }
};