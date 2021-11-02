const removeDashEyeColor = removeDashCharacter('eyeColor');

/**
 * Takes a key and an object and removes the dash characters from the given key
 * @param key target key to remove the dash from the prop values
 * @param obj target obj remove dash characters from
 */
function removeDashCharacter(key) {
    return function newObj(obj) {
        const dashRemoved =
            obj[key].indexOf('-') > -1 ? obj[key].replace('-', '') : obj[key];
        return { ...obj, [key]: dashRemoved };
    };
}

module.exports = { removeDashEyeColor };
