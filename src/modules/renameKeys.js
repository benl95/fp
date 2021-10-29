const referenceMap = require('./assets/keysMap');

function renameKeyTo(keysMap) {
    return function newObj(obj) {
        return Object.keys(obj).reduce(
            (acc, key) => ({
                ...acc,
                ...{ [keysMap[key] || key]: obj[key] },
            }),
            {}
        );
    };
}

const renameKeys = renameKeyTo(referenceMap);

module.exports = { renameKeys };
