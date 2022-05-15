import * as R from 'ramda';

import fs from "fs";

//Read CSV file
const csv = fs.readFileSync('./CSV_Files/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

const csvToJson = R.compose(
    R.map(R.compose(
        R.evolve({episodes: Number}),
        R.zipObj(columns),
        R.split(',')
    )),
    R.split('\n')
)(csv)

//console.log(data);

//Generate JSON file from CSV file
var lejson = JSON.stringify(csvToJson);
console.log(lejson)
fs.writeFile("iris.json", lejson, function(err, result) {
    if(err) console.log('error', err);
});


//import chiSqTest from 'chi-sq-test';
import chiSquaredTest from 'chi-squared-test';

const splitIndex = R.pipe(
    R.converge(R.multiply(0.80), [R.length]),
    Math.round,
);

//Define variable data from JSON from CSV
let data = csvToJson;

const splitData = R.splitAt(splitIndex(data), data);

const trainingData = splitData[0];
const testingData = splitData[1];

console.log(trainingData);
console.log(testingData);

const getObserved = R.pipe(
    R.pluck('Species'),
    R.countBy(R.identity),
    R.values,
);

const getExpected = R.pipe(
    getObserved,
    R.converge(
    R.repeat,
    [R.converge(R.divide,[R.sum,R.length]),R.length],
    ),
);

const getDegreeOfFreedom = R.pipe(
    getObserved,
    R.converge(R.subtract(1), [R.length]),
    Math.abs,
);

const observed = getObserved(testingData);
const expected = getExpected(testingData);
const DegreeOfFreedom = getDegreeOfFreedom(testingData)

const probabilities = chiSquaredTest(observed, expected, DegreeOfFreedom);
console.log(probabilities);

const getValues = R.pipe(
    R.map(
        R.pipe(
            R.values,
            R.drop(2),
            R.dropLast(1),
        )
    )
);

const values = getValues(trainingData);

console.log(values);


//PCA
/*
import {pca} from './pca.js';

const pca_result = pca(data);
console.log(pca_result);
*/






