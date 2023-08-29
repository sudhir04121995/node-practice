import { ObjectId } from "mongodb";
import { client } from "../db.js"

export function getAllStudents(req){
    return  client
    .db("bootcamp")
    .collection("StudentList")
    .find(req.query)
    .toArray()
  
} 

export function getElementById(id){
    return client
    .db("bootcamp")
    .collection("StudentList")
    .findOne({_id: new ObjectId(id)})
}

export function addStudents(data){
    return client
    .db("bootcamp")
    .collection("StudentList")
    .insertOne(data);
}

export function editStudentById(id,data){
    return client
    .db("bootcam")
    .collection("StudentList")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:data})
}

export function deleteStudentById(id){
    return client
    .db("bootcamp")
    .collection("StudentList")
    .findOneAndDelete({_id:new ObjectId(id)})
}