function filterInProps(obj, ...args) {
    return args.reduce((acc, curr) => {
        acc[curr] = obj[curr];
        return acc;
    }, {});
}

module.exports = { filterInProps };
