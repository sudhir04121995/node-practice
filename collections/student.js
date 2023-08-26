import { client } from "../db.js"

export function getAllStudents(req){
    return  client
    .db("bootcamp")
    .collection("StudentList")
    .find(req.query)
    .toArray()
  
} 