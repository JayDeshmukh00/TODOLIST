let inp=document.querySelector("input")
let ul=document.querySelector("ul")
let btn=document.querySelector("button")

btn.addEventListener("click",function(){
  let list=  document.createElement("li");
    list.innerText=inp.value;
    if(inp.value==""){
        alert("please enter something");
        return;
    }
    
    inp.value="";
    let del=document.createElement("button")
    del.classList.add("delete")
    
    del.innerText="delete";
    
    list.appendChild(del);
    ul.appendChild(list);


})

ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
        console.log("deleted")
    }
})

