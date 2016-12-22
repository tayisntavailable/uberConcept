var dbOperations = require('./db-operations');

function initialize(app, db) { 
    //A GET request to /cops should return back the nearest cops in the vicinity.
    app.get('/cops', function(req, res){
    /*extract the latitude and longitude info from the request. 
        Then, fetch the nearest cops using MongoDB's geospatial queries and 
        return it back to the client.
    */
        //Convert the query strings into Numbers
        var latitude = Number(req.query.lat);
        var longitude = Number(req.query.lng);

        dbOperations.fetchNearestCops(db, [longitude,latitude], function(results){
        //return the results back to the client in the form of JSON
            res.json({
                cops: results
            });
        });  
    });
}
exports.initialize = initialize;
