// Utilities
const { pipe } = require('./utils/pipe');
const { stringToHex } = require('./helpers/stringToHex');
const { trimWhiteSpace } = require('./helpers/trimWhiteSpace');
const { removeDashCharacter } = require('./helpers/removeDash');
const { filterInProps } = require('./helpers/filterInProps');
const { renameKeyTo } = require('./helpers/renameKeyTo');
const { stringToArray } = require('./helpers/stringToArray');
const { removeUndefined } = require('./helpers/removeUndefined');
const { toLowerCase } = require('./helpers/toLowerCase');
const { arrayToHex } = require('./helpers/arrayToHex');

// Reference maps
const keysMap = require('../assets/keysMap');
const propsMap = require('../assets/propsMap');
const colorsMap = require('../assets/colorsMap');

// Partially applied
const trimStr = trimWhiteSpace('eyeColor');
const removeDashStr = removeDashCharacter('eyeColor');
const strToHex = stringToHex(colorsMap)('eyeColor');
const renameKeys = renameKeyTo(keysMap);
const newObj = filterInProps(propsMap);
const clothesToArray = stringToArray('clothesWearingToday');
const clothesArrayToHex = arrayToHex('clothesWearingToday');

// Function chains
function cleanProps(x) {
    return pipe(
        renameKeys,
        newObj,
        toLowerCase,
        removeUndefined,
        clothesToArray
    )(x);
}

function cleanColorProps(x) {
    return pipe(trimStr, removeDashStr, strToHex, clothesArrayToHex)(x);
}

module.exports = { cleanProps, cleanColorProps };
