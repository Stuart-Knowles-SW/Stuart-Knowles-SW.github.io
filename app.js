const express = require("express");
const favicon = require("serve-favicon")
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.use(favicon("./images/myIcon.ico"));
app.use('/scripts', express.static('scripts'))
app.use('/content', express.static('content'))
app.use('/images', express.static('images'))
app.use('/styles', express.static('styles'))
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
