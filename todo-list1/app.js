const inputid = document.getElementById("input-id");
const listid =  document.getElementById("list-container");

function addTask(){
    if( inputid.value === ''){
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputid.value;
        listid.appendChild(li);

        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputid.value == "";
    savedata();
    history();

}

listid.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("che");
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

function savedata(){
    localStorage.setItem("data",listid.innerHTML);
}

function history(){
    listid.innerHTML = localStorage.getItem("data");
}