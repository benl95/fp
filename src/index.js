// External modules
const needle = require('needle');

// Local modules
const { renameKeys } = require('./modules/renameKeys');
const { removeUselessData } = require('./modules/filterInProps');
const { clothesValuesToArray } = require('./modules/stringToArray');
const { propValToLowerCase } = require('./modules/toLowerCase');
const { removeUndefined } = require('./modules/removeUndefined');
const { eyeColorToHex } = require('./modules/stringToHex');

needle(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ body }) => JSON.parse(body))
    .then((data) => data.map(renameKeys))
    .then((data) => data.map(removeUselessData))
    .then((data) => data.map(clothesValuesToArray))
    .then((data) => data.map(propValToLowerCase))
    .then((data) => data.map(removeUndefined))
    .then((data) => data.map(eyeColorToHex))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
