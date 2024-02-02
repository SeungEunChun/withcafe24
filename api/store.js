const express = require('express')
const apistore = express.Router();
const apisql = require("./mysql.js")
apisql.use(express.json())
apisql.use(express.urlencoded({ extended: true }))

//            /store?tablenm=Scinic_Product
apistore.post('/', (req, res, next) => {

    const botable = req.query.tablenm ? req.query.tablenm : ""
    if (botable !== "") {
        // req.body.botable = botable;
        apistore.use('/', apisql)

        next('route')
    } else {
        res.send("테이블없음")
    }
    // req.body.botable = botable;
    // res.send(`${req.query}${botable}`)

})

// apistore.post('/:tablenm', (req, res, next) => {

//     const bo_table = req.params.tablenm;
//     req.body.bo_table = bo_table;
//     res.send(req.body.bo_table)
//     // next("route")
// })
// apistore.use("/", apisql)



module.exports = apistore;

