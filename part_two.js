let artists = [
    {
        "id": "d65a341435",
        "name": "Riot avenue",
        "artist": "Beautiful Creatures",
        "releaseYear": 1975
    },
    {
        "id": "8b781b242e",
        "name": "Shock",
        "artist": "Monster Magnet",
        "releaseYear": 1956
    },
    {
        "id": "d27116b4eb",
        "name": "Riot avenue",
        "artist": "Beautiful Creatures",
        "releaseYear": 1955
    },
    {
        "id": "fa99283e70",
        "name": "Ritual",
        "artist": "Beautiful Creatures",
        "releaseYear": 1976
    },
    {
        "id": "606e16a1ac",
        "name": "Ritual",
        "artist": "Guns'n'Roses",
        "releaseYear": 1987
    },
    {
        "id": "11f41d49b6",
        "name": "Almost human",
        "artist": "Monster Magnet",
        "releaseYear": 1979
    },
    {
        "id": "cd7a21109b",
        "name": "Ritual",
        "artist": "Thundermother",
        "releaseYear": 1989
    },
    {
        "id": "52abb42731",
        "name": "Psycho circus",
        "artist": "Guns'n'Roses",
        "releaseYear": 1980
    },
    {
        "id": "b04006b461",
        "name": "Loyal to the pack",
        "artist": "Monster Magnet",
        "releaseYear": 1975
    },
    {
        "id": "7957a0d238",
        "name": "Psycho circus",
        "artist": "Mississippi Bones",
        "releaseYear": 1972
    }
]


// sorting the objects in chronological order, from the oldest to the newest
artists.sort((a, b) => (a.releaseYear > b.releaseYear) ? 1 : -1);


// creating an array with just the release years
var release_Year = artists.map(function(el) {
        return el.releaseYear;
});

// extracting the triplets where the release times are equally apart
i = 0;
pos = 0; // position in array (yearsOrder)
let yearsOrder = new Array();

while (i < release_Year.length - 1) {  // to parse all the possible triplets until the penultimate position
    j=i+1;
    for (j; j<release_Year.length; j++) {
        firstYear=release_Year[i];
        secondYear=release_Year[j];
        timeApart=secondYear-firstYear;
        thirdYear=secondYear+timeApart;

        if (release_Year.indexOf(thirdYear, j+1) > -1) {
            yearsOrder[pos] = makeArray(firstYear, secondYear, thirdYear);
            pos = pos + 1;
        }

    }
    i++;
}
console.log(yearsOrder);

// returning the indexes of the triplets in an array
function makeArray(firstYear, secondYear, thirdYear) {
    let myArray = new Array();
    myArray = '(' + firstYear + ',' + secondYear + ',' + thirdYear + ')';

    return myArray;
}

