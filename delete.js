var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myquery = { id: 2 };
    db.collection("user").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
}); 