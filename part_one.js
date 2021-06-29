let artists = [
    {"id": "9306c8909e", "name": "Party with guns", "artist": "Thundermother", "releaseYear": 1978},
    {"id": "49baca3524", "name": "Riot avenue", "artist": "Beautiful Creatures", "releaseYear": 1994},
    {"id": "df81cca436", "name": "Party with guns", "artist": "Mississippi Bones", "releaseYear": 1956},
    {"id": "e493993b85", "name": "Ritual", "artist": "Guns'n'Roses", "releaseYear": 1975},
    {"id": "6c3d54d7b7", "name": "Riot avenue", "artist": "Guns'n'Roses", "releaseYear": 1976},
    {"id": "4ca1171c2a", "name": "Suffer", "artist": "Alice Cooper", "releaseYear": 1972},
    {"id": "4545889c17", "name": "Riot avenue", "artist": "Mississippi Bones", "releaseYear": 1959},
    {"id": "8e91ad9f84", "name": "Psycho circus", "artist": "Monster Magnet", "releaseYear": 2007},
    {"id": "7870c65cd3", "name": "Capricorn", "artist": "Smokey Fingers", "releaseYear": 2002},
    {"id": "10ac1f6271", "name": "Deuce", "artist": "Monster Magnet", "releaseYear": 2004}
]


// creating an array with just the release years
let releaseYears = artists.map(function (el) {
    return el.releaseYear;
});


function main() {

    // sorting the objects in chronological order, from the oldest to the newest
    artists.sort((a, b) => (a.releaseYear > b.releaseYear) ? 1 : -1);

// extracting the triplets where the release times are equally apart
    let firstIndex = 0;
    let found = false; // used as condition to know where the first triplet was found

    while (!found) {
        let secondIndex = firstIndex + 1;
        for (secondIndex; secondIndex < releaseYears.length; secondIndex++) {
            let firstYear = releaseYears[firstIndex];
            let secondYear = releaseYears[secondIndex];
            let timeApart = secondYear - firstYear;
            let thirdYear = secondYear + timeApart;


            // we check at every step if we found a third value to match the first two
            let isFound = releaseYears.indexOf(thirdYear) > -1;
            if (isFound) { // when it returns -1 it means the value doesn't exist, else the index
                found = true;
                return [ firstIndex, secondIndex, releaseYears.indexOf(thirdYear) ];
            }

        }
        firstIndex++;
    }
}

// returning the indexes of the triplets in an array
function makeArray(firstYear, secondYear, thirdYear) {
    let myArray = new Array(3);
    myArray[0] = firstYear;
    myArray[1] = secondYear;
    myArray[2] = thirdYear;
    return myArray;
}


console.log(main());