const express = require('express');
const app = express();
const request = require('request');


app.get('/api/beers', function (req, res) {
  console.log(req.query);
  var options = {
    url: 'http://api.brewerydb.com/v2/beers',
    method: 'GET',
    qs: {
      key: '42203dd9d4196085662ec3c1ccfeefc4',
      styleId: '30',
      hasLabels: 'Y',
      status: 'verified',
      withBreweries: 'Y'
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

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
