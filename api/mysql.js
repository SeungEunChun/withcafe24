const express = require('express')
const mysql = require('mysql')
const sqldata = express.Router();
const mydata = require('../data/dbconfig.json')

const sendsql = mysql.createPool(mydata);


sqldata.post('/', (req, res) => {

    // res.send(req.query)
    sendsql.getConnection((err, connect) => {
        if (err) throw console.log("db오류" + err)
        connect.query(`SELECT * FROM ${req.query.tablenm}`, (error, result) => {
            if (error) throw console.log('query문오류' + error)
            res.send(result);
        })
    });
})



module.exports = sqldata;