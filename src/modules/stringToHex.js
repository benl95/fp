const referenceMap = require('./assets/colorsMap');

function stringToWebColor(reference) {
    return function keyName(key) {
        return function newObj(obj) {
            const matched = Object.keys(reference).find(
                (element) => element === obj[key]
            );
            return { ...obj, [key]: reference[matched] };
        };
    };
}

const eyeColorToHex = stringToWebColor(referenceMap)('eyeColor');

module.exports = { eyeColorToHex };
