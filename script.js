const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('linst-container');

function addTask(){
    if(inputBox.value ==''){
        
        alert("You must write something!");
        document.getElementById('input-box').focus();
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        document.getElementById('input-box').focus();
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// save data
function saveData(){
   localStorage.setItem("data",listContainer.innerHTML);
}
// show task
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();