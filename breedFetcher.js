const request = require('request');
 
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode < 200 || response.statusCode >= 300) {
      callback(null, `There was a non 200 statusCode: ${response.statusCode}`);
      return;
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback(error, null);
    } else {
      callback(null, data[0].description.trim());
      return;
    }

  });
};

module.exports = { fetchBreedDescription };
