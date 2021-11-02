function pipe(...funcs) {
    return function chain(x) {
        return funcs.reduce((acc, func) => func(acc), x);
    };
}

module.exports = { pipe };
