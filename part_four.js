let artists = [
    {
        "id": "7e6089a35e",
        "name": "Suffer",
        "artist": "Guns'n'Roses",
        "release_year": 1950,
        "release_month": "Jun"
    },
    {
        "id": "9f18a0d51f",
        "name": "Shock",
        "artist": "Smokey Fingers",
        "release_year": 1995,
        "release_month": "Sep"
    },
    {
        "id": "6e19b9f95d",
        "name": "Capricorn",
        "artist": "Black Sabbath",
        "release_year": 2017,
        "release_month": "May"
    },
    {
        "id": "838ed8013f",
        "name": "Riot avenue",
        "artist": "Guns'n'Roses",
        "release_year": 1990,
        "release_month": "Aug"
    },
    {
        "id": "9189580c19",
        "name": "Hey stoopid",
        "artist": "Alice Cooper",
        "release_year": 1979,
        "release_month": "Oct"
    },
    {
        "id": "43bd3e490d",
        "name": "Love it do death",
        "artist": "Mississippi Bones",
        "release_year": 1965,
        "release_month": "Sep"
    },
    {
        "id": "f3eb8a5ca9",
        "name": "Capricorn",
        "artist": "Smokey Fingers",
        "release_year": 1975,
        "release_month": "Aug"
    },
    {
        "id": "94916f49ee",
        "name": "Ritual",
        "artist": "Beautiful Creatures",
        "release_year": 1963,
        "release_month": "Nov"
    },
    {
        "id": "7142c344b6",
        "name": "Almost human",
        "artist": "Thundermother",
        "release_year": 2014,
        "release_month": "Aug"
    },
    {
        "id": "b251eb79cf",
        "name": "Hey stoopid",
        "artist": "Black Sabbath",
        "release_year": 1951,
        "release_month": "Jun"
    }
]

// assigning each month their position in a year
const monthNames = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
}

function monthCalculator(month) {
    switch (month) {
        case 'Jan':
            return 1;
            break;
        case 'Feb':
            return 2;
            break;
        case 'Mar':
            return 3;
            break;
        case 'Apr':
            return 4;
            break;
        case 'May':
            return 5;
            break;
        case 'Jun':
            return 6;
            break;
        case 'Jul':
            return 7;
            break;
        case 'Aug':
            return 8;
            break;
        case 'Sep':
            return 9;
            break;
        case 'Oct':
            return 10;
            break;
        case 'Nov':
            return 11;
            break;
        case 'Dec':
            return 12;
            break;
    }
}


// calculating the number of months between the objects
function numberOfMonths(firstYear, firstMonth, secondYear, secondMonth) {
    let monthsApart;
    if (firstYear > secondYear) {
        let difYears = firstYear - secondYear;
        let difMonths = monthNames[firstMonth] - monthNames[secondMonth];
        monthsApart = difMonths + difYears * 12;
    } else {
        let difYears = secondYear - firstYear;
        let difMonths = monthNames[secondMonth] - monthNames[firstMonth];
        monthsApart = difYears * 12 + difMonths;
    }
    return monthsApart;
}

// extracting the triplets where the release times are equally apart
let firstIndex = 0;
let result = [];

for (firstIndex; firstIndex < artists.length - 1; firstIndex++) {  // to parse all the possible triplets until the penultimate position
    let secondIndex = firstIndex + 1;
    for (secondIndex; secondIndex < artists.length; secondIndex++) {
        let firstYear = artists[firstIndex].release_year;
        let firstMonth = artists[firstIndex].release_month;

        let secondYear = artists[secondIndex].release_year;
        let secondMonth = artists[secondIndex].release_month;

        let timeApart = numberOfMonths(firstYear, firstMonth, secondYear, secondMonth);

        for (let thirdIndex = secondIndex + 1; thirdIndex < artists.length; thirdIndex++) {
            let thirdYear = artists[thirdIndex].release_year;
            let thirdMonth = artists[thirdIndex].release_month;

            if (timeApart === numberOfMonths(secondYear, secondMonth, thirdYear, thirdMonth)) {
                result.push(makeArray(firstIndex, secondIndex, thirdIndex));
            }
        }
    }
}
console.log(result);


// returning the indexes of the triplets in a new array
function makeArray(firstIndex, secondIndex, thirdIndex) {
    let myArray = new Array;
    myArray = '(' + firstIndex + ',' + secondIndex + ',' + thirdIndex + ')';

    return myArray;
}