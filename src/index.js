const { response } = require("express");
const express = require("express")

const app = express();

app.use(express.json());

app.get("/courses", (req, res)=>{
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res)=>{
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.put("/courses/:id", (req, res)=>{
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.delete("/courses", (req, res)=>{
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.listen(3333, ()=>{});