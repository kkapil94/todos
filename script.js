const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("#todos");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    tod();
})
function tod(){
    const value = input.value;
    if(value)
    {
    const li = document.createElement("li");
    li.innerText = value;
    ul.appendChild(li);
    input.value="";
    li.addEventListener('click',()=>{
    li.classList.toggle("comp");
    updateLs();
    });
    li.addEventListener('contextmenu',(e)=>{
        li.remove();
        e.preventDefault();
        updateLs();
    })
    updateLs();
}
}
function updateLs(){
    todoel = document.querySelectorAll("li");
    to = [];
    todoel.forEach((li)=>
    {
        to.push({
            text : li.innerText,
            completed : li.classList.contains('comp'),
        });
    } );
    localStorage.setItem("to",JSON.stringify(to));
}
