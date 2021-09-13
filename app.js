const express = require('express'),
     app = express(),
     PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});
app.listen(PORT, () => {
 console.log('server on...');
})