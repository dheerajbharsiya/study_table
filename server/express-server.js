// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
console.log(__dirname);

// Get our API routes
//const api = require('./server/routes/apiRoutes');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/resolution')));
let url = 'mongodb://dbharsiya:1Mlab%401996@ds259250.mlab.com:59250/study_table';
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
// Set our api routes
//app.use('/api', api);

// Catch all other routes and return the index file

app.post('/hello', (req, res) => {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
  console.log(req.body);
  // Connection URL
  // var url = 'mongodb://ds259250.mlab.com:59250/study_table';
  // Use connect method to connect to the Server
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var db = client.db('study_table');
    //Insert a single document
    db.collection('topic').insertOne(req.body, function (err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);
      client.close();
      return res.json({ data: 'text from api' });
    })


  });

});

app.get('/getTopics', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var db = client.db('study_table');
    //Insert a single document
    db.collection('topic').find().toArray(function (err, documents) {
      assert.equal(null, err);
      return res.json(documents);
    });
  });
});



  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', '/resolution/index.html'));
  });


  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));
