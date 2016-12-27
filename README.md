UberApp Concept
---

###install:

- mongo
- show dbs
- use myUberApp
- show collections
- mongoimport --db myUberApp --collection policeData --drop --file ./uberConcept.json --jsonArray
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
- Depending on query strings shows json of cop data for example:
    + http://localhost:8000/cops?lat=12.9718915&&lng=77.64115449999997


### How to run: 

- run `node app.js`
- Open a demo citizen page by going to http://localhost:8000/citizen.html?userId=YOURNAME
- http://localhost:8000/citizen.html
- http://localhost:8000/cop.html
- http://localhost:8000/data.html
- Open 3 or more cop pages from the imported cop profiles on separate tabs - [01](http://localhost:8000/cop.html?userId=01), [02](http://localhost:8000/cop.html?userId=02), [03](http://localhost:8000/cop.html?userId=03), [04](http://localhost:8000/cop.html?userId=04), [05](http://localhost:8000/cop.html?userId=05), [06](http://localhost:8000/cop.html?userId=06), [07](http://localhost:8000/cop.html?userId=07)