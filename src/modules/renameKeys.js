const keysMap = {
    'Wat is je favoriete soort huisdier?': 'favoritePet',
    'Wat is je oogkleur?': 'eyeColor',
    'Wat is je favoriete windrichting?': 'favoriteWindDirection',
    'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
        'intrinsicMotivation',
    'Wat is je favoriete datum?': 'favoriteDate',
    'Wat is je favoriete zuivelproduct?': 'favoriteDairyProduct',
    'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
        'clothesWearingToday',
    'Op welke verdieping van het TTH studeer je het liefst?':
        'favoriteStudyFloor',
    'Wat wil je worden als je groot bent?': 'aspiringDream',
    'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
        'aspiringDreamChild',
    'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
        'aspiringCarBrand',
};

function renameKeyTo(keysMap) {
    return function accessObj(obj) {
        return Object.keys(obj).reduce(
            (acc, key) => ({
                ...acc,
                ...{ [keysMap[key] || key]: obj[key] },
            }),
            {}
        );
    };
}

const renameKeys = renameKeyTo(keysMap);

module.exports = { renameKeys };
