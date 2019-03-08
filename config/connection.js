// * Inside the `connection.js` file, setup the code to connect Node to MySQL.
var mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    connection = mysql.createConnection({
        host:'localhost',
        port:8889,
        user:"root",
        password:"root",
        database:"burgers_db"
    })
}

// Make connection
connection.connect(function(err){
    if (err) {
        console.log('Connection error:' + err)
        return;
    }
    console.log("Connected")
});

// * Export the connection.
module.exports = connection;