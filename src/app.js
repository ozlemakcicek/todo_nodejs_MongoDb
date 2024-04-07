
//console.log("merhaba app.js");

import express from "express"
import bodyParser from "body-parser"

// PORT numarasini .env de sakliyoruz
import * as dotenv from "dotenv"
dotenv.config()

// routes daki islemleri kullanmak icin import ediyorz.sonuna .js eklemeyi unutmayalim
import usersRouter from "./routers/routes.js"

// database icin mongoose import edilir
import mongoose from "mongoose"


// todo icin;
import todosRouter from "./routers/todoRoutes.js";

// PORT numarasini .env ye cekersek bu asagidakine gerek yok.
//! const PORT=3000

const PORT= process.env.PORT

const app=express()


// body-parseri da kullanalim dokumantasyonundan getirip.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes yapisini kullanalim.get islemindeki
// app.use("/", usersRouter)



//database connect config
const db=process.env.MongoURL

mongoose.connect(db)
.then(console.log("DB connected"))
.catch((err)=>{console.log(err);})



//post islemleri icin
app.use("/users", usersRouter);
app.use("/todos", todosRouter);



app.listen(PORT, ()=>{
    console.log(`Server is running at PORT:${PORT}`);
})


