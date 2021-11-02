/**
 * Takes a key and an object and removes the dash characters from the given key
 * @param key target key to remove whitespace from the prop values
 * @param obj target obj remove white space from
 */
function trimWhiteSpace(key) {
    return function newObj(obj) {
        const trimmed = obj[key].replace(/\s+/g, '');
        return { ...obj, [key]: trimmed };
    };
}

module.exports = { trimWhiteSpace };
