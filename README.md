## Functional Programming

This repo is dedicated to learning Functional Programming patterns and principles by applying them to a case. The learned patterns are applied to the following dataset: [Survey data](https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json)

## Learning goals

-   Understanding and applying Functional Programming principles:
    -   Pure and impure functions
    -   High-order functions
    -   Currying
    -   Partial application
    -   Composition by function chaining

## Raw data

The data we were given is a survey dataset that was conducted before the beginning of this course. The dataset is currently very messy and hard to work with. Some questions are left unanswered, there are questions which have no relevance at all, key names are to long, etc. Below an example of the data:

```json
    "Wat is je favoriete soort huisdier?": "kat",
    "Wat is je oogkleur?": "Bruin",
    "Wat is je favoriete windrichting?": "Oost",
    "Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?": 7,
    "Kies zelf of je deze vraag beantwoord.": "Oke",
    "Wat is je favoriete datum?": "15/01/1999",
    "Wat is je favoriete datum, maar nu in tekst!": "vijftien januari negentiennegenennegentig",
    "Wat is je favoriete zuivelproduct?": "Melk",
    "Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)": "Zwart, Grijs",
    "Op welke verdieping van het TTH studeer je het liefst?": 2,
    "Wat wil je worden als je groot bent?": "Frontend developer",
    "Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.": "Piloot",
    "Kaas is ook een zoogdier?": "Wat.",
    "Als je later een auto zou kopen, van welk merk zou deze dan zijn?": "Mercedes C63 AMG"
```

Link to the dataset: [Survey data](https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json)

## Cleaned data

By applying functional patterns the data has been cleaned. Property names have been renamed to shorter and more concise names, the values of the eyeColor have been converted to HEX values and the clothesWearingToday answers have been put in an array. The cleaned data looks as following:

```json
{
    "eyeColor": "#0000FF",
    "clothesWearingToday": ["#00b300", "#000000", "#ffffff"]
}
```

## Installation guide

Open your terminal and type in the following commands

`cd desktop`
`git clone https://github.com/benl95/fp.git`

Navigate to the cloned repo and type:

`npm install`

Navigate to src dir:

`cd src`

Execute index.js:

`node index.js`

## To Do's

-   [x] Rename keys
-   [x] Filter out useless data
-   [x] All answers to lowercase
-   [x] Store values clothesWearingToday in array
-   [x] Convert unanswered questions to null/not answered
-   [x] Convert eye colors to HEX code
-   [x] Remove dash characters from eyeColors
-   [x] Remove whitespace from eyeColors
-   [ ] Convert clothesWearingToday answers to HEX Code
-   [ ] Update README
-   [ ] Write logbook

# Tools used

-   NodeJS
-   Prettier
-   Needle

## license

MIT
