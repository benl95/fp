// External modules
const needle = require('needle');

// Local modules
const { renameKeyTo } = require('./modules/renameKeys');
const { filterInProps } = require('./modules/filterInProps');
const { propValueToArray } = require('./modules/stringToArray');
const { toLowerCase } = require('./modules/toLowerCase');
const { removeUndefined } = require('./modules/removeUndefined');

// Assets
const { keysMap } = require('./assets/newKeyNames');

needle(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ body }) => JSON.parse(body))
    .then((data) => data.map((obj) => renameKeyTo(keysMap, obj)))
    .then((data) =>
        data.map((obj) =>
            filterInProps(
                obj,
                'eyeColor',
                'favoriteWindDirection',
                'intrinsicMotivation',
                'favoriteDate',
                'favoriteDairyProduct',
                'clothesWearingToday',
                'aspiringDream',
                'aspiringDreamChild',
                'aspiringCarBrand'
            )
        )
    )
    .then((data) =>
        data.map((obj) => propValueToArray(obj, 'clothesWearingToday'))
    )
    .then((data) => data.map((obj) => toLowerCase(obj)))
    .then((data) => data.map((obj) => removeUndefined(obj)))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
