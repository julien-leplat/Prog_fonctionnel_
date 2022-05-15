import generateJsonFileFromCsv from 'convert-csv-to-json';

//import * as csvToJson from 'convert-csv-to-json';

const csvToJSON = (fileInputName, fileOutputName) => {
    json = generateJsonFileFromCsv(fileInputName,fileOutputName);
    return json;
}

export {csvToJSON};