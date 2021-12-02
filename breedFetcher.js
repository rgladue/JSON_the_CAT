const request = require("request");
const input = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, function(err, res, body) {
  if (err) {return console.log(`Uh-Oh: ${err.message}`)}
  const data = JSON.parse(body);
  return console.log(data[0].description);
})