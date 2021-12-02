const request = require("request");



const fetchBreedDescription = function(breedName, callback)  {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`, function(err, res, body) {
    if (err) {return callback(err)}
    else{
    const data = JSON.parse(res.body);
    callback(data[0].description);return;
    }
  })
};

module.exports = {fetchBreedDescription}