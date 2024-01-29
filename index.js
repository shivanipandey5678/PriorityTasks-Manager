
let form=document.querySelector("form");
let task=document.getElementById("task");
let priority=document.getElementById("priority");

let tbody=document.querySelector("tbody");
let data=[];

form.addEventListener("submit",(e)=>{

 e.preventDefault();
 let obj={};

 obj.task1=task.value;
 obj.task2=priority.value;
 data.push(obj);
  tbody.innerText=null
 
 data.map((e)=>{
    let row=document.createElement("tr");
    let data1=document.createElement("td");
    let data2=document.createElement("td");
    data1.innerText=e.task1;
    data2.innerText=e.task2;
    row.append(data1,data2);
    tbody.append(row)
    if(e.task2=="High"){
       data2.style.backgroundColor="red";
    }
    else{
        data2.style.backgroundColor="green";
    }
 })
 
 })

