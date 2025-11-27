var value = document.getElementById("value")
console.log(value)
var a=0
function increment(){
    a+=1
    value.innerHTML=`<span style= 'color:red;'>${a}</span>`;
}

function decrement(){
    a-=1
    value.innerHTML=`<span style= 'color:blue;'>${a}</span>`;
}


function reset(){
    a=0
    value.innerHTML=`<span style= 'color:green;'>${a}</span>`;
}
console.log(document.getElementById("desc"))
document.getElementById("desc").style.color="blue"
