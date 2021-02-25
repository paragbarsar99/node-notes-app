//const validator = require('validator')
const myNote = require('./note');
const chalk  = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');

//`console.log(chalk.red(command)); 

//if i run the same comman for running our file with some additional 
// command like node app.js add --title "This is  my first notes" then
// process.argv is  gonna show us every thing like --title "This is  my first notes";
//so for sorting out this problem we are gonna use a npm package called yargv this command
//do parsing a argumment for us as we want;

//now we are gonna create a note taking app who's have some additional feature like
//add,remove,read,list
//add command 


console.log(myNote.myNote())
//console.log(command.argv)
// console.log(yargs.argv)
yargs.command({
   command:'add',
   describe:'adding notes',
   builder:{
      title:{
        describe:'Naming the title',
        demandOption:true,
        type:'string'
       },
       body:{
        describe:"My Work",
        demandOption:true,
        type:"string"
        }
     },
    handler(argv) {
     myNote.addNotes(argv.title,argv.body)  
   }
 });
//removing 
 yargs.command({
     command:'remove',
     describe:'removing notes',
     builder:{
        title:{
          describe:"Removing data",
          demandOption:true,
          type:"string"
       }
     },
     handler(argv) {
      myNote.removeNotes(argv.title)
     }
 });
// //read
yargs.command({
    command:'read',
    describe:'reading stored notes',
    builder:{
       title:{
       describe:"Name of The Title",
       type:'string',
       demandOption:true
    }
  },
    handler(argv) {
      myNote.ReadNotes(argv.title)
    }
});
// //listing all up
yargs.command({
    command:'list',
    describe:'listing stored notes',
    handler() {
      myNote.ListNotes()
    }
});
yargs.parse();


//fs.writeFileSync('note.txt',"i am  using node over here");
//fs.appendFileSync('note.txt'," for wring my bakend stuff")
//making a functonm for sending some data over to another file