let tasks = [
    { title: "read book", date: "15.10.2012", complete: true },
    { title: "read1 book", date: "15.11.2012", complete: true },
    { title: "read2 book", date: "15.12.2012", complete: false },
    { title: "read3 book", date: "15.01.2012", complete: true },
    { title: "read8 book", date: "15.02.2012", complete: false }
];

gettaskfromlocalstorge();

 function addtask(){
document.getElementById("mytask").innerHTML = "";
var index=0;
for (let task of tasks) {




    let taskElement = `
  
    <div class="task ${ task.complete?'done':''}">
  <div class="title">
    <h1>${task.title}</h1>
    <span>${task.date}</span>
  </div>
  <div class="buttons">
    <button onclick="EditTask(${index})" id="edit" style="background-color: blue; color: aliceblue;" class="btn">E</button>
    
    <button onclick="deleteTask(${index})" id="delete" style="background-color: brown; color: aliceblue;" class="btn">D</button>
    <button onclick="completTask(${index})" id="done"  style="background-color: ${task.complete?'green':'rgb(107,34,65)'}; color: aliceblue;" class="btn">${task.complete?'dn':'x'}</button>
  </div>

</div>`;
    document.getElementById("mytask").innerHTML += taskElement;
    index++;
}




 }



 addtask();
document.getElementById("add").addEventListener("click", (e) => {
 var addnewtask=prompt("Enter task");



 var now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let date = year + "." + month + "." + day + "     ( " + hour + ":" + min + " )";

  var newtask={ title: addnewtask, date: date, complete: false };
  tasks.push(newtask);
 console.log(addnewtask);




addtask();
});



function deleteTask(index){
  let task=tasks[index];
let x=confirm("Are you sure you want to delete this Task : "+task.title+" ?");

if(x==true){ tasks.splice(index, 1); addtask(); alert("the Task has been deleted");  }

storgetask();

}
function EditTask(index){
  let task=tasks[index];
var newtitel=prompt("enter new task ",task.title);

task.title=newtitel;
storgetask();
addtask();


}
function completTask(index){
  let task=tasks[index];
  (task.complete)?task.complete=false:task.complete=true;
  storgetask();
  addtask();
}
///=========STORAGE FUNTION
function storgetask(){
  
  let taskjson = JSON.stringify(tasks);
  localStorage.setItem("task",taskjson);
  
  console.log(taskjson);


}
function gettaskfromlocalstorge(){

  
  let retritevdata= JSON.parse(localStorage.getItem("task"));

  retritevdata==null?tasks=[]:tasks=retritevdata;
  


}




