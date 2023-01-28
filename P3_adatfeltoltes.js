var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://kelomotor:ZA1nYDafsf5ldiMl@cluster0.wb0cc.mongodb.net/test"; //adatokra figyelj!

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("kelomotor"); //adatbázis név: "mydb"
    var ujAdat={    //objectum
        _ev: ev,
        _honap: honap,
        _nap: nap, 
        napiBevetel: napi_ossz_bevetel, //kulcs:"érték"
        másnapiNyitó: masnapi_nyito    //kulcs:"érték"
    }
    adatbazis.collection("napi_nyito_zaro").insertOne(ujAdat, function (err, res){ //tábla név: "napi_nyito_zaro"
        if(err) throw err;
        console.log("Ez új adatelem beillesztve"); //siker esetén ez az üzenet jelenik meg a terminálban
        db.close();
    });
});

//terminal: node fileNév (futtatás)
//ellenörzés: mongoDB honlapon, Database/Browse Collections
