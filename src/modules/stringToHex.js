const colorsMap = {
    blauw: '#0000FF',
    groen: '#00b300',
    bruin: '#a52a2a',
    grijs: '#808080',
};

function transformProp(reference) {
    return function keyName(key) {
        return function matchPropVal(obj) {
            const matched = Object.keys(reference).find(
                (element) => element === obj[key]
            );
            return { ...obj, [key]: reference[matched] };
        };
    };
}

const eyeColorToHex = transformProp(colorsMap)('eyeColor');

module.exports = { eyeColorToHex };
