var orm = require("../config/orm.js");

//following are the functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res)
        });
    },
    updateOne: function (objColVals, devoured, cb) {
        orm.updateOne("burgers", objColVals, devoured, function (res) {
            cb(res)
        });
    },
    delete: function(devoured, cb){
        orm.delete("burgers", devoured, function(res){
            cb(res)
        });
    }
}

module.exports = burger;