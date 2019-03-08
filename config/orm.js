// * Import (require) `connection.js` into `orm.js`
var connection = require('../config/connection');
// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
let orm = {
//   * `selectAll()`
all: function(input, cb) {
    var query = "SELECT * FROM " + input + ";"
    connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result)
    })
},
//   * `insertOne()`
create: function(val, cb) {
    // INSERT INTO burgers (burger_name) VALUES ("Cheese Bacon");
    var query = "INSERT INTO burgers (burger_name) VALUES (" + val + ");";

    connection.query(query, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    })
},
//   * `updateOne()`
update: function (table, colVals, id, cb) {
    // UPDATE burgers SET devoured=true WHERE id=1
    var query = "UPDATE " + table + " SET " + colVals + " WHERE id=" + id;

    connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result);
    });
},
delete: function(table, condition, cb) {
    // DELETE FROM burgers WHERE id=4;
    var query = "DELETE FROM "+table+" WHERE " + condition + ";"

    connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result);
    })
}
}
// * Export the ORM object in `module.exports`.
module.exports = orm;