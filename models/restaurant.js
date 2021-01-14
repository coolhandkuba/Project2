var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.all("TABLE NAME", function(result) {
            callback(result);
        });
    },
    create: function(cols, vals, callback) {
        orm.create("TABLE NAME", cols, vals, function(result) {
            callback(result);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("TABLE NAME", objColVals, condition, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for burgers_controller.js 
module.exports = burger;