//Felhasználónév:kelomotor
//ZA1nYDafsf5ldiMl
//MongoDB Compass alkalmazás: https://downloads.mongodb.com/compass/mongodb-compass-1.35.0-win32-x64.exe
//kapcsolati karakterlánc: mongodb+srv://kelomotor:<password>@cluster0.wb0cc.mongodb.net/test


var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://kelomotor:ZA1nYDafsf5ldiMl@cluster0.wb0cc.mongodb.net/test"; //username password cluster

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Sikeres csatlakozás!");
    db.close();
})


/* 1. https://www.mongodb.com/
2. Regisztráció
3. Ingyenes/googleCloud/Belgium/klaszter létrehozása
4. Felhasználó és jelszó
kelomotor
N5NhNb0aVVUW0fXm
5. Adatbazis menüben meg kell várni míg elkészül a server.
6. Csatlakozás
7. Adja hozzá a jelenlegi IP-címét (Leirás pl: Pc-IP)
8. Válasszon csatlakozási módot
9. Csatlakozzon a MongoDB Compass segítségével
10. MongoDB Compass alkalmazás letöltése
11. kapcsolati karakterlánc kimentése, ezt írjuk a kódba.
mongodb+srv://kelomotor:<password>@cluster0.z9gqtbu.mongodb.net/test
12. js fileba adatok beillesztése.
13. Adatbázis/Böngészés a gyüjtemények között/ */

/*  
Ha elkezd dolgozni egy kezdeti IP-címen, és megpróbál egy másik IP-címet használni, az nem fog működni.
A mongoDB-ben:
NetworkAccess/ (ellenőrizze, hogy a regisztrált IP-cím megegyezik a ténylegesen használt IP-címmel). 
Választhat: IP-cím hozzáadása 
*/
//mongodb: ip cim! network access átállítani! https://cloud.mongodb.com/v2/62b40a1bd8ce3f54a2d1fb50#security/network/accessList
//node.js telepítése, utána gép ujra indítása.
//a kódot és a többi szart be kell irni az url változó linkjéne! és a kodnál vedd ki a kacsacsőrt! 
//terminal: npm install mongodb
//terminal: node fileNév (futtatás)
//ha minden fasza terminálban visszajelzés: Sikeres csatlakozás!