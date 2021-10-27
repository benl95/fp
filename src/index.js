// External modules
const axios = require('axios');

// Local modules
const { filterKeyByReference } = require('./modules/filterKeyByReference');

axios(
    'https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json'
)
    .then(({ data }) =>
        data.map((obj) =>
            filterKeyByReference(obj)(
                'Wat is je favoriete soort huisdier?',
                'Als je later een auto zou kopen, van welk merk zou deze dan zijn?',
                'Wat is je oogkleur?',
                'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?',
                'Wat is je favoriete datum?',
                'Wat is je favoriete zuivelproduct?',
                'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)',
                'Op welke verdieping van het TTH studeer je het liefst?',
                'Wat wil je worden als je groot bent?',
                'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.'
            )
        )
    )
    .then((filtered) => console.log(filtered))
    .catch((error) => {
        throw new Error(error);
    });
