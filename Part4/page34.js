import express from "express"
const app = express()
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080, ()=> console.log("Server Started"));

const users = [
    {name:"Karthik", email:"karthik@gmail.com", password: "1234"},
    {name:"Komal", email:"komal@gmail.com", password: "1234"},
    {name:"Karan", email:"karan@gmail.com", password: "1234"},
];
app.get("/login",(req,res)=> {
    res.render("login");
});
app.get("/register",(req,res)=> {
    res.render("register");
});
app.get("/",(req,res)=> {
    res.render("dashboard",{users});
});