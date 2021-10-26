export function filterKeyByReference(obj) {
    return function compareKeys(...args) {
        return args.reduce((acc, curr) => {
            obj[curr] ? acc[curr] = obj[curr] : ''
            return acc
        }, {})
    }
}