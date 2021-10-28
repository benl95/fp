function filterKeyByReference(obj, ...args) {
    return args.reduce((acc, curr) => {
        acc[curr] = obj[curr];
        return acc;
    }, {});
}

module.exports = { filterKeyByReference };
