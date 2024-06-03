import express from "express"
import {authenticate} from "./middlewares.js"

const app = express()


app.get("/data", authenticate, (req,res) => {
    res.json({data:"Hello World"})
})

app.get("/", authenticate, (req,res) => {
    res.json({data:"Hello World, this is data"})
})


app.listen(3000, () => {
    console.log("Server is running")
})