
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = {
        "first_name": "Eve3",
        "last_name": "Holtasstr",
        "expired": false,
        "role": ["adadfmin", "usedfar"]
    };
    db.collection("user").insertOne(myobj, function (err, res) {

        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});