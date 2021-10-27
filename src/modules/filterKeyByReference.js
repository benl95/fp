const filterKeyByReference = (obj, ...args) =>
    args.reduce((acc, curr) => {
        acc[curr] = obj[curr];
        return acc;
    }, {});

module.exports = { filterKeyByReference };
