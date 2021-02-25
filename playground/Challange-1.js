//return undone element form give array using a methode
const tasks = {
    tasks:[{
       text:'Get The Milk',
       complete:true
     },{
        text:'Wash Your Teeth',
        complete:false 
     },{
         text:'Go To Bath',
         complete:false
     }],
     getTaskToDo() {
      return tasks.tasks.filter(findUndone => findUndone.complete === false)
      }
}

const getWhat  = tasks.getTaskToDo()
console.log(getWhat);
// //methode getTaskToDo

// let findSomething=[];
// tasks.tasks.forEach((value) => {
//   if(value.complete === false){
//      findSomething.push(value.text);
//    }
// })
// return findSomething;
       


// let findSomething= tasks.tasks.map((value) => {
//    if(value.complete === false){
//        return value.text
//     }
//   })
//     return findSomething;
    