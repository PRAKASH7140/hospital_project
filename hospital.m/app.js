var express=require("express");
var mysql=require("mysql");
var doenv=require("dotenv")
var path=require("path");
var { error } = require("console");
var hbs=require("hbs")
var app = express();
var bodyPaser=require("body-parser");
var session = require("express-session");
var cookie= require("cookie-parser");
var multer=require("multer");
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var  sweetalert = require('sweetalert2');

var bodyParser = require ('body-parser');


doenv.config({
    path:"./env",
});
const db =mysql.createConnection({
    connectionLimit:10,
    host:" process.env.DATABASE_HOST",
    user:" process.env.DATABASE_PORT",
    password:" process.env.DATABASE_PASSWORD",
    database:" process.env.DATABASE_USER"

});
db.connect((err)=>{
    if(err){
        console.error('mysql database connection')
    } else{
        console.log('mysql database connection success')
    }
})

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/appointment/add_appointment",(req,res)=>{
    res.render("add_appointment")
})
app.get("/appointment",(req,res)=>{
    res.render("appointment")
})
app.get("/home/add_departments",(req,res)=>{
    res.render("add_departments")
})
app.get("/doctors/add_doctor",(req,res)=>{
    res.render("add_doctor")
})

app.get("/add_leave",(req,res)=>{
    res.render("add_leave")
})
app.get("/add_med",(req,res)=>{
    res.render("add_med")
})
app.get("/chat",(req,res)=>{
    res.render("chat")
})
app.get("/complain",(req,res)=>{
    res.render("complain")
})
app.get("/appointment/delete_appointment",(req,res)=>{
    res.render("delete_appointment")
})
app.get("/delete_department",(req,res)=>{
    res.render("delete_department")
})
app.get("/delete_docter",(req,res)=>{
    res.render("delete_docter")
})

app.get("/delete_leave",(req,res)=>{
    res.render("delete_leave")
})
app.get("/delete_med",(req,res)=>{
    res.render("delete_med")
})
app.get("/home/departments",(req,res)=>{
    res.render("departments")
})
app.get("/doctors",(req,res)=>{
    res.render("doctors")
})
app.get("/edit_appointment",(req,res)=>{
    res.render("edit_appointment")
})
app.get("/edit_department",(req,res)=>{
    res.render("edit_department")
})
app.get("/edit_doctor",(req,res)=>{
    res.render("edit_doctor")
})


app.get("/edit_leave",(req,res)=>{
    res.render("leave")
})
app.get("/edit_med",(req,res)=>{
    res.render("edit_med")
})

app.get("/home",(req,res)=>{
    res.render("home")
})
app.get("/inbox",(req,res)=>{
    res.render("inbox")
})
app.get("/landing",(req,res)=>{
    res.render("landing")
})
app.get("/leave",(req,res)=>{
    res.render("leave")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/payslip",(req,res)=>{
    res.render("payslip")
})
app.get("/profile",(req,res)=>{
    res.render("profile")
})
app.get("/resetpassword",(req,res)=>{
    res.render("resetpassword")
})
app.get("/salary",(req,res)=>{
    res.render("salary")
})
app.get("/setpassword",(req,res)=>{
    res.render("setpassword")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/store",(req,res)=>{
    res.render("store")
})
app.get("/verify",(req,res)=>{
    res.render("verify")
})
app.get("/patient",(req,res)=>{
    res.render("patient")
})

//console.log(__dirname);

const location=path.join(__dirname,"./public");
app.use(express.static(location));

const partialsPath =path.join(__dirname,"./views/partials");
hbs.registerPartials(partialsPath)

app.set("view engine","hbs");

app.listen(7140, () => {
    console.log("Server started @ port 7140");
});







// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Routes
// app.get('/', (req, res) => {
//     res.render("home");
// });

// app.get('/addMedicine', (req, res) => {
//     res.render("addMedicine");
// });

// app.use(express.static("public"));

// app.post('/addMedicine', (req, res) => {
//     const { name, description, price, expiredDate, stockAvailable } = req.body;

//     const sql = 'INSERT INTO medicines (name, description, price, expired_date, stock_available) VALUES (?, ?, ?, ?, ?)';
//     db.query(sql, [name, description, price, expiredDate, stockAvailable], (err, result) => {
//         if (err) {
//             console.error('Error adding medicine:', err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('Medicine added successfully');
//             res.redirect('/');
//         }
//     });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// Start server


