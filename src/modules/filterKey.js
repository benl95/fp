export function filterKeyByReference(obj, arr) {
    return arr.reduce((acc, curr) => {
        obj[curr] ? acc[curr] = obj[curr] : ''
        return acc
    }, {})
}