const chalk = require("chalk");
const fs = require("fs");
const myNote = () => {
    console.log('my notes..')
}
 
//read notes from exsting file
 const loadNotes = () => {
  try{
   const jsonFile = fs.readFileSync('notes.json');
   const strFile = jsonFile.toString();
   const objFile = JSON.parse(strFile);
   return objFile;
  }catch(e){
     return [];   
  }
}

  //adding notes to a file
  const addNotes = (title,body) => {
   const notes = loadNotes();
   
     //checking for duplicate title
     //let duplicate = notes.filter(note => note.title === title);
     let duplicate = notes.find(note  => note.title === title);
       if(!duplicate){
        notes.push({
          title:title,
          body:body
      });
      //call to saveNotes methode
      saveNotes(notes)
      }else{
         console.log("title already taken")
       }
      
  }

 
   
  //make save nodes methode
  const saveNotes = notes => {
      const jsonFile = JSON.stringify(notes);
     fs.writeFileSync('notes.json',jsonFile);
     console.log(chalk.green.bold("notes are saved"))
  }
   
  
  // remove Notes
  const removeNotes = title => {
  const notes = loadNotes();
    const keepNotes = notes.filter( item  =>  item.title !== title);
    //const keepNotes = notes.find(item => item.title === title);
     console.log(keepNotes)
     if(notes.length > keepNotes.length){
        saveNotes(keepNotes);      
     }else{
       console.log(chalk.red.bold('Title Not Match'))
     }
  }
 //List all notes 
  const ListNotes = () =>{
    const getList = loadNotes();
    getList.forEach(element => {
        console.log(chalk.green(element.title + ':'),chalk.blue(element.body))
    });
  }
  //read notes 
  const readNotes = (title) => {
    debugger
    const notes = loadNotes();
    const gotIt = notes.find(search => search.title === title)
    gotIt !== undefined ? 
    console.log(chalk.green(`Title: ${gotIt.title}`),  
    chalk.white(`Body: ${gotIt.body}`)) :
    console.log(chalk.red("Title Not Match")) 
  }       
 module.exports = {
  myNote:myNote,
  addNotes:addNotes,
  removeNotes:removeNotes,
  ListNotes:ListNotes,
  ReadNotes:readNotes
}
