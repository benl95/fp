// External modules
const needle = require('needle');

// Local modules
const { renameKeyTo } = require('./modules/renameKeys');
const { filterKeyByReference } = require('./modules/filterKeyByReference');
const { stringToArray } = require('./modules/stringToArray');
const { toLowerCase } = require('./modules/toLowerCase');

needle(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ body }) => JSON.parse(body))
    .then((parsed) =>
        parsed.map((obj) =>
            renameKeyTo(
                {
                    'Wat is je favoriete soort huisdier?': 'favoritePet',
                    'Wat is je oogkleur?': 'eyeColor',
                    'Wat is je favoriete windrichting?':
                        'favoriteWindDirection',
                    'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
                        'intrinsicMotivation',
                    'Wat is je favoriete datum?': 'favoriteDate',
                    'Wat is je favoriete zuivelproduct?':
                        'favoriteDairyProduct',
                    'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
                        'clothesWearingToday',
                    'Op welke verdieping van het TTH studeer je het liefst?':
                        'favoriteStudyFloor',
                    'Wat wil je worden als je groot bent?': 'aspiringDream',
                    'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
                        'aspiringDreamChild',
                    'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
                        'aspiringCarBrand',
                },
                obj
            )
        )
    )
    .then((newObject) =>
        newObject.map((obj) =>
            filterKeyByReference(
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
    .then((result) =>
        result.map((obj) => stringToArray(obj, 'clothesWearingToday'))
    )
    .then((result) => result.map((obj) => toLowerCase(obj)))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
