var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

function findAll(req, res) {
    //Get data from mongoDB
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = {};
        db.collection("user").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
}
function search(req, res) { 
    var fname = req.param('fname'); 
    console.log(fname);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = {first_name:fname};
        db.collection("user").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
}
//req.query.role
function searchQuery(req, res) { 
    var fname = req.params.role; 
    console.log(fname);
    MongoClient.connect(url, function (err, db) {
         if (err) throw err;
        var query = {role:fname};
        db.collection("user").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
}

module.exports = {
    findAll: findAll,
    search:search,
    searchQuery:searchQuery
};