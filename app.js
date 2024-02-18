var sel = document.querySelector("h5");
var btn = document.querySelector("#confirm");
var flag = true;
btn.addEventListener("click",function(){
    if(flag == true){

        sel.innerText = "Friends"
        sel.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "gray"
        flag = false;
    }
    else{
        sel.innerText = "Visitor";
        sel.style.color = "blue";
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "rgb(5, 164, 237)"
        flag = true;
    }
    
})
