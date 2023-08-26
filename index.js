import  express from "express";
import { studentRouter } from "./ROUTER/student.js";

// initializing express server
const app = express();
 


//port name
const port = 6666;

//middleWare
app.use(express.json());

//application route
app.use("/students",studentRouter)


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
