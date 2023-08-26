import express from "express";
import { getAllStudents } from "../collections/student.js";


//initializing router
const router =express.Router();

router.get("/all",async(req,res)=>{
    try{
        const students = await getAllStudents(req);
        if(students.length<=0){
            return res.status(400).send({message:"No Data Available"})
        }
        res.status(200).send(students)
    }catch(error){
     
   console.log(error)
   res.status(500).send({message:"internal server error"})
    }
})

export const studentRouter = router;