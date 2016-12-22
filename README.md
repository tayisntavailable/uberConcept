- mongo
- show dbs
- use myUberApp
- show collections
- mongoimport --db myUberApp --collection policeData --drop --file ./uberConcept.json
- db.policeData.find().pretty()
- db.policeData.find({userId:“01”}).pretty()
- db.policeData.createIndex({"location":"2dsphere"})
- Now, to get all cops that are located within 2 kilometers from latitude 12.9718915 and longitude 77.64115449999997, run this :
```
db.policeData.find({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [77.64115449999997, 12.9718915]
            },
            $maxDistance: 2000
        }
    }
}).pretty()
```
- sudo npm install
To Run:

- node app.js 
