/**
 * Takes an object and returns a new object with the renamed property keys
 * @param keysMap a map of the desired keys to rename and what to rename to
 * @param obj target object to perform the transformation on
 *
 */
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

module.exports = { renameKeyTo };
