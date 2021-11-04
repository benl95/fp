// Packages
const needle = require('needle');

// Modules
const { cleanProps, cleanEyeColor } = require('./modules/cleanData');
const { clothesArrayToHex } = require('./modules/helpers/arrayToHex');

needle(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ body }) => JSON.parse(body))
    .then((data) => data.map(cleanProps))
    .then((data) => data.map(cleanEyeColor))
    .then((data) => data.map(clothesArrayToHex))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
