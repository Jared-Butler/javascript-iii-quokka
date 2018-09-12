var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

var score = roundScores.reduce( (total, element) => total + element);
score;

//Use the sum to get an average

let avg = score/roundScores.length;

avg;

//Handicap is 4
var handiScores = roundScores.map((score) => score -4);
//Use a map to reduce all scores by 4
var score2 = handiScores.reduce((total, score) => total + score, 0);
//Use a reduce to get a sum
var avg2 = score2/ handiScores.length
//Use the sum to get an average
avg2;



var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

var lyrics = lyricWords.reduce( (total, word) => total + word );
lyrics;