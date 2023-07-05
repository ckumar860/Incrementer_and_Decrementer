const element = document.getElementById("counter");

function Incr(){
    let val = parseInt(element.textContent);
    val += 1;
    element.textContent = val;
}

function decr(){
    let val = parseInt(element.textContent);
    val -= 1;
    element.textContent = val;
}
