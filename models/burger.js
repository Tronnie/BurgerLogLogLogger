var orm = require ("../config/orm.js");

//set up orm for how to interface with the database
var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res);
    });
  },

  create: function(cols, vals, cb){
    orm.create("burgers", cols, vals, function(res){
      cb(res);
    });
  },

  update: function(objColVals, condition, cb){
    orm.update("burgers", objColVals, condition, function(res){
      cb(res);
    });
  }
}; //<--var burger


module.exports = burger;
