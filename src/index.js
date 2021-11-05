// Packages
const needle = require('needle');

// Modules
const { cleanProps, cleanColorProps } = require('./modules/cleanData');

needle(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ body }) => JSON.parse(body))
    .then((data) => data.map(cleanProps))
    .then((data) => data.map(cleanColorProps))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
