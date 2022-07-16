function numbersOnly(input){
    let regex = /[^0-9.*//+-]/gi;
    input.value = input.value.replace(regex, "");
}

function addToEquation(input){
    let value = input.value;
    let equation = document.getElementById("equation").value;
    document.getElementById("equation").value = equation + value;
}

function enterEquation(){
    let value = document.getElementById("equation").value;
    document.getElementById("equation").value = eval(value);
}

function clearEquation(){
    document.getElementById("equation").value = "";
}