import * as R from "ramda";

import fs from "fs";
import chiSquaredTest from "chi-squared-test";
// We expect a fair die
const expected = [2, 2, 2, 2, 2, 2];

// Looks pretty unfair...
let observed = [6, 3, 3, 0, 0, 0];

// Reduction in degrees of freedom is 1, since knowing 5 categories determines the 6th
const reduction = 1;

let probability = chiSquaredTest(observed, expected, reduction);
// Gives 0.010362, which indicates that it's unlikely the die is fair

// However, something a little more likely
observed = [1, 2, 4, 4, 2, 1];
probability = chiSquaredTest(observed, expected, reduction);
console.log(probability)
console.log("Hello World");
console.log(Math.sqrt(9));
const csv = fs.readFileSync('./Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

const csvToJson = R.compose(
    R.map(R.compose(
        R.evolve({episodes: Number}),
        R.zipObj(columns),
        R.split(',')
    )),
    R.split('\n')
)(csv)

//console.log(csvToJson)

var lejson = JSON.stringify(csvToJson);
//console.log(lejson)
fs.writeFile("iris.json", lejson, function(err, result) {
    if(err) console.log('error', err);
});









