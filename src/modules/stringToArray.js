function stringToArray(obj, key) {
    obj[key] = obj[key].toLowerCase().split(' ');
    return obj;
}

module.exports = { stringToArray };
