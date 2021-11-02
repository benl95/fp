/**
 * Takes a string and returns a string with no whitespaces
 * @param str target string to trim the whitespace from
 */
// function trimWhiteSpace(str) {
//     return str.replace(/\s+/g, '');
// }

const trimEyeColor = trimWhiteSpace('eyeColor');

function trimWhiteSpace(key) {
    return function newObj(obj) {
        const trimmed = obj[key].replace(/\s+/g, '');
        return { ...obj, [key]: trimmed };
    };
}

module.exports = { trimEyeColor };
