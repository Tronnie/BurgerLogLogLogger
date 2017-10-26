//Connect Node to MySQL.
var mysql = require ('mysql');

var connection = mysql.createConnection({
  port: 3306, //3306 is always MySQL!!!!!
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err){
  if (err){
    console.error("error connecting: " + err.stack);
    return;
  }
    console.log("connected as id: " + connection.threadId)
});

module.exports = connection;
//export connection for the orm to use
