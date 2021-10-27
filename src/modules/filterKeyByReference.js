function filterKeyByReference(obj) {
    return function compareKeys(...args) {
        return args.reduce((acc, curr) => {
            if (obj[curr]) acc[curr] = obj[curr];
            return acc;
        }, {});
    };
}

module.exports = { filterKeyByReference };
