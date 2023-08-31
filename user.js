import express from "express";
import bcrypt from "bcrypt";
import { addUser, getUser } from "./collections/users.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    // generate salt value
    const salt = await bcrypt.genSalt(10);
    const user = await getUser(req.body.email);
    if(!user){
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        const hashedUser  = await{...req.body,password:hashedPassword};
        // add the new user
        const result = await addUser(hashedUser);
        if(!result.acknowledged){
            return res.status(400).send({message:"Error uploading please try again"})
        }
        return res.status(201).send({result, data:hashedUser});
    }
    //if user already exist 
    return res.status(400).send({message:"invalid email address"})
} catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
});



router.post("/login", async (req, res) => {
   try {
    // collecting the req.body and find  user exist
    const user = await getUser(req.body.email);
    if(!user){
        return res.status(400).send({message:"invalid email address"})
    }
    //check is the password is right
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        return res.status(400).send({message:"invalid password"})
    }
    return res.status(200).send(user)
   } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" })
  }
});


export const userRouter = router;
