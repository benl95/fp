function propValueToArray(obj, reference) {
    const toArray = Object.entries(obj).map(([key, val]) => [
        key,
        obj[reference] === obj[key] ? obj[key].toLowerCase().split(' ') : val,
    ]);

    return Object.fromEntries(toArray);
}

module.exports = { propValueToArray };
