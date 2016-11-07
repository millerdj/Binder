const express = require('express');
const request = require('request');

const app = express();

app.use(express.static(__dirname + '/../dist/public'))

app.get('/api/beers', function (req, res) {

  var queryDynamic = {
    qs: {
    styleId: '30',
    key: '42203dd9d4196085662ec3c1ccfeefc4',
    hasLabels: 'Y',
    status: 'verified',
    withBreweries: 'Y',
    order: 'random',
    randomCount: 10
    }
  }

  var queryStatic = {
    url: 'http://api.brewerydb.com/v2/beers',
    method: 'GET',
    headers: {
      format: 'json'
    }
  };

  var options = Object.assign(queryStatic, queryDynamic)

  function callback(error, response, body) {
    if(!error) {
      res.send(body);
    } else {
      console.log('error');
    }
  }

  request.get(options, callback);

});

app.get('/api/styles', function (req, res) {
  var options = {
    url: 'http://api.brewerydb.com/v2/styles',
    method: 'GET',
    qs: {
      key: '42203dd9d4196085662ec3c1ccfeefc4',
    },
    headers: {
      format: 'json'
    }
  };

  function callback(error, response, body) {
    if(!error) {
      res.send(body);
    } else {
      console.log('error');
    }
  }

  request.get(options, callback);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
