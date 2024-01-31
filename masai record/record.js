// let body =document.querySelector("tbody");
// let Name =document.getElementById("name");
// let id =document.getElementById("employeeID");
// let department=document.getElementById("department");
// let Experience=document.getElementById("exp");
// let email=document.getElementById("email");
// let mobileNumber=document.getElementById("mbl");
// let form=document.querySelector("form");


// let data=[];
// form.addEventListener("submit",(e)=>{
//    e.preventDefault()
//     let obj={};
//     obj.name=Name.value;
//     obj.id=id.value;
//     obj.department=department.value;
//     obj.Experience=Experience.value;
//     obj.email=email.value;
//     obj.mobileNumber=mobileNumber.value;
//    data.push(obj);
//    body.innerHTML=null;
   
//    data.map((e)=>{
//     let row=document.createElement("tr");
//     let data1=document.createElement("td");
//     let data2=document.createElement("td");
//     let data3=document.createElement("td");
//     let data4=document.createElement("td");
//     let data5=document.createElement("td");
//     let data6=document.createElement("td");
//     let data7=document.createElement("td");
//     let delbtn=document.createElement("button");
//     let data8=document.createElement("td");
//     delbtn.innerText="delete";
//     delbtn.id="deleting";
    
//      console.log("found");
//     data1.innerText=e.name;
//     data2.innerText=e.id;
//     data3.innerText=e.department;
//     data4.innerText=e.Experience;
//     data5.innerText=e.email;
//     data6.innerText=e.mobileNumber;
//     if( data4.innerText > 5 ){
//         data7.innerText="Senior";
//     }else if( data4.innerText>2 && data4.innerText<5 ){
//         data7.innerText="Junior";
//     }
//     else if( data4.innerText<=1){
//         data7.innerText="Fresher";
//     }
//     let deleting =document.getElementById("deleting");
//      deleting.addEventListener("click",function(){
//         console.log("hsppen");
//      })
 
//     data8=delbtn;
//     row.append(data1,data2,data3,data4,data5,data6,data7,data8);
//     body.append(row)



// })
// })
let body = document.querySelector("tbody");
let form = document.querySelector("form");

let data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        name: document.getElementById("name").value,
        id: document.getElementById("employeeID").value,
        department: document.getElementById("department").value,
        Experience: document.getElementById("exp").value,
        email: document.getElementById("email").value,
        mobileNumber: document.getElementById("mbl").value
    };

    data.push(obj);
    body.innerHTML = "";

    data.forEach((e) => {
        let row = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");
        let data3 = document.createElement("td");
        let data4 = document.createElement("td");
        let data5 = document.createElement("td");
        let data6 = document.createElement("td");
        let data7 = document.createElement("td");
        let delbtn = document.createElement("button");
        let data8 = document.createElement("td");

        delbtn.innerText = "delete";
        delbtn.addEventListener("click", function () {
            console.log("delete button clicked");
            // Add your deletion logic here
            // For example, you can remove the corresponding row from the table
            row.remove();
        });

        data1.innerText = e.name;
        data2.innerText = e.id;
        data3.innerText = e.department;
        data4.innerText = e.Experience;
        data5.innerText = e.email;
        data6.innerText = e.mobileNumber;
        if (data4.innerText > 5) {
            data7.innerText = "Senior";
        } else if (data4.innerText > 2 && data4.innerText < 5) {
            data7.innerText = "Junior";
        } else if (data4.innerText <= 1) {
            data7.innerText = "Fresher";
        }

        data8.appendChild(delbtn);

        row.append(data1, data2, data3, data4, data5, data6, data7, data8);
        body.append(row);
    });
});

