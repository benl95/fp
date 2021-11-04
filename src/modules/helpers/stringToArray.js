/**
 * Takes an object and and returns an array containing
 * the string values of the property
 * @param keyReference the target property key to perform the transformation on
 * @param obj target object to perform the transformation on
 *
 */
function stringToArray(reference) {
    return function newObj(obj) {
        const toArray = Object.entries(obj).map(([key, val]) => [
            key,
            obj[reference] === obj[key]
                ? obj[key].toLowerCase().replace(/[, ]+/g, ' ').split(' ')
                : val,
        ]);

        return Object.fromEntries(toArray);
    };
}

module.exports = { stringToArray };
