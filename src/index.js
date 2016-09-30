fetch('/api/beers')
.then(function(response) {
  return response.json().then(function(json){
    json.data.forEach(function(beer) {
      console.log(beer.name);
    })
  })
})
.catch(function(error) {
  console.log('error');
});
