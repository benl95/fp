// Utilities
const { pipe } = require('./utils/pipe');
const { stringToWebColor } = require('./helpers/stringToWebColor');
const { trimWhiteSpace } = require('./helpers/trimWhiteSpace');
const { removeDashCharacter } = require('./helpers/removeDash');
const { filterInProps } = require('./helpers/filterInProps');
const { renameKeyTo } = require('./helpers/renameKeyTo');
const { stringToArray } = require('./helpers/stringToArray');
const { removeUndefined } = require('./helpers/removeUndefined');
const { toLowerCase } = require('./helpers/toLowerCase');

// Reference maps
const keysMap = require('../assets/keysMap');
const propsMap = require('../assets/propsMap');
const colorsMap = require('../assets/colorsMap');

// Partially applied
const trimStr = trimWhiteSpace('eyeColor');
const removeDashStr = removeDashCharacter('eyeColor');
const strToHex = stringToWebColor(colorsMap)('eyeColor');
const renameKeys = renameKeyTo(keysMap);
const newObj = filterInProps(propsMap);
const clothesToArray = stringToArray('clothesWearingToday');

// Functions chains
function cleanProps(x) {
    return pipe(
        renameKeys,
        newObj,
        toLowerCase,
        removeUndefined,
        clothesToArray
    )(x);
}

function cleanEyeColor(x) {
    return pipe(trimStr, removeDashStr, strToHex)(x);
}

module.exports = { cleanProps, cleanEyeColor };
