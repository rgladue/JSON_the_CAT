const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return error;
  } else {
    return console.log(desc);
  }
});
