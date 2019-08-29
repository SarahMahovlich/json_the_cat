const request = require('request');
const args = process.argv.slice(2);

const breedFetcher = function(breed) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    
    if (error) {
      console.log(`There was an error: ${error}`);
      return;
    } else if (response.statusCode < 200 || response.statusCode >= 300) {
      console.log(`There was a non 200 statusCode: ${response.statusCode}`);
      return;
    }
    
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`breed: ${breed} not found`);
    } else {
      console.log(data[0].description);
    }

  });
};

breedFetcher(args[0]);




 
  