var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db.mywebstory.nl",
  user: "md448264db409655",
  password: "pU2b00ttNDVV"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
