const fs = require('fs')
//making a json object using stringfy;
//below code is object of Student
const student ={
    name:"jonh cena",
    idNum:"KrK123",
    class:"4 sem",
    Branch:"Computer Science",
    Des:"Home of WWE"
}
//const fileName = 'StudentData.json'

//make it json object using Stringify

const jsonStudent = JSON.stringify(student);
//filesysystem only work with String so we need to convert 
//our object into json so we use Stringify

fs.writeFileSync('StudentData.json',jsonStudent)

//get back original object using parse
//const objStudent = JSON.parse(jsonStudent);

//reading data form a json file;

// let dataBuffer = fs.readFileSync('StudentData.json');
// let dataJson = dataBuffer.toString();
// let findData = JSON.parse(dataJson);
// console.log(findData.name)
//console.log(objStudent.name);
//changing the name and id

let loadData = fs.readFileSync('StudentData.json');
//fetching in obj form
let objData = JSON.parse(loadData);
//console.log(objData)
objData.name = "The UnderTaker";
objData.idNum = 345;
//decoding in json form 
let JsonData = JSON.stringify(objData);
fs.writeFileSync('StudentData.json',JsonData)

