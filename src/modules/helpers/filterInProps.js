/**
 * Takes an object and and returns a new object with filtered properties
 * @param props the properties to filter in
 * @param obj target object to perform the transformation on
 *
 */
function filterInProps(props) {
    return function newObj(obj) {
        return props.reduce((acc, curr) => {
            acc[curr] = obj[curr];
            return acc;
        }, {});
    };
}

module.exports = { filterInProps };
