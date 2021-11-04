const { colorArrayToHex } = require('./mapColors');

const clothesArrayToHex = arrayToHex('clothesWearingToday');

function arrayToHex(key) {
    return function newObj(obj) {
        const newArray = obj[key].map(colorArrayToHex);
        return { ...obj, [key]: newArray };
    };
}

module.exports = { clothesArrayToHex };
