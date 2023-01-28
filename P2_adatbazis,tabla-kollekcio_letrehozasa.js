var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://kelomotor:ZA1nYDafsf5ldiMl@cluster0.wb0cc.mongodb.net/test"; //adatokra figyelj!

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("kelomotor"); //adatbázis név: "kelomotor"
    adatbazis.createCollection("napi_nyito_zaro", function(err, res){ //tábla név: "napi_nyito_zaro"
        if(err) throw err;
        console.log("Sikeres adatbázis művelet: Kollekció[tábla] létrehozva!"); //siker esetén ez az üzenet jelenik meg a terminálban
        db.close();
    })
})

//terminal: node fileNév (futtatás)
//ellenörzés: mongoDB honlapon, Database/Browse Collections