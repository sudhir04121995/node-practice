//import express from "express"
const express = require("express");
const fs = require("fs");


const app = express();

app.use(express.json());

const port = 8080;

app.get("/api/demo", (req, res) => {
  let date = new Date();
  let content = date.toUTCString();
  fs.writeFile("./current_date-time.txt", content, (err) => {
    if (err) {
      res.send("error occurred:", err);
    } else {
      fs.readFile("./current_date-time.txt", "utf-8", (err, data) => {
        if (err) {
          res.send(`error occurred in reading:${err}`);
        } else {
          res.send(data);
        }
      });
    }
  });
});

let carData =[
   {
      id:"1",
      model:"sedan",
      engine:"1Liter",
      transmission:"manual",
      name:"virtus",
      capacity:"5",
      variant:"TSI",
      isBooked:"true"
   },
   {
      id:"2",
      model:"SUV",
      engine:"1Liter",
      transmission:"manual",
      name:"Taigun",
      capacity:"5",
      variant:"TSI",
      isBooked:"false"
   },
   {
      id:"3",
      model:"sedan",
      engine:"1.5Liter",
      transmission:"Automatic",
      name:"virtus",
      capacity:"5",
      variant:"GT",
      isBooked:"true"
   },
   {
      id:"4",
      model:"sedan",
      engine:"1Liter",
      transmission:"Automatic",
      name:"Taigun",
      capacity:"5",
      variant:"TSI",
      isBooked:"false"
   }
]

app.get("/car/all",(req,res)=>{
  const{isBooked,model} = req.query
   let carInfo = carData;

   if(isBooked){
    carInfo=carInfo.filter((car)=>car.isBooked === isBooked)
   }

   if(model){
    carInfo = carInfo.filter((car)=>car.model === model)
   }
   res.send(carInfo)
})

//specific car detail
//get
app.get("/car/:id",(req,res)=>{
  const {id} = req.params
  console.log(id);
  const filteredCar = carData.filter((car)=>car.id === id);
  res.send(filteredCar)
})
//add
app.post("/car/add",(req,res)=>{
  const newCar ={...req.body,id:(carData.length+1).toString()}
  carData =[...carData,newCar]
  res.send(carData);
})

// edt
app.put("/car/edit/:id",(req,res)=>{
  const {id} = req.params;
  let filteredCar =carData.filter((car)=>car.id === id);
  filteredCar[0].isBooked = req.body.isBooked;
  res.send(filteredCar)
  console.log(filteredCar)
});

// delete

app.delete("/car/delete/:id",(req,res)=>{
  const {id} = req.params;
  let remainingCars = carData.filter((car)=>car.id != id)
  carData = [...remainingCars]
  res.send(carData);
})
app.listen(port, () => console.log(`server started in localhost:${port}`));


