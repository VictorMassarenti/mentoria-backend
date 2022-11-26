const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
	res.render("index")
})