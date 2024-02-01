var figlet = require('figlet')

figlet("DevelopCHUN", function (err, data) {
    if (err) {
        console.log("wrong");
        console.dir(err);
        return;
    }
    console.log(data);
})