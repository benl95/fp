/**
 * Takes a string and returns a string with no whitespaces
 * @param str target string to trim the whitespace from
 */
function trimWhiteSpace(str) {
    return str.replace(/\s+/g, '');
}

module.exports = { trimWhiteSpace };
