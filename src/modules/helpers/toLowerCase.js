/**
 * Takes an object and if property value is a string returns a
 * lowercased string
 * @param obj input object to perform lowercasing on
 */
function toLowerCase(obj) {
    const upperCase = Object.entries(obj).map(([key, val]) => [
        key,
        typeof val === 'string' ? val.toLowerCase() : val,
    ]);

    return Object.fromEntries(upperCase);
}

module.exports = { toLowerCase };
