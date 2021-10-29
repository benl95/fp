const propsToFilter = [
    'eyeColor',
    'favoriteWindDirection',
    'intrinsicMotivation',
    'favoriteDate',
    'favoriteDairyProduct',
    'clothesWearingToday',
    'aspiringDream',
    'aspiringDreamChild',
    'aspiringCarBrand',
];

function filterInProps(props) {
    return function newObj(obj) {
        return props.reduce((acc, curr) => {
            acc[curr] = obj[curr];
            return acc;
        }, {});
    };
}

const removeUselessData = filterInProps(propsToFilter);

module.exports = { removeUselessData };
