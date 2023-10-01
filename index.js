const  title = document.getElementById("title");
const  description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];   // it is called ternary operator

// ternary operator is used to define "if-else" condition in one line

/* for eg.

    const tasks = 10 > 5 ? a : b;

    in the above condition if tasks satisfies the condition that 10 is greator than 5 then the 'a' will happen that is the "if" condition

    if not satisfies the condition then 'b' will happen that is the "else" condition
*/

showTasks();

function showTasks (){
    tasks.forEach( (value, index) => {

        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const myBtn = document.createElement("button");
        myBtn.setAttribute("class", "deleteBtn");
        myBtn.innerText = "-";
        div.append(myBtn);

        myBtn.addEventListener("click", () => {     // delete button click hone ke baad 

            removeTasks();                          // iska matlab saare remove kro 
            tasks.splice(index, 1);                 // fir array mein se delete krke 

            localStorage.setItem("tasks", JSON.stringify(tasks));   // isliye ki agar delete kre toh local storage se bhi ho jaaye

            showTasks();                            // fir se show krdo 
        })


        container.append(div);
    });
}

function removeTasks() {
    tasks.forEach( () =>{
        
        const div = document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();                          // it is used to stop the default functioning of a specific event

    removeTasks();

    tasks.push({
        title: title.value,
        description: description.value,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
});