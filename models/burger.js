// * Inside `burger.js`, import `orm.js` into `burger.js`
orm = require('../config/orm');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(colVals, condition, cb) {
      orm.update("burgers", colVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(id, cb) {
      orm.delete("burgers", id, function(res) {
        cb(res);
      });
    }
  };
// * Export at the end of the `burger.js` file.
module.exports = burger;