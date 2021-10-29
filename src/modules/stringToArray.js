function propValueToArray(keyReference) {
    return function accessObj(obj) {
        const toArray = Object.entries(obj).map(([key, val]) => [
            key,
            obj[keyReference] === obj[key]
                ? obj[key].toLowerCase().split(' ')
                : val,
        ]);

        return Object.fromEntries(toArray);
    };
}

const clothesValuesToArray = propValueToArray('clothesWearingToday');

module.exports = { clothesValuesToArray };
