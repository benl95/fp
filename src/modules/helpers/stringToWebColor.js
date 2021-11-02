/**
 * Takes an object and returns a web color based on the
 * color the string represents
 * @param reference common eye colors reference HEX map
 * @param key the desired property key to perform the transformation on
 * @param obj target object to perform the transformation on
 *
 */
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

module.exports = { stringToWebColor };
