import express from "express";
import { addStudents, deleteStudentById, editStudentById, getAllStudents, getElementById } from "../collections/student.js";


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

//get element by id
router.get("/:id",async(req,res)=>{
    try{
      const {id} =req.params;
      const student = await getElementById(id);
      if(!student){
        return res.status(400).send({message:"No Content Available"})
      }
      return res.status(200).send(student)
    }catch(error){
        console.log(error)
        res.status(500).send({message:"internal server error"})
    }
})


// add new student information
router.post("/add",  async(req,res)=>{
    try{
     if(Object.keys(req.body).length <=0){
        return res.status(400).send({message:"No content available"})
     }
     const newStudent = await addStudents(req.body);
     if(!newStudent.acknowledged){
        return res.status(400).send({message:"Cannot add data"})
     }
     res.status(201).send({result:newStudent,data:req.body})
    }catch(error){
console.log(error)
res.status(500).send({message:"internal server error"});
 }
});

// put

router.put("/edit/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    if(!id ||Object.keys(req.body).length<=0){
        return res.status(400).send({message:"Not A valid Request"})
    }
    const editedResult = await editStudentById(id ,req.body);
    res.status(200).send({result:editedResult, data:req.body})
    }catch(error){
        console.log(error)
        res.status(500).send({message:"internal server error"});
    }
})

//Delete
router.delete("/delete/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    if(!id){
        return res.status(400).send({message:"Not A Valid Request"})
    }
    const deletedRequest = await deleteStudentById(id);
    res.status(200).send({result:deletedRequest, success:"deleted successfully"})
    }catch(error){
        console.log(error)
        res.status(500).send({message:"internal server error"});

    }
})


export const studentRouter = router;
