/**
 * Takes an object and returns a string with a given default value
 * @param obj target object to perform the transformation on
 *
 */
function removeUndefined(obj) {
    const notAnswered = Object.entries(obj).map(([key, val]) => [
        key,
        val === '' ? 'Geen antwoord' : val,
    ]);

    return Object.fromEntries(notAnswered);
}

module.exports = { removeUndefined };
