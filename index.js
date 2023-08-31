import  express from "express";
 import cors from "cors";
import { studentRouter } from "./ROUTER/student.js";
import dotenv from "dotenv";
import { userRouter } from "./user.js";

// initializing express server
const app = express();

//environmental configuration
dotenv.config();

//port name
const port = process.env.PORT; 

//middleWare
app.use(express.json());
app.use(cors())

//application route
app.use("/students",studentRouter)
app.use("/user", userRouter)

//Listen port
app.listen(port,()=>console.log(`server started in localhost:${port}`));











//sample GET request
// app.get("/students/all", async(req,res)=>{
//   try{
//   const student = await client
//   .db("bootcamp")
//   .collection("StudentList")
//   .find()
//   .toArray()

//   res.status(200).send(student)

//   }catch(error){
//    console.log(error)
//    res.status(500).send({message:"internal server error"})
//   }
// });
