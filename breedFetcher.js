const request = require("request");
const input = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {
  breedName = input[0];
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (err, res, body) {
      if (err) {
        callback(err, null);
      } else {
        const data = JSON.parse(res.body);
        
        callback(null, data[0].description);
        return;
      }
    }
  );
};

module.exports = { fetchBreedDescription };
