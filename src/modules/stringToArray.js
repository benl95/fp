function stringToArray(obj, key) {
    obj[key] = obj[key].split(' ');
    return obj;
}

module.exports = { stringToArray };
