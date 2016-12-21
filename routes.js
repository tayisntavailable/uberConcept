function initialize(app, db) { 
    //A GET request to /cops should return back the nearest cops in the vicinity.
    app.get('/cops', function(req, res){
    /*extract the latitude and longitude info from the request. Then, fetch the nearest cops using MongoDB's geospatial queries and return it back to the client.
    */
    });
}
exports.initialize = initialize;
