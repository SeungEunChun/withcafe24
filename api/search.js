const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json")

const searchapi = express.Router();

searchapi.use(express.json())
searchapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)


searchapi.post('/s/:keyword', (req, res) => { //검색엔진
    const keyword = req.params.keyword;


    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보" + err)
        connect.query(`select * from Scinic_Product WHERE title LIKE "%${keyword}%"`, (error, result) => {
            if (error) throw console.log("검색 쿼리문 오류")
            res.send(result);
            console.log(result);
            connect.release();
        })
    })
})


module.exports = searchapi;