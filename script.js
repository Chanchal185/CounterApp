let value = document.getElementById("value-count");
let count =0;
function increment(){
    count = count + 1;

    value.innerText = count;
}
function decrement(){
    if(count<=0){
        alert("There is a negative value please increment first. ")
    }
    else{
    count = count - 1;
    value.innerText = count;
    }
}
increment()
decrement()