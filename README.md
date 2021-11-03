## Functional Programming

This repo is dedicated to cleaning up a survey dataset by applying functional programming patterns and principles. During the course presentations about functional programming will be given. It is also expected of us that we do research about functional programming ourselves and finally apply these to the dataset we were given.

## Data

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

## Installation guide

Open your terminal and type in the following commands

`cd desktop`
`git clone https://github.com/benl95/fp.git`

Navigate to the cloned repo and type in the following commands:

`npm install`

The project can be executed by navigating to the `src` directory and executing the `index.js` file by typing `node index.js`

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
-   [ ] Refactor to fetch code with Promises instead of needle
-   [ ] Show early iterations of code in logbook
-   [ ] Write README
-   [ ] Write logbook (process, thing I learned and applied, etc.)
-   [ ] Render results to view

## license

MIT
