const express = require("express");
const app = express();
const port = process.env.PORT || 6118;
const path = require("path");

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "publish/nopage.html"))
})

app.listen(port, () => {
    console.log(`localhost ${port} onload`)
})