let artists = [
    {
        "id": "c5021e3280",
        "name": "Hey stoopid",
        "artist": "Guns'n'Roses",
        "releaseYear": 1974
    },
    {
        "id": "3ce55463bf",
        "name": "Suffer",
        "artist": "Smokey Fingers",
        "releaseYear": 1981
    },
    {
        "id": "bcc5c14d13",
        "name": "Suffer",
        "artist": "Monster Magnet",
        "releaseYear": 1959
    },
    {
        "id": "8d15d48781",
        "name": "Psycho circus",
        "artist": "Guns'n'Roses",
        "releaseYear": 1977,
        "isWrong": true
    },
    {
        "id": "ef4f06ff9c",
        "name": "Deuce",
        "artist": "Smokey Fingers",
        "releaseYear": 1968
    },
    {
        "id": "2a48f590c2",
        "name": "Deuce",
        "artist": "Mississippi Bones",
        "releaseYear": 1953,
        "isWrong": true
    },
    {
        "id": "f4da25834c",
        "name": "Psycho circus",
        "artist": "Guns'n'Roses",
        "releaseYear": 1995
    },
    {
        "id": "66c738018d",
        "name": "Suffer",
        "artist": "Alice Cooper",
        "releaseYear": 2009
    },
    {
        "id": "6d4a5d54d0",
        "name": "Hey stoopid",
        "artist": "Monster Magnet",
        "releaseYear": 1954
    },
    {
        "id": "b6312ce29c",
        "name": "Shock",
        "artist": "Smokey Fingers",
        "releaseYear": 1958,
        "isWrong": true
    }
]


// sorting the objects in chronological order, from the oldest to the newest
artists.sort((a, b) => (a.releaseYear > b.releaseYear) ? 1 : -1);


// creating an array with just the release years of the objects where "isWrong" doesn't exist
var release_Year = artists.map(function(el) {
    if (el.isWrong != true) {
        return el.releaseYear;
    }
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

