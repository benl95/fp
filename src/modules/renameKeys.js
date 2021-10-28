function renameKeyTo(keysMap, obj) {
    return Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] },
        }),
        {}
    );
}

module.exports = { renameKeyTo };
