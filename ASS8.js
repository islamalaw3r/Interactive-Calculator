let display = document.getElementById("display");

function appendValue(value){

    if(display.value === "0"){
        display.value = value;
    }
    else{
        display.value += value;
    }
}

function clearDisplay(){
    display.value = "0";
}

function deleteLast(){

    display.value = display.value.slice(0,-1);

    if(display.value === ""){
        display.value = "0";
    }
}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){

    let key = event.key;

    if("0123456789+-*/.%".includes(key)){
        appendValue(key);
    }

    else if(key === "Enter" || key === "="){
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }

});