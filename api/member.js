

const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json")

const memberjoin = express.Router();

memberjoin.use(express.json())
memberjoin.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)



//글목록보기
//리액트에서 요청하는 주소의 형태는 서버/store/테이블명
memberjoin.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm; //0,1,~~~,all,Scinic_Product,Category
    const {
        u_id,
        u_pw,
        u_name,
        u_phone,
        u_gender,

        marketing
    } = req.body.body

    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보 확인" + err)
        connect.query(`INSERT INTO ${tablenm}(u_id,
        u_pw,
        u_name,
        u_phone,
        u_gender,
    
        marketing) VALUES("${u_id}","${u_pw}","${u_name}","${u_phone}","${u_gender}","${marketing}")`, (error, result) => {
            if (error) throw console.log(error + "쿼리문 오류!")
            res.send({ msg: "회원가입 완료" })
            console.log(result)
        })
    })









})










module.exports = memberjoin;