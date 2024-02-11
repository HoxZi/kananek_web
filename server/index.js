const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "shabumai"
})

app.get('/tables', (req,res) => {
    db.query("SELECT * FROM tables", (err, result) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            res.send(result);
        }
    });
  
});

app.get('/list_order', (req,res) => {
    db.query("SELECT * FROM list_order", (err, result) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            res.send(result);
        }
    });

});

app.get('/histotys', (req,res) => {
    db.query("SELECT * FROM historys", (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });

});

app.post("/insertlistorder", (req, res) => {
    console.log(req.body);
    const namedata = req.body.data.name;
    const imgdata = req.body.data.img;

    db.query("INSERT INTO list_order(name_list,img_list) VALUES(?,?)", [namedata, imgdata], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err); // Send an error response with status code 500
        } else {
            console.log("ok");
            res.send(result); // Send the result if there are no errors
        }
    });

});

app.post('/select_table', (req, res) => {
    const numbertable = req.body.data.number_table;
    const fname = req.body.data.f_name;
    const lname = req.body.data.l_name;
    const tel = req.body.data.tel;
    const times = req.body.data.time;
    const dates = req.body.data.dates;
    const count_cus = req.body.data.c_customer;
    console.log(req.body.data);
    db.query("INSERT INTO tables(number_table,f_name,l_name,tel,time,dates,c_customer) VALUES(?,?,?,?,?,?,?)" ,
     [numbertable,fname,lname,tel,times,dates,count_cus] ,(err,result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
     });

});

app.post('/add_histity' ,(req , res) => {
    const Fname_his = req.body.data.fname_his;
    const Lname_his = req.body.data.lname_his;
    const Tel_his = req.body.data.tel_his;
    const Time_his = req.body.data.time_his;
    const Count_customer_his = req.body.data.count_customer_his;
    const Date_his = req.body.data.date_his;
    const Status = req.body.data.status;
    console.log(req)
    db.query("INSERT INTO historys(fname_his,lname_his,tel_his,time_his,count_customer_his,date_his,status) VALUES(?,?,?,?,?,?,?)" ,
    [Fname_his,Lname_his,Tel_his,Time_his,Count_customer_his,Date_his,Status],(err,result) =>{
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
        });
    });

app.get("/st" , (req , res) => {
    const number_table = req.query.number_table;
    const dates = req.query.dates;
    const time = req.query.time
    console.log(req.query)
    const bb = db.query("SELECT * FROM tables WHERE number_table = ? AND dates = ? AND time = ?",[number_table , dates, time], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err); // Send an error response with status code 500
        } else {
            console.log(result);
            res.send(result); // Send the result if there are no errors
        }
    })
    // console.log(bb._results); // Send the result if there are no errors

});



app.delete("/deletelistorder", async(req, res) => {
    console.log(req.body)
    const id_delete = req.body.id;
    const data = await db.query("DELETE FROM list_order WHERE id_list = ?", [id_delete], (err , result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err); // Send an error response with status code 500
        } else {
            console.log("ok");
            res.send(result); // Send the result if there are no errors
        }
    });
  
});

app.delete("/deleteselect_table" ,async(req, res) => {
    console.log(req.body)
    const id_del_select_t = req.body.id;
    const data_selet_t = await db.query("DELETE FROM tables WHERE id_table = ?", [id_del_select_t], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        }else {
            console.log("ok");
            res.send(result);
        }
    });
});


app.listen('5000', () =>{
    console.log('Server is runing om port 5000');
})


